module.exports = {
  transform: {
    '^.+\\.js$': require.resolve('./jest.transform.js'),
  },
  moduleFileExtensions: ['js'],
  moduleDirectories: ['node_modules', 'src'],
  testMatch: ['**/(*.)(spec|test).js?(x)'],
  testEnvironment: 'node',
  verbose: true,
};
