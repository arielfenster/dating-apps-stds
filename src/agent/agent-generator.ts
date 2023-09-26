import { Agent, AgentData } from '.';
import { AGENT_MAX_AGE, AGENT_MIN_AGE, MAX_DURATION_TIME, MIN_DURATION_TIME } from '../constants';
import { Timer } from '../timer';
import { EpidemiologicalState, Gender } from '../types';
import { generateInteger, generateProbability } from '../utils/random';

export class AgentGenerator {
	generate(graphSize: number) {
		const data: AgentData = {
			state: this.generateState(),
			age: this.generateAge(),
			gender: this.generateGender(),
			populationAttractiveness: generateProbability(),
			seekingSexualPartner: true,
			timeSeekingSexualPartner: this.generateDuration(),
			timeNotSeekingSexualPartner: this.generateDuration(),
			useDatingAppProbability: generateProbability(),
			useDatingAppProbabilityIncrease: generateProbability(),
			useDatingAppProbabilityDecrease: generateProbability(),
			omega12: generateProbability(),
			omega21: generateProbability(),
		};

		return new Agent(data, this.generateLocation(graphSize), new Timer());
	}

	private generateState() {
		const states: EpidemiologicalState[] = [
			EpidemiologicalState.SUSCEPTIBLE,
			EpidemiologicalState.EXPOSED,
			EpidemiologicalState.INFECTED,
			EpidemiologicalState.DEAD,
		];

		const index = generateInteger(0, states.length);
		return states[index];
	}

	private generateAge() {
		return generateInteger(AGENT_MIN_AGE, AGENT_MAX_AGE);
	}

	private generateGender() {
		return generateInteger(0, 1) === 0 ? Gender.MALE : Gender.FEMALE;
	}

	/**
	 * Generates a duration in minutes
	 * @returns number
	 */
	private generateDuration() {
		return generateInteger(MIN_DURATION_TIME, MAX_DURATION_TIME);
	}

	private generateLocation(graphSize: number) {
		return generateInteger(0, graphSize - 1);
	}
}
