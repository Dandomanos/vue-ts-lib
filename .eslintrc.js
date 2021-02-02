module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  plugins: ['prettier'],
  rules: {
    'no-var': 1,
    'prefer-const': 1,
    'no-console': process.env.NODE_ENV !== 'development' ? 1 : 0,
    'no-debugger': process.env.NODE_ENV !== 'development' ? 1 : 0,
    'vue/require-v-for-key': 0,
    'vue/component-name-in-template-casing': 0,
    'no-unused-vars': 0,
    'require-await': 0,
    'lines-between-class-members': 0,
    camelcase: 0
  }
}
