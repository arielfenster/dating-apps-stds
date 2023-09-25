import { generateInteger } from '../../utils/random';
import { Edge } from './../edge';
import { Node } from './../node';
import { GraphGenerator } from './graph-generator.interface';

export class RandomGraphGenerator extends GraphGenerator {
	protected generateNodes() {
		const ids = Array.from(Array(this.numNodes)).map((_, idx) => idx);

		return ids.map((id) => new Node(id));
	}

	protected generateEdges() {
		const edges: Edge[] = [];

		while (edges.length < this.numEdges) {
			const startId = generateInteger(0, this.numNodes);
			const endId = generateInteger(0, this.numNodes);

			if (startId === endId) continue;
			if (this.isEdgeAlreadyExist(edges, startId, endId)) continue;

			const edge = new Edge(new Node(startId), new Node(endId));
			edges.push(edge);
		}

		return edges;
	}

	private isEdgeAlreadyExist(edges: Edge[], startId: number, endId: number) {
		return edges.some((edge) => edge.start.id === startId && edge.end.id === endId);
	}
}
