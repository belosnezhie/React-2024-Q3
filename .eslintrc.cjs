module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.app.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "react-compiler", "import", "prettier", "@typescript-eslint", "typescript-sort-keys"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react-compiler/react-compiler": "error",
    "no-return-await": "error",
      "no-var": "error",
      "no-debugger": "error",
      "no-restricted-syntax": ["off", "ForOfStatement"],
      "lines-between-class-members": "off",
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "object-curly-spacing": ["error", "always"],
      "key-spacing": ["error", { "afterColon": true }],
      "no-multi-spaces": "error",
      "sort-imports": ["error", { "ignoreDeclarationSort": true }],
      "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
      "import/prefer-default-export": "off",
      "import/no-duplicates": ["error", { "considerQueryString": true }],
      "import/order": [
        "error",
        {
          "groups": ["builtin", "external", "internal", "parent", "sibling"],
          "newlines-between": "always",
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          }
        }
      ],
      "import/exports-last": ["error"],
      "import/newline-after-import": ["error"],
      "padding-line-between-statements": [
        "error",
        { "blankLine": "always", "prev": "*", "next": "return" },
        { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
        {
          "blankLine": "any",
          "prev": ["const", "let", "var"],
          "next": ["const", "let", "var"]
        }
      ],
      "prettier/prettier": "error",
      "@typescript-eslint/return-await": ["error", "in-try-catch"],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/unbound-method": "error",
      "@typescript-eslint/no-misused-promises": [
        "error",
        { "checksVoidReturn": false }
      ],
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/lines-between-class-members": [
        "error",
        "always",
        { "exceptAfterSingleLine": true }
      ],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "tsx": "never",
          "ts": "never",
        }
      ],
      "typescript-sort-keys/interface": "off",
      "typescript-sort-keys/string-enum": "error"
  },
}
