const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './src/app.js'
  },
  output: {
    filename: '_build/bundle.js'
  },
  module: {
    loaders: [//define to handle 
      {
        test: /\.js$/,//is it a a JS file?
        exclude: /node_modules/,//what should I exclude?
        loader: 'babel-loader',//which loader will we need to run the file against to?
        query: {
          presets: ['es2015-native-modules']//how to run the loader
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({//compress the JS
      compress: {
        warnings: false
      },
      output: {
        comments: false//remove the comments
      },
      sourceMap: true//create a source map to allow easy debugging
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    })
  ]
};