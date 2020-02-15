

const webpack = require ('webpack');
const path = require ('path');
const CleanWebpackPlugin = require ('clean-webpack-plugin');
const config = require ('./webpack.base');

module.exports = {
	...config,
	mode: 'production',
	entry: path.resolve (__dirname, './src/index.js'),
	output: {
		filename: 'index.js',
		path: path.resolve (__dirname, 'dist'),
	},
	devtool: 'none',
	plugins: [
		new webpack.ProvidePlugin({
			"React": "react",
			"ReactDOM": "react-dom",
		}),
	],
};
