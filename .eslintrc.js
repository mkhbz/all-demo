module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12, // 指定使用的ecmascript版本，需要在env中添加上为true，如es2021：true
    sourceType: 'module', // 资源模式使用module，否则默认为script
  },
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/jsx-uses-react': 'on',
  },
};
