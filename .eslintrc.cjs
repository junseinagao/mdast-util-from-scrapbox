'use strict';

/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  extends: ['plugin:n/recommended', 'prettier'],
  plugins: ['unicorn'],
  parserOptions: {
    ecmaVersion: 2022,
  },
  env: {
    es2022: true,
    node: true,
  },
  rules: {
    'n/no-extraneous-import': 0,
    'n/no-missing-import': 0,
    'n/no-missing-require': 0,
    'unicorn/prefer-node-protocol': 2,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.cts', '*.mts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'prettier',
      ],
      parserOptions: {
        project: true,
      },
      rules: {
        'strict': 0,
        'import/named': 0,
        '@typescript-eslint/array-type': ['error', { default: 'generic' }],
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/consistent-type-assertions': 2,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        'camelcase': 0,
        '@typescript-eslint/naming-convention': [
          1,
          {
            selector: ['variable', 'default'],
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'function',
            format: ['camelCase', 'PascalCase'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'parameter',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'memberLike',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'property',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'method',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'property',
            modifiers: ['requiresQuotes'],
            format: null,
          },
        ],
        '@typescript-eslint/no-require-imports': 2,
        '@typescript-eslint/promise-function-async': 2,
        '@typescript-eslint/require-array-sort-compare': 2,
        '@typescript-eslint/no-array-constructor': 2,
        '@typescript-eslint/no-duplicate-type-constituents': 2,
        '@typescript-eslint/no-empty-function': 0,
        'no-implied-eval': 0,
        '@typescript-eslint/no-implied-eval': 2,
        'no-throw-literal': 0,
        '@typescript-eslint/no-throw-literal': 2,
        'no-useless-constructor': 0,
        '@typescript-eslint/no-useless-constructor': 2,
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': [
          2,
          {
            ignoreRestSiblings: true,
            caughtErrors: 'all',
            argsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-unsafe-argument': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-unsafe-return': 0,
        'no-return-await': 0,
        '@typescript-eslint/return-await': 2,
      },
    },
  ],
};
