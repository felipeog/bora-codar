import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  root: "./src",
  plugins: [mkcert()],
  server: {
    https: true,
  },
  test: {
    dir: "./test",
    testTimeout: 60_000,
    hookTimeout: 60_000,
  },
  build: {
    outDir: "../dist",
  },
});
