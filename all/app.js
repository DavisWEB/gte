const express=require('express');
const bodyParser=require('body-parser');
const proRouter=require('./router/routers.js');
const cors=require("cors")
const session = require("express-session");

var server=express();
server.listen(8080);
server.use(express.static('public'))//托管静态资源

server.use(cors({   //简单跨域
	origin:"*"  //http://127.0.0.1:5500
}))
//session 使用
 server.use(session({
   secret:"128位字符串",
   resave:true,
   saveUninitialized:true
 }))

server.use(bodyParser.urlencoded({  //所有中间件都放在服务器,不在路由器
	extended:false
}))
server.use('/pro',proRouter);//挂载的url:    /user 路由放最后

