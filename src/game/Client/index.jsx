import {useRef, useEffect} from 'react';

import * as PIXI from 'pixi.js';

import Network from './network';

import {toIsometric} from '../shared';

PIXI.utils.skipHello();
PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;
PIXI.settings.ROUND_PIXELS = true;

// L is half the size of the tiles
const L = 32;

// x, y, z represents a position in the cartesean plane
const isoTransform = (x, y, z) => {
  return [(x - y) * L, (y + x) * (L / 2) - z * L];
};

const placeAt = (sprite, x, y, z) => {
  const [_x, _y] = isoTransform(x, y, z);
  sprite.x = _x;
  sprite.y = _y;
};

class Controller {
  constructor() {
    this.u = false;
    this.d = false;
    this.r = false;
    this.l = false;
    window.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 65:
        case 37:
          this.l = true;
          break;
        case 87:
        case 38:
          this.u = true;
          break;
        case 68:
        case 39:
          this.r = true;
          break;
        case 83:
        case 40:
          this.d = true;
          break;
        default:
          break;
      }
    });
    window.addEventListener('keyup', e => {
      switch (e.keyCode) {
        case 65:
        case 37:
          this.l = false;
          break;
        case 87:
        case 38:
          this.u = false;
          break;
        case 68:
        case 39:
          this.r = false;
          break;
        case 83:
        case 40:
          this.d = false;
          break;
        default:
          break;
      }
    });
  }
}

class Entity {
  constructor({x, y, redraw, sprite}) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
    this.redraw = redraw;
    this.renderable = null;
  }
}

export class Client {
  width = 640;
  height = 360;

  static state = {};

  receive(state) {
    const toLoad = [];

    for (const id in state) {
      const entity = state[id];

      if (Object.hasOwnProperty.call(this.state, id)) {
        Object.assign(this.state[id], entity);
      } else {
        this.state[id] = new Entity(entity);
      }

      entity.sprite.forEach(sprite => {
        // are we loading the resource already?
        if (!Object.hasOwnProperty.call(this.resources, sprite)) {
          this.app.loader.add(sprite, `${sprite}.png`);
          toLoad.push(sprite);
          this.resources[sprite] = false;
        }
      });
    }

    // load the textures we need
    if (toLoad.length) {
      this.app.loader.load((loader, resources) => {
        Object.assign(this.resources, resources);
      });
    }
  }

  constructor(view) {
    this.resources = {};
    this.state = {};
    this.following = null;
    this.controller = null;
    this.view = view;
    this.network = new Network(this);
  }

  start() {
    // player controller (only need one instance)
    this.controller = new Controller();

    this.app = new PIXI.Application({
      width: this.width,
      height: this.height,
      view: this.view,
    });

    const centerX = Math.round(this.app.renderer.width / 2),
      centerY = Math.round(this.app.renderer.height / 2);

    // stage contains all other containers
    const stage = new PIXI.Container();
    this.app.stage.addChild(stage);
    stage.x = centerX;
    stage.y = centerY;

    const grid = new PIXI.Container();
    stage.addChild(grid);
    grid.x = centerX;
    grid.y = centerY;

    const drawTile = (x = 0, y = 0, z = 0) => {
      const tile = new PIXI.Graphics();
      tile.lineStyle(1, 0x333333);
      // tile.beginFill(0x333333);

      // pivot to be center of tile
      tile.pivot.x = L;
      tile.pivot.y = L * 2 - L / 2;

      // transform from tile, to (x, y)
      let [_x, _y] = isoTransform(x, y, z);

      tile.drawPolygon(
        new PIXI.Point(L + _x, L + _y),
        new PIXI.Point(L * 2 + _x, L * 1.5 + _y),
        new PIXI.Point(L + _x, L * 1.5 + L * 0.5 + _y),
        new PIXI.Point(_x, L * 1.5 + _y)
      );

      const text = new PIXI.Text(`${x},${y},${z}`, {
        fontSize: 9,
        fill: 0x999999,
        fontFamily: 'sans-serif',
      });
      text.anchor.x = 0.5;
      text.anchor.y = 0.5;
      text.x = _x;
      text.y = _y;

      grid.addChild(tile);
      grid.addChild(text);
    };

    let mapSize = 5;
    for (let i = -mapSize; i <= mapSize; i++) {
      for (let ii = -mapSize; ii <= mapSize; ii++) {
        const element = i[i];
        drawTile(ii, i, 0);
      }
    }

    // contains all game assets
    const container = new PIXI.Container();
    stage.addChild(container);
    container.x = centerX;
    container.y = centerY;

    this.app.ticker.add(delta => {
      for (const id in this.state) {
        const entity = this.state[id];

        if (entity.redraw) {
          if (this.resources[entity.sprite[0]]) {
            entity.renderable = new PIXI.Sprite(
              this.resources[entity.sprite[0]].texture
            );

            // isometric base
            entity.renderable.anchor.x = 0.5;
            entity.renderable.anchor.y = 0.75;

            // add to container
            container.addChild(entity.renderable);

            entity.redraw = false;

            console.log(`Initialized [${id}]`);
            this.following = entity.renderable;
          }
        }

        if (entity.renderable) {
          entity.renderable.x = Math.round(entity.x);
          entity.renderable.y = Math.round(entity.y);
        }
      }
    });

    this.app.ticker.add(delta => {
      if (this.following) {
        stage.x = -this.following.x;
        stage.y = -this.following.y;
      }
    });

    setInterval(() => {
      this.network.send(JSON.stringify(this.controller));
    }, 1000 / 20);
  }
}

export default ({}) => {
  const view = useRef(null);
  useEffect(() => {
    if (view.current) {
      const game = new Client(view.current);
      game.start();
    }
  }, [view]);
  return (
    <div>
      <canvas
        ref={view}
        style={{
          width: 640 * 2,
          height: 360 * 2,
          imageRendering: 'pixelated',
        }}
      />
    </div>
  );
};
