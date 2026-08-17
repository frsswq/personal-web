import { defineConfig } from "oxlint";
import antiSlop from "ultracite/oxlint/anti-slop";
import core from "ultracite/oxlint/core";
import { jsPluginSettings, selectJsPlugins } from "ultracite/oxlint/js-plugins";
import react from "ultracite/oxlint/react";
import remix from "ultracite/oxlint/remix";
import vitest from "ultracite/oxlint/vitest";

export default defineConfig({
  extends: [
    core,
    react,
    remix,
    vitest,
    antiSlop,
    selectJsPlugins(["react-doctor"]),
  ],
  ignorePatterns: core.ignorePatterns,
  settings: jsPluginSettings,
});
