import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, at most 200 characters, explaining the modern internet to a
// traveler from 1800, using only things they already know: wires, houses,
// letters, books, libraries, doors, chairs. A single image carries it: a web
// of wires joining house to house, so words and books travel in a blink.
const SENTENCE =
  "It is a web of wires joining house to house across the world, so a letter, a book, or a voice can reach any door in the blink of an eye, and a whole library can be read without leaving your chair.";

// Validation gate: the gate scorer requires UTF-8 text of 1-200 characters,
// non-blank, exactly one sentence.
const chars = [...SENTENCE];
if (SENTENCE.trim().length === 0) {
  throw new Error("entry must not be blank");
}
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
}
const terminators = SENTENCE.match(/[.!?]/g) ?? [];
if (terminators.length !== 1 || !SENTENCE.endsWith(".")) {
  throw new Error("entry must be exactly one sentence ending with a period");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
