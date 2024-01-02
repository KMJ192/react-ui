const path = require('path');
const wasm = require('vite-plugin-wasm');

module.exports = {
  stories: ['../src/stories/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    'storybook-dark-mode',
  ],
  viteFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@src': path.resolve(__dirname, '../src'),
      'src/styles': path.resolve(__dirname, '../src/styles'),
      '@icons': path.resolve(__dirname, '../src/static/icons'),
      '@migration': path.resolve(__dirname, '../src/components/migration'),
      '@css': path.resolve(__dirname, '../src/css'),
    };

    config.plugins.push(wasm());

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
