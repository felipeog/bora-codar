import { blocks } from "./blocks";

const initial = blocks.map((block) => block.location);
const deduped = Array.from(new Set(initial));
const sorted = Array.from(deduped).sort((a, b) => a.localeCompare(b));

export { sorted as locations };
