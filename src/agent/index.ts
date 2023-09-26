import { Timer } from '../timer';
import { EpidemiologicalState, Gender } from '../types';

export type AgentData = {
	state: EpidemiologicalState;
	age: number;
	gender: Gender;
	populationAttractiveness: number; // mu
	seekingSexualPartner: boolean; // theta
	timeSeekingSexualPartner: number; // gamma1
	timeNotSeekingSexualPartner: number; // gamma2
	useDatingAppProbability: number; // d
	useDatingAppProbabilityIncrease: number; // deltaS
	useDatingAppProbabilityDecrease: number; // deltaN
	omega12: number;
	omega21: number;
};

export class Agent {
	constructor(public data: AgentData, public location: number, private timer: Timer) {}

	// TODO: remove this and use events instead (somehow)
	tick(delta?: number) {
		this.timer.tick(delta);
	}

	updateState(state: EpidemiologicalState) {
		this.data.state = state;
		this.timer.resetTime();
	}

	getInternalTime() {
		return this.timer.currentTime;
	}
}
