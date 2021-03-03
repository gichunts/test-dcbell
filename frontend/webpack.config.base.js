const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: {
          loader: 'eslint-loader',
          options: {
            cache: true
          }
        }
      },
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './assets/favicon.png',
      template: './public/index.html'
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};
