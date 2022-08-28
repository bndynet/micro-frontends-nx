const sharedLibraires = [
  '@angular/',
  '@ngrx',
  '@auth0',
  'es-cookie',
  '@mfe/', // Shared libraries, such as UiModule, please see /tsconfig.base.json paths node
  'rxjs',
  'primeng',
  // Place the shared libraries here
  // 'moment',
];

module.exports = {
  name: 'host',
  remotes: ['pages', 'docs', 'login', 'shop'],
  // By default, all packages in package.json will be as the shared,
  // Here to override it.
  shared: (libName, defaultConfig) => {
    console.log(`'${libName}',`);
    console.log('>>>>>>>>>>>>>');
    console.log(defaultConfig);
    if (sharedLibraires.find((lib) => libName.startsWith(lib))) {
      return defaultConfig;
    }
    // Returning false means the library is not shared.
    return false;
  },
};
