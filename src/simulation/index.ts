import { Agent } from '../agent';
import { Graph } from '../graph';
import { PARAMETERS } from '../constants';
import { Population } from '../population';
import { Timer } from '../timer';
import { EpidemiologicalState } from '../types';
import { buildArrayOfSize } from '../utils/misc';

export class Simulation {
	constructor(private population: Population, private graph: Graph, private timer: Timer) {}

	run() {
		while (this.timer.hasTimeRemaining()) {
			this.runStep();
			this.timer.tick();
		}
	}

	/**
	 * The main logic of the class. Each function call represents a step in time
	 * @param counters
	 */
	private runStep() {
		const agentsInNodes = this.dispersePopulation();

		for (let i = 0; i < agentsInNodes.length; i++) {
			const agentsInSpecificNode = agentsInNodes[i];
			this.runSEIDStep(agentsInSpecificNode);
		}
	}

	private dispersePopulation() {
		const agentsInNodes: Agent[][] = buildArrayOfSize(this.graph.getSize() + 1).map((_) =>
			buildArrayOfSize(this.graph.getSize()),
		);

		this.population.agents.forEach((agent) => agentsInNodes[agent.location].push(agent));
		return agentsInNodes;
	}

	private runSEIDStep(nodePopulation: Agent[]) {
		const counters = {
			[EpidemiologicalState.SUSCEPTIBLE]: 0,
			[EpidemiologicalState.INFECTED]: 0,
		};

		nodePopulation.forEach((agent) => {
			if (agent.data.state === EpidemiologicalState.SUSCEPTIBLE) {
				counters.SUSCEPTIBLE++;
			} else if (agent.data.state === EpidemiologicalState.INFECTED) {
				counters.INFECTED++;
			}
		});

		let infectedNow = 0;
		let infectedCount = Math.ceil(PARAMETERS.BETA * counters['SUSCEPTIBLE'] * counters['INFECTED']);

		nodePopulation.forEach((agent) => {
			const { state } = agent.data;
			agent.tick();

			if (state === EpidemiologicalState.SUSCEPTIBLE && infectedNow < infectedCount) {
				agent.updateState(EpidemiologicalState.EXPOSED);
				infectedNow++;
				return;
			}

			if (state === EpidemiologicalState.EXPOSED && agent.getInternalTime() >= PARAMETERS.PHI) {
				agent.updateState(EpidemiologicalState.INFECTED);
				return;
			}

			if (state === EpidemiologicalState.INFECTED && agent.getInternalTime() >= PARAMETERS.GAMMA) {
				agent.updateState(EpidemiologicalState.DEAD);
			}
		});
	}
}
