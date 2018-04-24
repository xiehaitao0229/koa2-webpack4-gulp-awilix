const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports={
	output:{
		filename:'scripts/[name]-bundle.js'
	},
	plugins: [
		new ExtractTextPlugin('styles/[name].css',{allchunks:true})
	]
}