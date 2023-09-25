import { Agent } from './agent';
import { EpidemiologicalState, Gender } from './types';

const agent = new Agent({
	state: EpidemiologicalState.DEAD,
	age: 11,
	gender: Gender.FEMALE,
	populationAttractiveness: 11,
	seekingSexualPartner: true,
	timeSeekingSexualPartner: 11,
	timeNotSeekingSexualPartner: 11,
	useDatingAppProbability: 11,
	useDatingAppProbabilityIncrease: 11,
	useDatingAppProbabilityDecrease: 11,
	omega12: 11,
	omega21: 11,
});

console.log(agent);
