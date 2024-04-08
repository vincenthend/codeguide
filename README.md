# @vincenthend/style-guides
Vincent's private style guide

## Quick Start
Install with:
```
pnpm add https://github.com/vincenthend/codeguide.git
```

Then add into the config file as needed

`.eslintrc`
```
{
  "extends": [
    "./node_modules/@vincenthend/style-guides/react.eslintrc",
    "./node_modules/@vincenthend/style-guides/typescript.eslintrc"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "ignorePatterns": ["**/*.js"]
}

```


`.pretierrc`

```js
const config = require('@vincenthend/style-guides/.prettierrc')

module.exports = config
```