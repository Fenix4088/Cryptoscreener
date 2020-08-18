const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
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
          }
        ]
      }
      
}