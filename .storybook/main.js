// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  core: {
    builder: 'webpack5'
  },
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials', 'storybook-addon-next-router'],
  babel: async (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      require.resolve('@babel/plugin-transform-react-jsx')
    ]
  }),
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    config.resolve.alias = {
      '@assets': path.resolve(`${process.cwd()}/public`)
    }

    return config
  }
}
