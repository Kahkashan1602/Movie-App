module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "jest-transform-stub",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-stub",
    "^axios$": require.resolve('axios'), 
  },
};
