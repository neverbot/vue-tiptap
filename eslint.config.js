import globals from 'globals';
import babelParser from '@babel/eslint-parser';
import eslintJsonc from 'eslint-plugin-jsonc';
import eslintJsoncParser from 'jsonc-eslint-parser';
import html from 'eslint-plugin-html';
import vueParser from 'vue-eslint-parser';
import vue from 'eslint-plugin-vue';
import prettier from 'eslint-plugin-prettier';
import js from '@eslint/js';

export default [
  {
    // global ignores
    // folders can only be ignored at the global level, per-cfg you must do: '**/dist/**/*'
    ignores: ['**/dist/'],
  },
  // general defaults
  js.configs.recommended,
  {
    files: ['**/*.js'],
    rules: {
      'prettier/prettier': [
        'error',
        {},
        {
          usePrettierrc: true,
        },
      ],
      'no-console': 'warn',
    },
    plugins: {
      prettier,
    },
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      parserOptions: {
        requireConfigFile: false,
        allowImportExportEverywhere: true,

        ecmaFeatures: {
          experimentalObjectRestSpread: true,
        },
      },
    },
  },
  {
    files: ['**/*.json'],
    ignores: ['**/package.json', '**/package-lock.json'],
    plugins: {
      jsonc: eslintJsonc,
      prettier,
    },
    languageOptions: {
      parser: eslintJsoncParser,
      parserOptions: {
        jsonSyntax: 'JSON',
      },
    },
    rules: {
      'prettier/prettier': [
        'error',
        {},
        {
          usePrettierrc: true,
        },
      ],
      'no-console': 'warn',
    },
  },
  {
    files: ['**/*.html'],
    plugins: {
      html,
    },
  },
  ...vue.configs['flat/essential'],
  ...vue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    plugins: {
      vue,
    },
    languageOptions: {
      parser: vueParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      // parserOptions: {
      // extraFileExtensions: ['.vue'],
      // parser: babelParser,
      // requireConfigFile: false,
      // parser: {
      //   // Script parser for `<script>`
      //   js: '@babel/eslint-parser',
      //   javascript: '@babel/eslint-parser',
      //   '<script>': '@babel/eslint-parser',
      //   // js: 'espree',
      //   // javascript: 'espree',
      //   // '<script>': babelParser,
      //   // Script parser for `<script lang="ts">`
      //   // ts: '@typescript-eslint/parser',
      //   // ts: ts,
      //   // Script parser for vue directives (e.g. `v-if=` or `:attribute=`)
      //   // and vue interpolations (e.g. `{{variable}}`).
      //   // If not specified, the parser determined by `<script lang ="...">` is used.
      //   '<template>': espree,
      // },
      // },
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    processor: vue.processors['.vue'],
    rules: {
      ...vue.configs.base.rules,
      ...vue.configs.recommended.rules,
      ...vue.configs.essential.rules,
      ...vue.configs['strongly-recommended'].rules,
      'no-console': 'warn',
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      // 'vue/first-attribute-linebreak': [
      //   'error',
      //   {
      //     singleline: 'beside',
      //     multiline: 'below',
      //   },
      // ],
      // 'vue/html-indent': [
      //   'error',
      //   2,
      //   {
      //     attribute: 1,
      //     baseIndent: 1,
      //     closeBracket: 0,
      //     alignAttributesVertically: true,
      //     ignores: [],
      //   },
      // ],
    },
  },
];
