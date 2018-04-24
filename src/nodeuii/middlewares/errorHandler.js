const errorHandler={
	error(app,logger){
		app.use(async(ctx,next)=>{
			await next();
			if(404!=ctx.status){
				return;
			}else{
				ctx.status=404;
				console.log(ctx.originalUrl)
				logger.error("错误:"+ctx.originalUrl+'请求页面错误！')
				ctx.body='<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>';
			}
		})
	}
};
export default errorHandler;