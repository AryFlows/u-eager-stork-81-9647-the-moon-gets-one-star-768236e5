import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review = "One star. The Moon keeps changing shape and gaslighting me about it. Yesterday it was full; today it is a sliver.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), review, "utf8");
