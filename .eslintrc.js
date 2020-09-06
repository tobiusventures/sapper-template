module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb-base'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['svelte3'],
  rules: {
    // airbnb disagreements
    indent: [2, 2, { SwitchCase: 1 }],
    'no-restricted-syntax': ['error', 'ForInStatement'],
    'no-param-reassign': ['error', { props: false }],

    // mac/windows equalizer (see .gitattributes for real fix)
    'linebreak-style': 0,

    // svelte is not standard javascript
    'import/no-mutable-exports': 0,
    'import/prefer-default-export': 0,
    'no-multiple-empty-lines': [2, { max: 2, maxBOF: 2, maxEOF: 2 }],
  },
};
