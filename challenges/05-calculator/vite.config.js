import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  test: {
    dir: "./test",
    testTimeout: 60_000,
    hookTimeout: 60_000,
  },
  build: {
    outDir: "../dist",
  },
});
