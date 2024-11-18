import globals from "globals"
import eslint from "@eslint/js"
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
	{ languageOptions: { globals: globals.node } },
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	eslintPluginPrettierRecommended
]
