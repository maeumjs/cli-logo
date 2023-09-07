module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest'],
  },
  testMatch: ['**/__tests__/*.(ts|tsx)', '**/__test__/*.(ts|tsx)'],
  testPathIgnorePatterns: ['/node_modules/', 'example/', 'dist/'],
  setupFilesAfterEnv: ['<rootDir>/.configs/jest.setup.js'],
  // testSequencer: '<rootDir>/.configs/test.spec.js',

  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
  },
};
