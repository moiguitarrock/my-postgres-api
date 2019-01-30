// jest.config.js
module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testPathIgnorePatterns: ['<rootDir>/(lib|build|docs|node_modules)/'],
  coveragePathIgnorePatterns: [
    '<rootDir>/(node_modules|db/seeds)/',
    '<rootDir>/index.js'
  ],
  collectCoverage: true,
  coverageReporters: ['lcov']
};
