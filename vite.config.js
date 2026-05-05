import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    "process.env.REACT_APP_BACKEND_URL": JSON.stringify(
      process.env.VITE_BACKEND_URL || "http://localhost:8001",
    ),
  },
  server: {
    fs: {
      allow: [path.resolve(__dirname)],
    },
  },
});
