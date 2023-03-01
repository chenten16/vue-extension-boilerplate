module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  globals: {
    chrome: 'readonly',
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 6, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
};
