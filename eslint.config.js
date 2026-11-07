import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { importX } from 'eslint-plugin-import-x'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist/**', 'coverage/**']),

  // Your app code
  {
    files: ['src/**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,              // no-undef, no-unused-vars, ...
      react.configs.flat.recommended,      // includes react/jsx-no-undef
      react.configs.flat['jsx-runtime'],   // no need to import React
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      importX.flatConfigs.recommended,     // unresolved imports, missing named exports
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: {
      react: { version: 'detect' },
      // lets import-x find .js/.jsx files, including extensionless imports
      'import-x/resolver-next': [createTypeScriptImportResolver()],
    },
    rules: {
      'no-unused-vars': ['error', { args: 'after-used', ignoreRestSiblings: true }],
      'react/prop-types': 'off',
      'import-x/no-unresolved': 'error', // already on in recommended; explicit so you can see it
    },
    linterOptions: { reportUnusedDisableDirectives: 'error' },
  },

  // Config files (vite.config.js, eslint.config.js) run in Node
  {
    files: ['*.config.{js,mjs,cjs}'],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
  },
])