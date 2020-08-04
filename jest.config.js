/** @type {import('jest')} */
module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['jest-expect-message'],
  testMatch: ['**/*.spec.ts'],
  globals: {
    'ts-jest': {
      packageJson: 'package.json',
      diagnostics: false,
    },
  },
  moduleNameMapper: {
    '@vuedx/(.+)$': '<rootDir>packages/$1/src/index.ts',
  },
};
