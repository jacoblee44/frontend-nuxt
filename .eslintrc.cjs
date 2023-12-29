module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript', 'prettier', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
    'vue/multi-word-component-names': 'off',
    /** There were some issues with named lodash imports, so it had to be disabled. */
    'import/named': 'off',
    /** Sometimes you want to define a placeholder function as async while functionality is not yet implemented. */
    'require-await': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        trailingUnderscore: 'allow',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
  },
};
