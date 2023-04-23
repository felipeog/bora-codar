import { getRandomIntegerInclusive } from "../utils/getRandomIntegerInclusive";

const state = {
  nps: getRandomIntegerInclusive(-20, 100),
  sales: {
    expected: 100,
    actual: getRandomIntegerInclusive(50, 100),
  },
  month: {
    expected: 70_000,
    actual: getRandomIntegerInclusive(50_000, 70_000),
  },
  week: Array(7)
    .fill()
    .map((_) => Math.random()),
};

export { state };

// console.log("🚀 ~ state:", state);
