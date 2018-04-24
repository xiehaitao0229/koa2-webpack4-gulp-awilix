const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports={
	output:{
		filename:'scripts/[name]-[hash:5].bundle.js'
	},
	plugins: [
		new ExtractTextPlugin('styles/[name].css',{allchunks:true})
	]
}