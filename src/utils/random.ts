/**
 * Generates an integer between min (inclusive) and max (inclusive)
 * @param min number
 * @param max number
 * @returns number
 */
export function generateInteger(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generateProbability() {
	return Number(Math.random().toFixed(3));
}
