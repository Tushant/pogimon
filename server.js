const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

if (process.env.NODE_ENV !== 'production') {
  console.log('DEVOLOPMENT ENVIRONMENT: Turning on WebPack Middleware...');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config');

  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    hot: true,
    inline: true,
    lazy: false,
    publicPath: webpackConfig.output.publicPath,
    contentBase: './dist/',
    stats: {
      colors: true,
      chunks: false,
      'errors-only': true
    }
  }));

  app.use(require('webpack-hot-middleware')(compiler));
} else {

  app.use(express.static(__dirname + '/dist'));
}

app.get('*', function (request, response) {

  response.sendFile(__dirname + '/dist/index.html');
});

app.listen(port);

console.log(`server started on port: ${port}`);
