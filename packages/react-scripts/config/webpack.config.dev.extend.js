/* eslint-disable */

const paths = require('./paths');
const configFactory = require('./webpack.config');
const baseConfig = configFactory('development');

// make the extension file optional
const fs = require('fs-extra');
const extensionPath = paths.appPath + '/webpack.config.extend.js'
const extendConfigFn = fs.existsSync(extensionPath)
    ? require(extensionPath)
    : $ => $;

module.exports = extendConfigFn(baseConfig, process.env.NODE_ENV, { paths })