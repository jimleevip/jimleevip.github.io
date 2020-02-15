
const webpack = require ('webpack');
const path = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const config = require ('./webpack.base');

module.exports = {
	...config,
	mode: 'development',
	entry: path.resolve (__dirname, './src/index.js'),
	output: {
		filename: 'dist/index.js',
	},
	devtool: 'cheap-module-eval-source-map',
	externals: [],
	plugins: [
		new webpack.ProvidePlugin({
			"React": "react",
			"ReactDOM": "react-dom",
		}),
		new HtmlWebpackPlugin ({
			title: '首页Demo',
			filename: './index.html',
			template: './src/index.html',
			inject: 'false',
			// favicon: './src/icon.png',
			hash: false,
			hashDigestLength: 3,
		})
	],
	devServer: {
		contentBase: path.join (__dirname, 'build'), //网站的根目录为 根目录/dist
		historyApiFallback: true, //不跳转
		index: 'index.html',
		inline: true,
		open: true,
		compress: true,
		host: '127.0.0.1',
		port: 8011,
	}
};
