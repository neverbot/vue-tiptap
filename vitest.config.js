import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// Kept separate from vite.config.js: that one switches its whole config
// object on --mode (library vs example build) and vitest runs with no mode.
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'happy-dom',
    include: ['test/**/*.test.js'],
  },
});
