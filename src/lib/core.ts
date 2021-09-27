export const random = Math.random;

//import { webcrypto } from "crypto";

/**
 * Generates a Uint32Array filled with random values.
 * Max generated values is 2**32 - 1 
 */
/* function uInt32ArrayRandom(integers = 1): Uint32Array {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	return webcrypto.getRandomValues(
		new Uint32Array(integers)
	);
} */

/**
 * Generates a random floating number in range: [0, 1).
 */
/* export function random(): number {
	const twoIntegers = uInt32ArrayRandom(2);
	// keep all 32 bits of the the first, top 20 of the second for 52 random bits
	const mantissa = twoIntegers[0] * (2 ** 20) + (twoIntegers[1] >>> 12);
	// shift all 52 bits to the right of the decimal point
	return mantissa * (2 ** (-52));
} */