const { withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
    name: 'notifications',
    filename: 'remoteEntry.js',
    exposes: {
        './Routes': './projects/mfe-notifications/src/app/remote-entry.routes.ts',
    },
    shared: {
        "@angular/core": { singleton: true, strictVersion: false, requiredVersion: false },
        "@angular/common": { singleton: true, strictVersion: false, requiredVersion: false },
        "@angular/router": { singleton: true, strictVersion: false, requiredVersion: false },
        "rxjs": { singleton: true, strictVersion: false, requiredVersion: false },
    },
});
