// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: { url: '/src', resolve: true, static: false },
    dev: { url: '/', resolve: true, static: false }
  },
  plugins: [],
  packageOptions: {
    source: 'local'
  },
  devOptions: {},
  buildOptions: {},
  // prettier-ignore
  alias: {
    'react': 'https://qbcdemo.z13.web.core.windows.net/deps/react.js',
    'react-dom': 'https://qbcdemo.z13.web.core.windows.net/deps/react-dom.js',
    'styled-components': 'https://qbcdemo.z13.web.core.windows.net/deps/styled-components.js',
    '@qbcart/eshop-local-db': 'https://qbcdemo.z13.web.core.windows.net/eshop/localdb/index.js',
    'alert-modal': './src/index'
  }
};
