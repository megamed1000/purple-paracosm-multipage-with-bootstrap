import { dirname, resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        cywilizacje: resolve(import.meta.dirname, "cywilizacje.html"),
        generic: resolve(import.meta.dirname, "generic.html"),
        merch: resolve(import.meta.dirname, "merch.html"),
        odcinki: resolve(import.meta.dirname, "odcinki.html"),
        postaci: resolve(import.meta.dirname, "postaci.html"),
        "q&a": resolve(import.meta.dirname, "q&a.html"),
        wymiary: resolve(import.meta.dirname, "wymiary.html"),
      },
    },
  },
});
