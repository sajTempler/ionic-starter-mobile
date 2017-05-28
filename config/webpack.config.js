config = require('@ionic/app-scripts/config/webpack.config.js')

config.resolve.alias = {
  pace: 'pace-progress'
}

module.exports = config
