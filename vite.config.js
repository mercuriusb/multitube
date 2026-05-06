import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "build", // beibehalten, weil Cloudflare Pages auf "build" konfiguriert sein kann
  },
});
