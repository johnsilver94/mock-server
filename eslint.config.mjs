import eslint from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
	{ languageOptions: { globals: globals.node } },
	eslint.configs.recommended,
	...tseslint.configs.recommended
]
