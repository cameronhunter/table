/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  testEnvironment: "node",
};
