const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
                // '@primary-color': '#199e6d',
                '@layout-sider-background': 'white',
                '@layout-header-background': 'white',
             },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};