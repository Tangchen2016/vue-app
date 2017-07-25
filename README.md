# vue-app
## client -- vue 客户端

- 技术栈： vue + vue-router + webpack + es6/7 + axios + vuex + element-ui

## server

- 技术栈: nodejs + express + es6 + mongodb + mongoose

## 项目结构:

```
|-- client                // 客户端
|   |-- build             // webpack配置文件
|   |-- config            // 项目打包路径
|   |-- dist              // 上线项目文件，放在服务器即可正常访问
|   |-- src               // 项目源码
|   |   |-- components    // 公共组件
|   |   |-- page          // 页面
|   |   |-- router        // 路由
|   |   |-- service       // 请求
|   |   |-- store         // vuex 数据仓库
|   |   |-- App.vue       // 页面入口文件
|   |   |-- main.js       // 程序入口文件，加载各个公共组件
|   |-- .babelrc          // ES6语法编译配置
|   |-- .editorconfig     // 代码编写规格
|   |-- .gitignore        // 忽略的文件
|   |-- favicon.ico       // 页面左上角小图标
|   |-- index.html        // 入口html文件
|   |-- package.json      // 项目及工具的依赖配置文件
|   |-- README.md         // 说明
| 
|-- server                // 服务端
|   |-- bin               
|   |   |-- www.js        // 服务器配置文件
|   |-- db                // 操作数据库
|   |   |-- connection.js // 数据库连接
|   |   |-- dao_user.js   // 对用户进行操作的数据接口
|   |   |-- gb.js         // 数据库增删改查总入口
|   |-- public            // 静态资源
|   |-- routes            // 后端路由   
|   |   |-- config.js     // 路由总入口
|   |   |-- user.js       // 用户登录注册的路由
|   |-- views             // ejs 模板文件
|   |-- app.js            // express配置文件
|   |-- package.json      // 依赖的模块
```

## 项目启动

- 服务端：`cd server && npm start`
- 客户端：`cd client && npm start`，访问　`http://localhost:8080`

