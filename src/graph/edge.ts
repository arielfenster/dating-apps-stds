import { Node } from './node';

export class Edge {
	constructor(public start: Node, public end: Node, public weight: number = 1) {}
}
