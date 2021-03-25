// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: { url: '/', resolve: true, static: false }
  },
  plugins: ['@snowpack/plugin-sass'],
  packageOptions: {
    source: 'local'
  },
  devOptions: {},
  buildOptions: {
    out: 'dist'
  }
};
