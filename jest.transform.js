const babelConfig = {
  "plugins": [
    "transform-object-rest-spread",
    "transform-class-properties",
  ],
  "presets": [
    ["env"],
    "react"
  ]
};

module.exports = require('babel-jest').createTransformer(babelConfig);
