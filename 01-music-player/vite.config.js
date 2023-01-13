import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  root: "./src",
  plugins: [mkcert()],
  server: {
    https: true,
  },
  build: {
    outDir: "../dist",
  },
});
