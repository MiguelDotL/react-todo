var webpack = require('webpack');
var path = require('path');
var envFile = require('node-env-file');

var myENV = process.env.NODE_ENV
myENV = myENV || 'development';

try {
  envFile(path.join(__dirname, 'config/' + myENV + '.env'))
} catch(e) {

}

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
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(myENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
        MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID)
      }
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
      app: 'app',
      // -------- Styles and Libraries --------//
      // jQuery: 'node_modules/jquery/dist/jquery.min.js',
      styles: 'app/styles/style.scss',

      // -------- Redux Files --------//

      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      configureStore: 'app/store/configureStore.jsx',

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
  devtool: myENV === 'production' ? undefined : 'inline-source-map'
};
