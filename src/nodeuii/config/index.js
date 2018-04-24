import _ from "lodash";
import path from "path";

if(false){
	console.log('error')
};
let config={
	env:process.env.NODE_ENV,
	viewdir: path.join(__dirname, '..','views'),
	staticDir: path.join(__dirname, '..','assets'),
	port:3000
};
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV=='development'){
	let configer={
		port:3000,
	}
	config=_.extend(config,configer);


}
if(process.env.NODE_ENV=='production'){
	let configer={
		port:3000,
	}
	config=_.extend(config,configer);
}


export default config;