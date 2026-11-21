// SPDX-License-Identifier: MIT
// Writes one fixed short text, meant to leave its reader at ease, to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const lines: string[] = [
  "The light on the barn roof tonight left its star",
  "before the first bread was ever baked.",
  "All that long way it crossed the dark without a sound,",
  "and now it lies on the hill, on the gate, on your sleeve,",
  "so softly the dust does not stir,",
  "and more of it is still on the way.",
];

const text: string = lines.join("\n");
const points: number = [...text].length;
if (points < 1 || points > 280 || text.trim() === "") {
  console.error(`entry has ${points} code points, outside 1 to 280`);
  process.exit(1);
}

const dir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), text, "utf8");
