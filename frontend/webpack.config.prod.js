const chalk = require('chalk');
const { merge } = require('webpack-merge');
const constants = require('./src/constants');
const webpackConfigBase = require('./webpack.config.base');

module.exports = () => {
  const { production } = constants.environment;

  // eslint-disable-next-line no-console
  console.log('Environment: ', chalk.black.bgRed(production));

  return merge(webpackConfigBase, {
    mode: production
  });
};
