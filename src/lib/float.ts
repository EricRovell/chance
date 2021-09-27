import { random as getRandom } from "./core";
import type { OptionsRange } from "../types";

const defaults = {
	min: 0,
	max: 1
};

/**
 * Generates a random float value.
 * 
 * TODO: fixed option.
 */
export function randomFloat({ min = 0, max = 1 }: OptionsRange = defaults, random = getRandom): number {
	return random() * (max - min) + min;
}