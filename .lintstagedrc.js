module.exports = {
  '*.{ts,tsx}': ['eslint --fix'],
  '*.css': ['stylelint --fix'],
  '*.scss': ['stylelint --custom-syntax postcss-scss --fix']
}