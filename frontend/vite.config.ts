import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages serves the site at the LOWERCASE path /Edugrade.in/ —
  // the repo URL is case-insensitive for the page but ASSETS are case-sensitive,
  // and Pages publishes to the exact repo-name casing. Use lowercase everywhere.
  base: "/Edugrade.in/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
