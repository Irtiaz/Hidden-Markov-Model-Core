import { HiddenMarkovModel } from "./hmm";

const model = new HiddenMarkovModel([
	[0.7],
	[0.3]
], [
	[0.9],
	[0.2]
], [
	0.5
]);

console.log(model);
console.log(model.filtering([0, 1, 0]));
