const path = require('path');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /.js.template/,
      use: [
        {
          loader: path.resolve('loaders/templated-loader.js')
        },
        ...Array.from(config.module.rules[0].use)
      ]
    });

    return config
  },
}
