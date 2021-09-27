import { random as getRandom } from "./core";
import type { OptionsRange } from "../types";

const defaults = {
	min: Number.MIN_SAFE_INTEGER,
	max: Number.MAX_SAFE_INTEGER
};

/**
 * Generates a random integer for specified range: [ min, max ).
 */
export function randomInt({ min, max }: OptionsRange = defaults, random = getRandom): number {
	const a = Math.ceil(min);
	const b = Math.floor(max);
	return Math.floor(random() * (b - a)) + a;
}