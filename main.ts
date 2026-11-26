import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about a meeting that should have been an email.
// Fresh angle: the email itself is the victim, now in therapy.
const ENTRY =
  "Somewhere, an email is in therapy because we turned it into a meeting.";

// Gate from the bounty rules: the sealed scorer only accepts 1-200 chars.
const MAX_LENGTH = 200;

if (ENTRY.trim().length < 1 || ENTRY.length > MAX_LENGTH) {
  throw new Error(
    `entry must be 1-${MAX_LENGTH} characters, got ${ENTRY.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
