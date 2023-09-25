import { Agent } from '.';
import { EpidemiologicalState, Gender } from '../types';
import { generateInteger, generateProbability } from '../utils/random';

export class AgentGenerator {
	generate() {
		const agent = new Agent({
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
		});

		return agent;
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
		return generateInteger(18, 50);
	}

	private generateGender() {
		return generateInteger(0, 1) === 0 ? Gender.MALE : Gender.FEMALE;
	}

	/**
	 * Generates a duration in minutes
	 * @returns number
	 */
	private generateDuration() {
		return generateInteger(10, 60);
	}
}
