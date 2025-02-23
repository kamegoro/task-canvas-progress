import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/progress.ts",
      name: "task-progress",
      fileName: ["task-progress"],
    },
  },
});
