import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// Su GitHub Actions il base path segue il nome della repo (GITHUB_REPOSITORY = "utente/repo"),
// così rinominare la repo non rompe Pages. In locale resta "/".
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];

export default defineConfig({
  plugins: [svelte()],
  base: repo ? `/${repo}/` : "/",
  server: {
    port: Number(process.env.PORT) || 5173,
  },
});
