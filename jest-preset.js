module.exports = {
  "setupFiles": [
    "<rootDir>/node_modules/core-js/client/shim.js",
    require.resolve('./jest.setup.js')
  ],
  "rootDir": "src/",
  "modulePaths": [],
  "moduleDirectories": [
    "node_modules",
    "<rootDir>"
  ],
  "moduleFileExtensions": [
    "js",
    "jsx",
    "json",
    "ts",
    "tsx"
  ],
  "moduleNameMapper": {
    ".+\\.(css|scss)$": "<rootDir>/__mocks__/style.js"
  },
  "testPathIgnorePatterns": [
    "/node_modules/"
  ],
  "testURL": "http://localhost/",
  transform: {
    "^.+\\.(js|jsx)$": require.resolve('./jest.transform.js'),
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "verbose": true,
  "coverageDirectory": "../coverage",
  "collectCoverage": false,
  "collectCoverageFrom": [
    "**/*.{js,jsx,ts,tsx}",
    "!**/fonts/**",
    "!**/images/**"
  ],
  "coveragePathIgnorePatterns": [
    "<rootDir>/coverage/"
  ]
};
