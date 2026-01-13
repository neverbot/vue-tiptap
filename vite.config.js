import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// Shared base configuration
const baseConfig = {
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
};

export default defineConfig(({ mode }) => {
  // Development mode: build example to dist-example
  if (mode === 'development') {
    return {
      ...baseConfig,
      build: {
        outDir: 'dist-example',
        rollupOptions: {
          input: path.resolve(__dirname, 'index.html'),
        },
      },
    };
  }

  // Production mode: build library to dist
  if (mode === 'production') {
    return {
      ...baseConfig,
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
    };
  }

  // Default config (for dev server without build)
  return baseConfig;
});
