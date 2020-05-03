module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2019,
    parser: "babel-eslint",
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended'
  ],
  rules: {
    'no-console': 'off',
    'vue/html-self-closing': ["error", {
      "html": {
        "void": "always",
        "normal": "always",
        "component": "always"
      }
    }],
    'vue/attribute-hyphenation': 'off',
    'no-var': 'error',
    'indent': ['error', 'tab'],
    'vue/html-indent': ['error', 'tab'],
    'object-curly-spacing': 'off',
    'semi': 'error',
    'space-before-function-paren': 'off',
    "require-await": 'off',
    'keyword-spacing': ["error", { "before": true }],
    'curly': 'error',
    'brace-style': ["error"],
    'no-empty': ["error", { "allowEmptyCatch": true }],
    'padding-line-between-statements': [
      "error",
      { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
      { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"]},
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "function", next: "*" }
    ],
    'no-multiple-empty-lines': ["error", { "max": 1, "maxEOF": 1 }],
    'eqeqeq': ["error", "always"],
  },
};
