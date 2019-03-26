module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": require.resolve('./jest.transform.js'),
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "verbose": true,
  "testURL": "http://localhost/",
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
      "branches": 70,
      "functions": 70,
      "lines": 70,
      "statements": 70
    }
  }
};
