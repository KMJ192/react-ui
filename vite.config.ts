import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  resolve: {
    alias: [
      {
        find: '@src',
        replacement: '/src',
      },
      {
        find: '@styles',
        replacement: '/src/styles',
      },
      {
        find: '@icons',
        replacement: '/src/static/icons',
      },
    ],
  },
  build: {
    outDir: 'build',
    target: 'modules',
    minify: true,
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'react-ui',
      formats: ['cjs', 'es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      treeshake: true,
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
