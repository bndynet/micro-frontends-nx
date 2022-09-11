const { merge } = require('webpack-merge');
const { withModuleFederation } = require('@nrwl/angular/module-federation');

module.exports = async (config, context) => {
  const federatedModules = await withModuleFederation(
    require('./module-federation.config')
  );
  return merge(federatedModules(config, context), {});
};
