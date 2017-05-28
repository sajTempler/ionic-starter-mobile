config = require('@ionic/app-scripts/config/webpack.config.js')

config.module.loaders.push({
  test: require.resolve('pace-progress'),
  loader: 'imports-loader?define=>false'
})

module.exports = config
