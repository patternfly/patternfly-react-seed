/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/src/test/mocks/styleMock.cjs',
    '\\.(svg|png|jpg|jpeg|gif|ico|webp)$': '<rootDir>/src/test/mocks/fileMock.cjs',
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    'monaco-editor': '<rootDir>/src/test/mocks/monaco-editor.ts',
  },
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': ['ts-jest', { useESM: false }],
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@patternfly|react-router)/)',
  ],
  testMatch: ['**/__tests__/**/*.(ts|tsx|js)', '**/*.test.(ts|tsx|js)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts', '!src/test/**'],
};
