const path = require('path');
const webpack = require('webpack'); // eslint-disable-line
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // eslint-disable-line

// if (!process.env.NODE_ENV) {
//     process.env.NODE_ENV = 'development';
// }

const isDevelopment = process.env.NODE_ENV === 'development';

const VENDOR_LIBS = [
    'react', 'react-dom', 'redux', 'react-redux',
    'react-router', 'react-router-redux', 'lodash',
    'express'
];

const entryPath = path.join(__dirname, 'src/index.js');

const config = {
  entry: {
    bundle: isDevelopment ? [
                            'webpack-hot-middleware/client',
                            'react-hot-loader/patch',
                            'webpack/hot/only-dev-server',
                            entryPath
                          ] : entryPath,
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },
  devtool: 'source-map',
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/,
      },
      {
        use: ['babel-loader'],
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ],
        test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|otf|ttf)$/,
      },
    ],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production')
      }
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
  ]
};
isDevelopment && config.plugins.push(new webpack.HotModuleReplacementPlugin());
!isDevelopment && config.plugins.push(
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          output: {
            comments: false,
            screw_ie8: true
          },
          compress: {
            screw_ie8: true,
            warnings: false,
            properties: true,
            sequences: true,
            dead_code: true,
            conditionals: true,
            comparisons: true,
            evaluate: true,
            booleans: true,
            unused: true,
            loops: true,
            hoist_funs: true,
            cascade: true,
            if_return: true,
            join_vars: true,
            drop_debugger: true,
            unsafe: true,
            hoist_vars: true,
            negate_iife: true
          },
          mangle: {
            screw_ie8: true,
            toplevel: true,
            sort: true,
            eval: true,
            properties: true
          },
        })
    );
module.exports = config;
