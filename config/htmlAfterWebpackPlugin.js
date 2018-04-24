const pluginName = 'htmlAfterWebpackPlugin';
const assetsHelp=(data)=>{
 	let css='',js='';
 	const dir={
 		js:item=>`<script src="${item}"></script>`,
 		css:item=>`<link rel="stylesheet" href="${item}" />`
 	};
 	for(let jsitem of data.js){
 		// js.push(dir.js(jsitem))
                            js+=dir.js(jsitem);
 	}
 	for(let cssitem of data.css){
 		css+=dir.css(cssitem);
 	}
 	return {
 		js,
 		css
 	}
}

class htmlAfterWebpackPlugin {
    apply(compiler) {
        compiler.hooks.compilation.tap(pluginName, compilation => {
                        console.log("The webpack build process is starting!!!");
                        compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(pluginName,htmlPluginData=>{
                                    let _html = htmlPluginData.html;
                                    const result = assetsHelp(htmlPluginData.assets);
                                    console.log(result)
                                    _html = _html.replace("<!--injectcss-->",result.css);
                                    _html = _html.replace("<!--injectjs-->",result.js);
                                    // console.log('得到的值',_html);
                                    htmlPluginData.html = _html;
                        })
        });
    }
}
module.exports=htmlAfterWebpackPlugin

