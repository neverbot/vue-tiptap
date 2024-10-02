import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import path from 'path';

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      sass: {
        // To fix Deprecation [legacy-js-api]: The legacy JS API is deprecated
        // More info: https://sass-lang.com/d/legacy-js-api
        api: 'modern-compiler', // or 'modern'
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      // src/index.js is where we have exported the component(s)
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'VueTipTap',
      // the name of the output files when the build is run
      fileName: 'vue-tiptap',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
