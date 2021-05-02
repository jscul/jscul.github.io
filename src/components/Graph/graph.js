class Node {
	constructor(value) {
		this.value = value;
		this.adjacents = []; // adjacency list
	}

	addAdjacent(node) {
		this.adjacents.push(node);
	}

	removeAdjacent(node) {
		const index = this.adjacents.indexOf(node);
		if (index > -1) {
			this.adjacents.splice(index, 1);
			return node;
		}
	}

	getAdjacents() {
		return this.adjacents;
	}

	isAdjacent(node) {
		return this.adjacents.indexOf(node) > -1;
	}
}

class Graph {
	static UNDIRECTED = Symbol('undirected');
	static DIRECTED = Symbol('directed');

	constructor(directed = Graph.DIRECTED) {
		this.nodes = new Map();
		this.directed = directed;
	}

	addEdge(source, destination) {
		const sourceNode = this.addVertex(source);
		const destinationNode = this.addVertex(destination);

		sourceNode.addAdjacent(destinationNode);

		if (this.directed === Graph.UNDIRECTED) {
			destinationNode.addAdjacent(sourceNode);
		}

		return [sourceNode, destinationNode];
	}

	addVertex(value) {
		if (this.nodes.has(value)) {
			return this.nodes.get(value);
		} else {
			const vertex = new Node(value);
			this.nodes.set(value, vertex);
			return vertex;
		}
	}

	removeVertex(value) {
		const current = this.nodes.get(value);
		if (current) {
			for (const node of this.nodes.values()) {
				node.removeAdjacent(current);
			}
		}
		return this.nodes.delete(value);
	}

	removeEdge(source, destination) {
		const sourceNode = this.nodes.get(source);
		const destinationNode = this.nodes.get(destination);

		if (sourceNode && destinationNode) {
			sourceNode.removeAdjacent(destinationNode);

			if (this.directed === Graph.UNDIRECTED) {
				destinationNode.removeAdjacent(sourceNode);
			}
		}

		return [sourceNode, destinationNode];
	}
}

const graph = new Graph(Graph.UNDIRECTED);

const [first] = graph.addEdge(1, 2);

graph.addEdge(Symbol.for('1'), Symbol.for('2'));
graph.addEdge(Symbol.for('1'), Symbol.for('4'));
graph.addEdge(5, 2);
graph.addEdge(6, 3);
graph.addEdge(7, 3);
graph.addEdge(8, 4);
graph.addEdge(9, 5);
graph.addEdge(10, 6);

export default graph;
