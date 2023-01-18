const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: [
    './src/index.tsx'
  ],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.ts(x)?$/,
        exclude: /node_modules|\.d\.ts$/,
        use: {
            loader: 'ts-loader',
            options: {
                compilerOptions:{
                    noEmit: false,
                }
            }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // {
      //   test: /\.json$/,
      //   loader: 'json-loader'
      // }
      // {
      //   test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
      //   use: 'file-loader'
      // },
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.tsx',
      '.ts'
    ],
  },
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    hot: true,
    historyApiFallback: true,
    contentBase: './dist',
    watchContentBase: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: ({
        htmlWebpackPlugin
      }) => '<!DOCTYPE html><html><head><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>' + htmlWebpackPlugin.options.title + '</title></head><body><div id=\"app\"></div></body></html>',
      filename: 'index.html',
    //   favicon: "./src/assets/images/logo/LOGO_.png",
    }),
  ],
};

module.exports = config;