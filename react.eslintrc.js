const rules = require('./rules/react')

module.exports = {
  env: {
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
    jsxPragma: null
  },
  ignorePatterns: ['**/dist/**/*', '**/coverage/**/*', '*.eslintrc.js'],
  plugins: [
    '@typescript-eslint',
    'react',
    'jsx-a11y',
    'react-hooks'
  ],
  rules,
  settings: {
    react: {
      version: '> 17.0.0'
    }
  }
}