module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['import', 'prettier'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['*', 'test/**/*'],
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-plusplus': ['off'],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
      },
    ],
  },
};
