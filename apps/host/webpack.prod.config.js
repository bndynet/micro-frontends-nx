const { merge } = require('webpack-merge');
const webpack = require("webpack");
const versionFile = require('webpack-version-file');

const toolConfig = require('../../tools/config.json');
const configFn = require('./webpack.config.js');

module.exports = async (config, context) => {
  const conf = await configFn(config, context);
  return merge(conf, {
    plugins: [
      new webpack.DefinePlugin({
        BUILT_AT: JSON.stringify(new Date()),
      }),
      new versionFile({
        output: `./dist/${toolConfig.buildInfoFile}`,
        package: './package.json',
        verbose: false,
        templateString: 
`{
    "name": "<%= name %>",
    "version": "<%= version %>",
    "built_at": "<%= buildDate %>"
}`,
      })
    ],
  });
};
