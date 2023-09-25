import { Agent } from './agent';
import { AgentGenerator } from './agent/agent-generator';

export class Population {
	constructor(private numAgents: number) {}

	generate() {
		const agents: Agent[] = [];
		const agentGenerator = new AgentGenerator();

		for (let i = 0; i < this.numAgents; i++) {
			agents.push(agentGenerator.generate());
		}

		return agents;
	}
}
