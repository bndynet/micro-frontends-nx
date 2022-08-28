const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./module-federation.config');
const baseHref = '/mfe/';  // here need to sync with node `baseHref` of ./project.json
module.exports = withModuleFederation({
  ...config,
  remotes: [
    ['pages', `${baseHref}apps/pages`],
    ['docs', `${baseHref}apps/docs`],
    ['login', `${baseHref}apps/login`],
    ['shop', `${baseHref}apps/shop`],
  ],
});
