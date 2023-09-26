import { Population } from '.';
import { Agent } from '../agent';
import { AgentGenerator } from '../agent/agent-generator';

export class PopulationGenerator {
	constructor(private numAgents: number) {}

	generate(graphSize: number) {
		const agents: Agent[] = [];
		const agentGenerator = new AgentGenerator();

		for (let i = 0; i < this.numAgents; i++) {
			agents.push(agentGenerator.generate(graphSize));
		}

		return new Population(agents);
	}
}
