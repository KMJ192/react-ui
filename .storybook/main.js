const path = require('path');

module.exports = {
  stories: ['../**/*.stories.tsx'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-backgrounds',
    'storybook-dark-mode',
  ],
  viteFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@src': path.resolve(__dirname, '../src'),
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@icons': path.resolve(__dirname, '../src/static/icons'),
    };

    return config;
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
