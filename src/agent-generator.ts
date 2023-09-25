import { Agent } from './agent';
import { EpidemiologicalState, Gender } from './types';
import { generateProbability, generateInteger } from './utils/random';

export class AgentGenerator {
	generate() {
		const agent = new Agent({
			state: EpidemiologicalState.SUSCEPTIBLE,
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
