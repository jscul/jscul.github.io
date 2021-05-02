import * as PIXI from 'pixi.js';
import {useEffect, useRef, useState} from 'react';

import graph from './graph';

function sigmoid(t) {
	return 1 / (1 + Math.pow(Math.E, -t));
}

const getNodeGraphic = (label, size = 42) => {
	const n = new PIXI.Container();

	const lineThickness = 2;

	n.interactive = true;
	n.buttonMode = true;
	n.defaultCursor = 'pointer';
	n.on('click', function () {
		console.log('hello');
	});
	n.on('mouseover', function (e) {
		console.log(e);
	});
	n.pivot.x = size / 2;
	n.pivot.y = size / 2;

	let c = new PIXI.Graphics();
	c.lineStyle(lineThickness, 0x444444);
	c.beginFill(0x222222);
	c.drawCircle(n.width / 2, n.height / 2, size / 2 - lineThickness / 2);
	c.endFill();
	c.pivot.x = -size / 2;
	c.pivot.y = -size / 2;

	let t = new PIXI.Text(
		label,
		new PIXI.TextStyle({
			fill: '#fff',
			fontFamily: 'Fira Code',
			fontWeight: 400,
			fontSize: size / 2,
		})
	);
	t.pivot.x = -size / 2;
	t.pivot.y = -size / 2;
	t.anchor.x = 0.5;
	t.anchor.y = 0.5;
	t.resolution = 2;

	n.addChild(c, t);

	return n;
};

const connect = (nodeGraphics) => {
	const lines = [];
	const lineThickness = 1;

	for (let i = 0; i < nodeGraphics.length; i++) {
		let j = i + Math.floor(nodeGraphics.length / 3);
		if (j >= nodeGraphics.length) j -= nodeGraphics.length;
		let n1 = nodeGraphics[i],
			n2 = nodeGraphics[j];
		let l = new PIXI.Graphics();
		l.position.set(n1.x, n1.y);
		l.lineStyle(1, 0x333333)
			.moveTo(0, 0)
			.lineTo(n2.x - n1.x, n2.y - n1.y);
		lines.push(l);
	}
	return lines;
};

class Node {
	constructor(label) {
		this.label = label;
		this.key = Symbol(label);
		this.nodeGraphic = getNodeGraphic(this.label);
	}

	getNodeGraphic() {
		return this.nodeGraphic;
	}
}

export default ({}) => {
	const canvas = useRef();

	useEffect(() => {
		const app = new PIXI.Application({
			transparent: true,
			view: canvas.current,
			antialias: true,
			resolution: window.devicePixelRatio || 1,
			autoResize: true,
		});

		const container = new PIXI.Container();
		const nodesContainer = new PIXI.Container();
		const linesContainer = new PIXI.Container();
		container.addChild(linesContainer, nodesContainer);
		app.stage.addChild(container);

		// container.pivot.x = container.width / 2;
		// container.pivot.y = container.height / 2;

		// screen size
		const resize = (e) => {
			app.renderer.resize(window.innerWidth, window.innerHeight);
			container.x = app.screen.width / 2;
			container.y = app.screen.height / 2;
		};
		window.addEventListener('resize', resize);
		resize();

		const seed =
			'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-=_+{}[];:,.';
		const seed2 = '12';
		const nodes = [...seed].map((c) => {
			return new Node(c);
		});

		const nodeGraphics = nodes.map((n) => n.getNodeGraphic());
		nodesContainer.addChild(...nodeGraphics);

		let lines = connect(nodeGraphics);
		linesContainer.addChild(...lines);

		let aAngle = 19;
		window.addEventListener('click', () => {
			// add node
			// const n = new Node('a');
			// nodes.push(n);
			// nodeGraphics.push(n.getNodeGraphic());
			// nodesContainer.addChild(n.getNodeGraphic());

			aAngle += 1;
		});

		let clientX = 0,
			clientY = 0;
		window.addEventListener('mousemove', (e) => {
			[clientX, clientY] = [e.clientX, e.clientY];
		});

		// const texture = PIXI.Texture.from('/favicon_io/favicon-32x32.png');
		// const bunny = new PIXI.Sprite(texture);
		// bunny.anchor.set(0.5);
		// bunny.x = 200;
		// bunny.y = 500;
		// container.addChild(bunny);

		let t = 200;
		let log = new PIXI.Text(
			'',
			new PIXI.TextStyle({
				fill: '#fff',
				fontFamily: 'Fira Code',
				fontWeight: 400,
				fontSize: 24,
			})
		);
		if (true) container.addChild(log);
		app.ticker.add((delta) => {
			const info = [];
			info.push(aAngle);

			// spiral
			nodeGraphics.forEach((n, i) => {
				const angle = i * aAngle; // 4 is flower pattern // 7 is awesome
				// t += Math.sin(0.01 * delta);
				n.x = (t + angle) * Math.cos(angle);
				n.y = (t + angle) * Math.sin(angle);

				var mousePosition = app.renderer.plugins.interaction.mouse.global;
				const relativeMouseX = mousePosition.x - app.screen.width / 2;
				const relativeMouseY = mousePosition.y - app.screen.height / 2;

				const dist = Math.sqrt(
					(relativeMouseX - n.x) ** 2 + (relativeMouseY - n.y) ** 2
				);
				n.scale.set(-sigmoid(dist / 60) * 2 + 3);
			});

			//

			// rotation
			// container.rotation -= 0.0005 * delta;
			// nodeGraphics.forEach((n) => {
			// 	n.rotation = -container.rotation;
			// });

			// connecting lines
			linesContainer.removeChild(...lines);
			lines.length = 0;
			lines.push(...connect(nodeGraphics));
			linesContainer.addChild(...lines);

			// debugging
			log.text = info.join('\n');
			log.x = app.screen.width / 2 - 16;
			log.y = app.screen.height / 2 - 16;
			log.anchor.x = 1;
			log.anchor.y = 1;
			log.resolution = 2;
		});
	}, [canvas.current]);

	return (
		<canvas
			className={'graph'}
			ref={canvas}
			width={'100'}
			height={'100'}
			style={{
				position: 'fixed',
				top: 0,
				bottom: 0,
				right: 0,
				left: 0,
				zIndex: -1,
			}}
		/>
	);
};
