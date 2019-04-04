const babelConfig = {
  presets: ['@babel/env', '@babel/react'],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
  ],
};

module.exports = require('babel-jest').createTransformer(babelConfig);