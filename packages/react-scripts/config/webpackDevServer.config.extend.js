/* eslint-disable */

const paths = require('./paths');
const createBaseConfig = require('./webpackDevServer.config');

// make the extension file optional
const fs = require('fs-extra');
const extensionPath = paths.appPath + '/webpackDevServer.config.extend.js'
const extendConfigFn = fs.existsSync(extensionPath)
    ? require(extensionPath)
    : $ => $;

module.exports = function(proxy, allowedHost) {
    const baseConfig = createBaseConfig(proxy, allowedHost)
    return extendConfigFn(baseConfig, process.env.NODE_ENV, { paths })
}
