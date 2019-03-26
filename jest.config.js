module.exports = {
  "setupFiles": [
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
    "**/*.{js,jsx}",
    "!**/fonts/**",
    "!**/images/**"
  ],
  "coveragePathIgnorePatterns": [
    "/coverage/"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 80
    }
  }
};
