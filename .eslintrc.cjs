module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'eslint:recommended',
  ignorePatterns: ['node_modules'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    // 'no-console': [
    //   1,
    //   {
    //     allow: ['warn', 'error']
    //   }
    // ]
  }
}
