const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { map } = require('ramda');

const paths = map(p => path.resolve.bind(null, __dirname, '..', p), {
  root: '',
  client: 'src/client',
  server: 'src/server',
  dist: 'dist',
});

module.exports = {
  entry: './src/client/index.jsx',
  plugins: [
    new CleanWebpackPlugin(['dist'], { root: paths.root() }),
    new HtmlWebpackPlugin({
      template: paths.client('index.html'),
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: paths.dist(),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true, importLoaders: 1 },
          },
          'postcss-loader',
        ],
      },
    ],
  },
};
