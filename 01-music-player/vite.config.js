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
  },
  build: {
    outDir: "../dist",
  },
});
