import { EpidemiologicalState, Gender } from './types';

type AgentData = {
	state: EpidemiologicalState;
	age: number;
	gender: Gender;
	populationAttractiveness: number; // mu
	seekingSexualPartner: boolean; // theta
	timeSeekingSexualPartner: number; // delta1
	timeNotSeekingSexualPartner: number; // delta2
	useDatingAppProbability: number; // d
	useDatingAppProbabilityIncrease: number; // gammaS
	useDatingAppProbabilityDecrease: number; // gammaN
	omega12: number;
	omega21: number;
};

export class Agent {
	constructor(private data: AgentData) {}
}
