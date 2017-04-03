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
  /\.(md).(scss)$/i,
  /\.(wp).(scss)$/i
]

module.exports = config
