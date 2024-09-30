module.exports = {
  extends: "react-app",
  plugins: ['simple-import-sort', 'import-newlines'],
  rules: {
    'no-console': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // 1. Side effect imports at the start. For me this is important because I want to import reset.css and global styles at the top of my main file.
          ["^\\u0000"],
          // 2. `react` and packages: Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ["^react$", "^@?\\w"],
          // 3. Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group. (also relative imports starting with "../")
          ["^@", "^"],
          // 4. relative imports from same folder "./" (I like to have them grouped together)
          ["^\\./"],
          // 5. style module imports always come last, this helps to avoid CSS order issues
          ["^.+\\.(module.css|module.scss)$"],
          // 6. media imports
          ["^.+\\.(gif|png|svg|jpg)$"]
        ],
      },
    ],
    'import-newlines/enforce': ['error', { items: 5, forceSingleLine: false }],
    'no-unused-vars': 'off',
    'no-empty-function': ['error', { allow: ['constructors'] }],
    '@typescript-eslint/no-empty-function': ['error'],
    'import-newlines/enforce': ['error', { items: 5, forceSingleLine: false, "max-len": 120, }],
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
      },
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],

    // react rules
    'react-hooks/exhaustive-deps': 0,
  }
};
