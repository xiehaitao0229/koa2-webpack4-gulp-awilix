// HelloController
import { route, GET, POST, before } from 'awilix-koa';

@route('/hello')
export default class helloAPI {
	constructor({ testService }) {
		this.testService = testService
	}
	
	@GET()
	async getUser(ctx) {
	    	const result=this.testService.find();
	    	ctx.body= await ctx.render('hello/pages/index',{data:result})
	}
}