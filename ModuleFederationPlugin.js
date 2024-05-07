const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        avto: 'avto@http://localhost:3001/remoteEntry.js', // Adjust the URL based on where your microfrontend is hosted
      },
      shared: ['react', 'react-dom'],
    }),
  ],
};
