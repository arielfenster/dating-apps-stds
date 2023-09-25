import { Graph } from '../graph';
import { Population } from '../population';
import { Timer } from '../timer';
import { EpidemiologicalState } from '../types';

type Counters = Record<EpidemiologicalState, number>;

export class Simulation {
	constructor(private population: Population, private graph: Graph, private timer: Timer) {}

	run() {
		const counters: Counters = {
			SUSCEPTIBLE: 0,
			EXPOSED: 0,
			INFECTED: 0,
			DEAD: 0,
		};

		while (this.timer.hasTimeRemaining()) {
			this.runStep(counters);
			this.timer.tick();
		}
	}

	/**
	 * The main logic of the class. Each function call represents a step in time
	 * @param counters
	 */
	private runStep(counters: Counters) {
		console.log('whhhaatttt');
	}
}
