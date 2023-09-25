import { Edge } from './edge';
import { Node } from './node';

export class Graph {
	constructor(public nodes: Node[], public edges: Edge[]) {}
}
