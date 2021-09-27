import { random as getRandom } from "./core";
import { randomInt } from "./integer";

/**
 * Pulls out a random element from an array or a character from a string.
 */
export function randomElement<T>(iterable: string | T[], random = getRandom): string | T {
	const randomIndex = randomInt({ min: 0, max: iterable.length}, random);
	return iterable[randomIndex];
}