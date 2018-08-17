const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: path.join(__dirname, './src/Index.jsx'),
	output: {
		path: path.join(__dirname, 'www'),
		filename: 'js/index.js'
	},
	module: {
		rules: [
			{
				test: /\.js|jsx$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['react', 'env']
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract([
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]-[local]-[hash:base64:5]',
							importLoaders: 2,
							sourceMap: true,
							minimize: { autoprefixer: true }
						}
					},
					{
						loader: 'sass-loader',
						options: {
							outputStyle: 'compressed',
							sourceMap: true
						}
					}
				])
			}
		]
	},
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [new ExtractTextPlugin('css/index.css')]
}
