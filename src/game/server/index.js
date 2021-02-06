// https://www.digitalocean.com/community/tutorials/how-to-develop-a-node-js-tcp-server-application-using-pm2-and-nginx-on-ubuntu-16-04

import Engine from './Engine';
import {isometric} from '../shared';
import Network from './network';

// CONSTS

const anchor = [
  // cubic anchor (.5 = midway) (defaut @ bottom base)
  0.5,
  0.5,
  0,
];

const L = 16;

/**
 * If a gameObject is out of bounds of a , move it to another tile.
 * @param {*} gameObject
 */
const migrate = gameObject => {
  // console.log(gameObject.x, gameObject.y, gameObject.z);
  // console.log(gameObject.dx, gameObject.dy, gameObject.dz);
  // gameObject.x += 1;
};

// SHAPES

class Point {}

class IsometricCoordinate {}

// -------------- SERVER GAME OBJECTS

// Game Map

class Tile {
  constructor(gameObjects = []) {
    // 3d isometric-tile coordinates
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.gameObjects = gameObjects;
  }

  add(gameObject) {
    // add gameObject to this tile
  }

  remove(gameObject) {
    // move gameObject to different tile
  }
}

const map = {
  // z
  0: {
    // y
    0: {
      //x
      0: [new Tile()],
    },
  },
};

// Game Objects

// static objects
class GameObject {
  constructor() {
    // which tile does this gameObject belong to?
    this.x = 0;
    this.y = 0;
    this.z = 0;

    // velocity
    this.vx = 0;
    this.vy = 0;
    this.vz = 0;

    // needs a redraw? (changed sprite / initial render)
    this.redraw = true;

    // sprites?
    this.sprite = ['test2', 'test'];
  }

  update() {}
}

class Collidable extends GameObject {
  constructor() {
    super();

    this.type = 0; // circle | diamond from center (0 | 1)
    this.length = 1; // length | radius
    this.height = 1; // cylinder | cube

    this.walkable = true; // can walk on top of?
    this.rigid = false; // pass through or push?
    this.gravity = false;
  }

  update() {
    return false;
  }
}

class Movable extends Collidable {
  constructor(props) {
    super();
    this.vx = 0;
    this.vy = 0;
    this.vz = 0;
  }

  update() {
    return false;
  }
}

// sentient (controlled) GameObject (AI or player)
class Entity extends Movable {
  constructor() {
    super();

    // control
    this.u = false;
    this.d = false;
    this.l = false;
    this.r = false;
  }

  update(friction = 0.4, gravity = 0.6) {
    let {u, d, l, r, vx, vy} = this;

    // speed
    const S = 4;

    if (u && !d) {
      vx += -S;
      vy += -S;
    } else if (!u && d) {
      vx += S;
      vy += S;
    }

    if (r && !l) {
      vx += S;
      vy += -S;
    } else if (!r && l) {
      vx += -S;
      vy += S;
    }

    // clamp magnitude of velocity vector
    const n = Math.sqrt(this.vx ** 2 + this.vy ** 2);
    const m = n === 0 ? 1 : Math.min(n, S) / n;

    vx *= friction * m;
    vy *= friction * m;

    if (Math.abs(vx) < 0.3) vx = 0;
    if (Math.abs(vy) < 0.3) vy = 0;

    // delta x / relative to tile position (clamped)
    this.x += vx;
    this.y += vy;

    this.vx = vx;
    this.vy = vy;

    // migrate tile if outside of current tile
    // migrate(this);

    this.vz *= gravity;

    return true;
  }

  receive(input) {
    Object.assign(this, input);
  }
}

const player = new Entity();

// -------------- SERVER

class Room {
  constructor(physics, entities) {
    this.id = 'lejaf890j3';
    this.physics = physics;
    this.entities = entities;
  }

  update() {}
}

export default class Server {
  constructor() {
    this.network = new Network(this);

    this.i = 0;

    // list of controllable entities
    // control is an array in case of taken control
    this.players = {
      ['Jf349q0QNHTn']: player,
    };

    this.rooms = [new Room({friction: 0.9}, {Jf349q0QNHTn: player})];
    this.engine = new Engine(this.update.bind(this));
  }

  // request from client to update controlled entity
  receive(input) {
    // find entity being controlled and handle
    this.players['Jf349q0QNHTn'].receive(input);
  }

  start() {
    this.engine.run();
  }

  update() {
    let i = this.rooms.length;
    const ret = {};
    while (i--) {
      let j = this.rooms[i].entities.length;
      for (const id in this.rooms[i].entities) {
        const entity = this.rooms[i].entities[id];
        if (entity.update()) {
          const {x: _x, y: _y, redraw, sprite} = entity;
          const [x, y] = isometric(_x, _y, 0);
          ret[id] = {x, y, sprite};
          if (redraw) ret[id].redraw = true;
          entity.redraw = false;
        }
      }
    }
    this.network.send(ret);
  }
}
