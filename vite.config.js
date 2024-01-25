import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      // src/indext.js is where we have exported the component(s)
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
