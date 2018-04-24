import { route, GET, POST, before } from 'awilix-koa';
@route('/users')
export default  class UserController{
	constructor({userService}){
		this.userService=userService;
	}
	@route('/:id')
	@GET()
	async getUser(ctx,next){
		const result= await this.userService.getDate(ctx.params.id);
    		ctx.body= await ctx.render('users/pages/index',{data:result})
	}
}
