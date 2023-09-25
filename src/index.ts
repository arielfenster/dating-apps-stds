import { inspect } from 'util';
import { FullyConnectedGraphGenerator } from './graph/generators/fully-connected-graph-generator';

const graph = new FullyConnectedGraphGenerator(4);
console.log(inspect(graph.generate(), false, Infinity, true));
