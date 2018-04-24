const Mocha=require('mocha');
const mocha=new Mocha({
	reporter: 'mochawesome',
	reporterOptions: {
	     	reportFilename: 'serverTest',
	     	reportDir:'./docs/service'
	}
})
mocha.addFile('./tests/service/router.spec.js');
mocha.run(function(){
	console.log('all done');
	process.exit();
})