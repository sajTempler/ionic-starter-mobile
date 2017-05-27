config = require('@ionic/app-scripts/config/sass.config.js')

config.autoprefixer = {
  browsers: [
    'last 2 versions',
    'iOS >= 7',
    'Android >= 4',
  ]
}

config.excludeFiles = [
  // /\.(ios).(scss)$/i,
  // /\.(md).(scss)$/i,
  /\.(wp).(scss)$/i
]

config.postCssPlugins = [
  require('postcss-pxtorem')({
    minPixelValue: 1.1,
    propList: ['*'],
    rootValue: 112.5,
    selectorBlackList: [/^html$/]
  })
]

module.exports = config
