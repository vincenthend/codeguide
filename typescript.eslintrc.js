const rules = require('./rules/typescript')

module.exports = {
  env: {
    jest: true,
    es2021: true,
    'jest/globals': true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  },
  ignorePatterns: ['**/dist/**/*', '**/coverage/**/*', '*.eslintrc.js'],
  plugins: [
    '@typescript-eslint',
    'import',
    'unused-imports',
    'prettier',
    'filenames',
    'jest'
  ],
  rules
}