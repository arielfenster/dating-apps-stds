import { FullyConnectedGraphGenerator } from './graph/generators/fully-connected-graph-generator';
import { PopulationGenerator } from './population/population-generator';
import { Simulation } from './simulation';
import { Timer } from './timer';

const population = new PopulationGenerator(4).generate();
const graph = new FullyConnectedGraphGenerator(4).generate();
const timer = new Timer(60);

const sim = new Simulation(population, graph, timer);
sim.run();
