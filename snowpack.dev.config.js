// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: { url: '/src', resolve: true, static: false },
    dev: { url: '/', resolve: true, static: false }
  },
  plugins: ['@snowpack/plugin-sass'],
  packageOptions: {
    source: 'local'
  },
  devOptions: {},
  buildOptions: {}
};
