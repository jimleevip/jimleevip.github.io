

const path = require ('path');
const autoprefixer = require ('autoprefixer');

module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								autoprefixer
							]
						}
					},
				]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						query: {
							modules: true,
							mode: 'local',
							localIdentName: '[path][name]__[local]--[hash:base64:8]',
							context: path.resolve(__dirname, 'src'),
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								autoprefixer
							]
						}
					},
					{
						loader: 'less-loader',
						options: {
							javascriptEnabled: true,
						}
					}
				]
			},
			{
				test: /\.(js|jsx)$/,
				include: [path.resolve (__dirname, 'src')],
				exclude: [path.resolve (__dirname, 'node_modules')],
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [
							'es2015',
							'react',
							'stage-0'
						],
						cacheDirectory: true,
						compact: true,
						plugins: [
							'external-helpers',
							[
								"transform-runtime",
								{
									"polyfill": false,
									"regenerator": true,
									"moduleName": "babel-runtime"
								}
							],
						]
					}
				}]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
	},
};
