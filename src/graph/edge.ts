import { DEFAULT_EDGE_WEIGHT } from '../constants';
import { Node } from './node';

export class Edge {
	constructor(public start: Node, public end: Node, public weight: number = DEFAULT_EDGE_WEIGHT) {}
}
