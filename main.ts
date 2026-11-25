// Famous Last Words at 1 Percent.
//
// A dying phone spends its last sliver of battery on one final act:
// telling its owner the uncomfortable truth about their screen time.
// The program is deterministic — no clock, no randomness, no network,
// no input — and writes the exact same single line on every run.

import { mkdirSync, writeFileSync } from "node:fs";

// The phone's parting shot: gratitude with a sting, aimed at 11 hours
// of screen time.
const DYING_WORDS = "I'm spending my last 1% telling you your screen time was 11 hours today. You're welcome.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The competition gate: a single line of 1-199 characters.
if (DYING_WORDS.length < 1 || DYING_WORDS.length > 199) {
  throw new Error(`entry must be 1-199 characters, got ${DYING_WORDS.length}`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, DYING_WORDS + "\n", "utf8");

console.log(`wrote ${DYING_WORDS.length} characters to ${OUT_FILE}`);
