import { buildArrayOfSize } from '../../utils/misc';
import { Edge } from '../edge';
import { Node } from '../node';
import { GraphGenerator } from './graph-generator.interface';

export class FullyConnectedGraphGenerator extends GraphGenerator {
	constructor(protected numNodes: number) {
		super(numNodes, Infinity);
	}

	protected generateNodes() {
		const ids = buildArrayOfSize(this.numNodes).map((_, idx) => idx);

		return ids.map((id) => new Node(id));
	}

	protected generateEdges() {
		const edges: Edge[] = [];

		for (let i = 0; i < this.numNodes; i++) {
			for (let j = 0; j < this.numNodes; j++) {
				if (i !== j) {
					const edge = new Edge(new Node(i), new Node(j));
					edges.push(edge);
				}
			}
		}

		return edges;
	}
}
