// Famous Last Words at 1 Percent
//
// A dying phone spends its last sliver of battery on one final act:
// telling its owner the uncomfortable truth about their screen time.
// Deterministic: no clock, no randomness, no network, no input.
// Every run writes the exact same single line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LAST_WORDS =
  "I'm spending my last 1% telling you your screen time was 11 hours today. You're welcome.";

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LAST_WORDS + "\n", "utf8");
}

main();
