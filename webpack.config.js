const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  devtool: 'eval-cheap-module-source-map', 
    entry: {
        babelpolyfill: '@babel/polyfill',
        index: './src/js/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js',
    },
    devServer: {
        contentBase: './dist',
        writeToDisk: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.css',
          }),
        new CopyWebpackPlugin({
          patterns: [
            { from: './src/img', to: '../dist/img/' },
          ],
        }),
    ],
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.css$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                 {
                     loader: 'css-loader',
                     options: {sourceMap: true}
                 },
                 {
                    loader: 'postcss-loader',
                    options: {sourceMap: true, config: {path: 'src/js/postcss.config.js'}}
                 },
                ],
          },
          {
            test: /\.scss$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                 {
                     loader: 'css-loader',
                     options: {sourceMap: true}
                 },
                 {
                    loader: 'postcss-loader',
                    options: {sourceMap: true, config: {path: 'src/js/postcss.config.js'}}
                 },
                 {
                    loader: 'sass-loader',
                    options: {sourceMap: true}
                 }
                 

                ],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
          {
            test: /\.js$/,
            enforce: 'pre',
            use: ['source-map-loader'],
          },
        ]
      }
      
}