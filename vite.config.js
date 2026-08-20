import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// Shared base configuration
const baseConfig = {
  plugins: [vue()],
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
          // Every runtime dependency is externalized, not bundled: they are
          // all declared in package.json, so npm installs them alongside
          // this package. Bundling them would ship the same code twice and
          // risk a second ProseMirror instance in apps that use TipTap
          // directly.
          external: ['vue', '@tiptap/vue-3', '@tiptap/starter-kit'],
          output: {
            // Provide global variables to use in the UMD build
            // for externalized deps
            globals: {
              vue: 'Vue',
              '@tiptap/vue-3': 'TiptapVue3',
              '@tiptap/starter-kit': 'TiptapStarterKit',
            },
          },
        },
      },
    };
  }

  // Default config (for dev server without build)
  return baseConfig;
});
