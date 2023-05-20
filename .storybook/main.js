const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../**/*.stories.tsx'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-backgrounds',
    'storybook-dark-mode',
  ],
  features: {
    storyStoreV7: true,
  },
  viteFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@src': path.resolve(__dirname, 'src'),
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
