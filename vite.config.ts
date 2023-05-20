import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@src',
        replacement: './src',
      },
    ],
  },
  build: {
    outDir: 'build',
    target: 'modules',
    minify: true,
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'JonathanUi',
      formats: ['cjs', 'es', 'umd', 'iife'],
      fileName: (format) => `jonathan-ui.${format}.js`,
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
