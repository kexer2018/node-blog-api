import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  { languageOptions: { globals: globals.node } },
  {
    rules: {
        eqeqeq: "off",
        "no-unused-vars": "error",
        "prefer-const": ["error", { "ignoreReadBeforeAssign": true }]
    }
},
  pluginJs.configs.recommended,
];