import { Edge } from '../edge';
import { Graph } from '../graph';
import { Node } from '../node';

export abstract class GraphGenerator {
	constructor(protected numNodes: number, protected numEdges: number) {}

	generate() {
		return new Graph(this.generateNodes(), this.generateEdges());
	}

	protected abstract generateNodes(): Node[];
	protected abstract generateEdges(): Edge[];
}
