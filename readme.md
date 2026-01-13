# vue-tiptap

[![npm](https://img.shields.io/npm/dt/vue-tiptap)](https://www.npmjs.com/package/vue-tiptap)
[![npm](https://img.shields.io/npm/dw/vue-tiptap)](https://www.npmjs.com/package/vue-tiptap)
[![GitHub license](https://img.shields.io/github/license/neverbot/vue-tiptap)](https://github.com/neverbot/vue-tiptap/blob/master/LICENSE.md)
[![npm](https://img.shields.io/npm/v/vue-tiptap)](https://www.npmjs.com/package/vue-tiptap)

Example of using [tiptap 2](https://github.com/scrumpy/tiptap/) as a Vue 3 component without being completely renderless, so you can see how to use it inside your own components or even use it right away. It can be imported as a Vue 3 component, and you can see in the `example` directory how it would be used inside your application.

**Note**: now tiptap has their own examples and components for different frameworks (including vue 2 and vue 3), so maybe you should take a look to the official package [@tiptap/vue-3](https://tiptap.dev/installation/vue3). This package will probably not be updated anymore.

![screenshot](./img/screenshot.png)

## Install and Usage

```bash

# install dependencies
npm install

# build library (production mode)
# Output: dist/ (library files for distribution)
npm run build

# build example and serve preview (development mode)
# Output: dist-example/ (example build)
# Server: http://localhost:5173/
npm run dev

# alias for npm run dev
npm run serve
```

### Build Scripts

- **`npm run build`**: Builds the library in production mode. Outputs the distributable files to `dist/` directory (these are the files that will be included in other projects).
- **`npm run dev`**: Builds the example application in development mode to `dist-example/` and starts a preview server on port 5173. Useful for testing the example locally.
- **`npm run serve`**: Alias for `npm run dev`.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

SVG Icons from the original [TipTap](https://github.com/scrumpy/tiptap/) package.
