const { withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'shell',
  remotes: {
    'notifications': 'http://localhost:4201/remoteEntry.js',
  },
  shared: {
    "@angular/core": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    "@angular/common": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    "@angular/router": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    "rxjs": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
  },
});
