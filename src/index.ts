import { Edge } from './graph/edge';
import { Node } from './graph/node';
import { Population } from './population';

const population = new Population(3).generate();

console.log(new Edge(new Node(11), new Node(33), 22));
