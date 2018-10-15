
const paths = require('./paths');
const configFactory = require('./webpack.config');
const baseConfig = configFactory('development');
const extendConfigFn = require(paths.appPath + '/webpack.config.extend.js')

module.exports = extendConfigFn(baseConfig, process.env.NODE_ENV, { paths })
