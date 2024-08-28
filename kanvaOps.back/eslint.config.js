import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import xoConfig from 'eslint-config-xo';
import xoTypescriptConfig from 'eslint-config-xo-typescript';

const compat = new FlatCompat({
  baseDirectory: import.meta.url,
  resolvePluginsRelativeTo: import.meta.url,
});

export default [
  js.configs.recommended,
  {
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        tsconfigRootDir: new URL('.', import.meta.url).pathname,
        project: './tsconfig.json',
      },
    },
    plugins: {
      xo: xoConfig,
      'xo-typescript': xoTypescriptConfig,
      prettier: prettierConfig,
    },
    rules: {
      ...xoTypescriptConfig.rules,
      ...prettierConfig.rules,
    },
  },
  {
    files: ['*.js', '*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      ...xoConfig.rules,
      ...prettierConfig.rules,
    },
  },
  {
    languageOptions: {
      globals: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
      },
    },
  },
];
