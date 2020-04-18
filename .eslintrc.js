module.exports = {
  root: true,

  extends: [
    '@calipsa/eslint-config-typescript',
  ],

  rules: {
    'lodash/import-scope': [2, 'method'],
  },
}
