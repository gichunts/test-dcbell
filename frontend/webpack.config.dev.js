const chalk = require('chalk');
const { merge } = require('webpack-merge');
const constants = require('./src/constants');
const webpackConfigBase = require('./webpack.config.base');

module.exports = () => {
  const { development } = constants.environment;

  // eslint-disable-next-line no-console
  console.log('Environment: ', chalk.black.bgGreen(development));

  return merge(webpackConfigBase, {
    devServer: {
      open: true,
      port: 8080
    },
    devtool: 'inline-source-map',
    mode: development
  });
};
