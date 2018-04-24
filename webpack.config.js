const argv = require('yargs-parser')(process.argv.slice(2));
const merge = require('webpack-merge');
//提取css
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//自己编写插件
const htmlAfterWebpackPlugin = require("./config/htmlAfterWebpackPlugin");
//通过打包环境配置获取相应的config配置
const _mergeConfig=require(`./config/webpack.${argv.mode}.js`);
const glob=require('glob');
//同步获取需要的js
const files=glob.sync('./src/webapp/views/**/*.entry.js');
// html  copy
const fileshtml=glob.sync('./src/webapp/widgets/**/*.html');
//html page
const pagehtml=glob.sync('./src/webapp/views/**/*.html');
const {join, basename}=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//copy html
const CopyWebpackPlugin = require('copy-webpack-plugin');

// console.log(files)
 let _entry={};
var _entryhyml=[];
 //循环处理得到需要的文件格式
 for(let item of files){
 	item.replace(/.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.js$)/g, (mactch, $1) => { _entry[$1] = item });
 }

var _pagehyml = pagehtml.map((page) => {
		return new HtmlWebpackPlugin({
      			filename: page.replace('./src/webapp','..'),
      			template: page,
      			inject:false,
    		});
	});

//模板copy
 for(let item of fileshtml){
      var obj={
         from: item,
         to: item.replace('./src/webapp','..'),
      }
      _entryhyml.push(obj)
  }

// console.log(_entry)
let webpackConfig={
	entry:_entry,
	module:{
		rules: [{
			           test: /\.css$/,
			            exclude: /node_modules/,
			            use: ExtractTextPlugin.extract({
				            fallback: "style-loader",
				            use: [{
				           		loader: 'postcss-loader',
				            }]
		         		})
			}]
	},
	output:{
		path:join(__dirname,'./dist/assets'),
		publicPath:'/',
	},
	plugins:[
		new CopyWebpackPlugin(_entryhyml),
		..._pagehyml,
		new htmlAfterWebpackPlugin()

	]
};

module.exports=merge(_mergeConfig,webpackConfig);