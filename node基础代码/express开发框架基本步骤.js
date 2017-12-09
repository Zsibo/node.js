/**
 * 在命令行中操作
 * 1.可以手动创建一个文件夹 或者用命令行操作创建一个文件夹(myapp) $mkdir myapp  进入该文件 $cd myapp
 * 2.npm初始化 $npm init
 * 3.entry point:(index.js) 此命令可以输入几个参数更改package.json中的默认值
 * 4.$npm install express 在当前文件下 下载express
 */

//查询express.js文档
// const express = require('express');
// const app = express();

// app.get('/', (req, res)=> res.send('Hello World!'));

// var server = app.listen(3000,()=> console.log('Example app listening on port 3000!'));
//0 加载express
const express = require('express');
//1 调用express()得到一个app
const app = express();
//在express中开放公共静态资源
//该代码表示所有以/node_modules/开头的请求都会去./node_modules/目录中查找对应资源//如果./node_modules/里面没有想要的资源 则返回404 can not get XXX  
//需要访问那个文件夹 就将那个文件夹设置开放
app.use('/node_modules/',express.static('./node_modules/'))
//2 设置请求对应的处理函数
//当客户端以GET方法请求/的时候 就会调用第二个参数 请求处理函数
app.get('/', (req, res) => {
    res.send('hello world')
})
app.get('/login', (req, res) => {
    res.send('login page')
})
// 监听端口号 启动web服务
app.listen(3000, () => console.log('app listening on port 3000!'));