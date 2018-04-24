## NODE+KOA2+GULP+awilix
server 应用到 node+koa2 ，gulp做后台打包处理

## SWIG+WEBPACK4
服务器用swig 模版引擎， webpack4做前台打包处理

###### 开发中用到的相应的插件
> * koa ：Koa -- 基于 Node.js 平台的下一代 web 开发框架
> * koa-simple-router：路由
> * koa-swig：基于Swig的Koa视图渲染，支持标签，过滤器和扩展
> * koa-static：Koa静态文件指定中间件Koa-static
> * co：基于生成器的nod​​ejs和浏览器的控制流程良好性，使用promises，可以让您以非常好的方式编写非阻塞代码。	
> * log4js：日志管理
> * awilix：非常强大的依赖注入（DI）容器，用TypeScript编写。再次让IoC变得更好！
> * awilix-koa：Awilix助手，路由器和范围实例化Koa的中间件
>* cross-env: 设置环境变量
>* jsdoc :生成API 接口文档

###### 后台gulp 打包下载的依赖
> * gulp-rollup：主要在打包做 tree-shaking；
> * rollup-plugin-replace：打包时替换文件中的字符串

###### webpack  打包下载的依赖
> * babel-plugin-transform-decorators-legacy:修饰器（Decorator）是一个函数，用来修改类的行为。这是ES7的一个提案，目前Babel转码器已经支持
> * yargs-parser: 解析参数 插件
> * webpack-merge:合并对象
> * glop：匹配全局指定的文件 可以支持正则
> * postcss：css后处理器
>* extract-text-webpack-plugin 分离css webpack4 需下载 extract-text-webpack-plugin@next
>* copy-webpack-plugin:拷贝资源插件

######让项目跑起来吧!!!
> * npm run start  启动项目  访问http://localhost:3000/hello
> * npm run builddev  打包前端开发阶段资源
> * npm run buildprod 打包前端上线阶段资源
> * npm run nodedev 打包node开发阶段资源
> * npm run nodeprod 打包node上线阶段资源
> * npm run service 进行单元测试
> * npm run doc 进行生成注释文档