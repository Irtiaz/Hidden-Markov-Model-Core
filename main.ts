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


// To get the probabilities of all timestamps from 1 to 100
console.log(model.overall([0, 0, 0], 0, 0));
