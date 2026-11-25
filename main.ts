// The One-Liner Groan-Off — entry program.
// Writes one original one-line dad joke to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I told my sourdough starter a joke — it rose to the occasion, then loafed around all day.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(JOKE);
