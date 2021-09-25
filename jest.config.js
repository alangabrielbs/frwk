module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/pages/**/*.ts(x)?',
    '!src/utils/api.ts',
    '!src/utils/gtag.ts',
    '!src/utils/getStrapiMedia.ts',
    '!src/styles/**/*.ts',
    '!src/types/**/*.d.ts',
    '!src/**/mock.ts(x)?',
    '!src/components/SEO.tsx',
    '!src/components/Analytics/*.ts(x)?'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg)$':
      '<rootDir>/.jest/next-image.mock.js',
    '^@assets/(.*)$': '<rootDir>/public/$1',
    '\\.css$': 'identity-obj-proxy'
  }
}
