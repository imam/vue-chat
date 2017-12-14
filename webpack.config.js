const webpack = require('webpack')
const path = require('path')

const config = {
	watch:true,
	watchOptions: {
		ignored: [
			/node_modules/,
			/dist/
		]
	},
	entry: {
		script: './src/script.js'
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/dist'
	},
	module: {
		loaders: [
			{
				test: /\.vue?/,
				include: path.resolve(__dirname, 'src'),
				loader: 'vue-loader'
			},
			{
				test: /\.js?/,
				include: path.resolve(__dirname, 'src'),
				loader: 'babel-loader'
			},
			{
				test: /\.css?/,
				include: path.resolve(__dirname, 'src'),
				loader: "css-loader"
			},
			{
				test: /\.scss?/,
				include: path.resolve(__dirname, 'src'),
				loader: 'sass-loader'
			},
			{ 
				test: /jquery-mousewheel/, 
				loader: "imports-loader?define=>false&this=>window" 
			},
			{ 
				test: /malihu-custom-scrollbar-plugin/, 
				loader: "imports-loader?define=>false&this=>window" 
			},
					]
	}
}

module.exports = config