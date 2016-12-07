var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories:[
      'node_modules',
      './app/api',
      './app/components',
      './app/components/TodoApp',
    ],
    alias: {
      // -------- Styles and Libraries --------//
      // jQuery: 'node_modules/jquery/dist/jquery.min.js',
      styles: 'app/styles/style.scss',

      // -------- Redux Files --------//
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      store: 'app/store/storeConfig.jsx',

      // -------- Main App Components --------//
      // Nav: 'app/components/Nav.jsx',
      // Main: 'app/components/Main.jsx',
      // Home: 'app/components/Home.jsx',

      // -------- About Components --------//
      // About: 'app/components/About.jsx',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'inline-source-map'
};
