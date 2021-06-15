module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/ban-types': 'OFF',
    '@typescript-eslint/explicit-module-boundary-types': 'OFF',
    '@typescript-eslint/no-explicit-any': 'OFF',
    '@typescript-eslint/no-inferrable-types': 'OFF',
    '@typescript-eslint/no-non-null-assertion': 'OFF',
    '@typescript-eslint/no-var-requires': 'OFF',
    'no-self-assign': 'OFF',
  },
};
