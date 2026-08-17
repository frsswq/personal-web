import stylexPlugin from "@stylexjs/unplugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  // oxlint-disable-next-line no-named-as-default-member -- StyleX exposes Vite through its default plugin factory.
  plugins: [stylexPlugin.vite({ useCSSLayers: true }), react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
  },
});
