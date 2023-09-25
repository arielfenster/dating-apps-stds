import { EpidemiologicalState, Gender } from '../types';

type AgentData = {
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
	constructor(public data: AgentData) {}
}
