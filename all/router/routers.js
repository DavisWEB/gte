const express=require('express');
const pool=require('../pool.js')
var router=express.Router();
//用户注册
router.get("/reg",(req,res)=>{
	var obj=req.query;
	var sql="SELECT uid FORM user WHERE uphone=?";
	pool.query(sql,[obj.uphone],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send({code:-200,msg:"user existed"})
		}else{
			sql="INSERT INTO user SET uphone=?,upwd=?";
			pool.query(sql,[obj.uphone,obj.upwd],(err,result)=>{
				if(err) throw err;
				if(result.affectedRows>0){
					res.send({code:200,msg:"success"})
				}else{
					res.send({code:-200,mag:"fail"})
				}
			})
		}
	})
})
//用户登录
router.get("/login",(req,res)=>{
	var obj=req.query;
	var sql="SELECT uid,vip form user WHERE uphone=? AND upwd=?";
	pool.query(sql,[obj.uphone,obj.upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			req.session.uid=result[0];
			req.session.vip=result[1];
			res.send({code:200,msg:"success"})
		}else{
			res.send({code:-200,msg:"fail"})
		}
	})
})



//用户信息修改
router.get("/user",(req,res)=>{
	//获取get请求的数据
	var uid=req.session.uid
	if(!uid){
		res.send({code:-200,msg:"please login"});
		return};
	var obj=req.query;
	//如果数据包含身高,则修改身高
	if(obj.height){
		var sql="UPDATE user set height=? WHERE uid=?";
		pool.query(sql,[obj.height,uid],(err,result)=>{
			if(err) throw err;
			if(result.affectedRows>0){
				res.send({code:200,msg:'success'})}else
				{res.send({code:-200,msg:'false'})}
			}
		)
		return
	};

	//如果数据包含体重,则修改体重
	if(obj.weight){
		var sql="UPDATE user set weight=? WHERE uid=?";
		pool.query(sql,[obj.weight,uid],(err,result)=>{
			if(err) throw err;
			if(result.affectedRows>0){
				res.send({code:200,msg:'success'})}else
				{res.send({code:-200,msg:'false'})}
			}
		)
		return
	};
	//如果数据包含金钱,则修改金钱
	if(obj.cash){
		var sql="SELECT cash,points FORM user WHERE uid=?";
		pool.query(sql,[uid],(err,result)=>{
			if(err) throw err;
			if(result.length>0){
				var oldcash=result[0];
				var points=result[1];
				var newcash=oldcash+obj.cash;
				var newpoints=points+obj.cash;
				sql="UPdate user SET cash=?,points=? WHERE uid=?"
				pool.query(sql,[newcash,newpoints,uid],(err,result2)=>{
					if(err) throw err;
					if(result2.affectedRows>0){
						res.send({code:200,msg:[newcash,newpoints,points]})}else
						{res.send({code:-200,msg:'false'})}
				})
			}else{
				res.send({code:-200,msg:'false'})
			}
		})
		return;
	};
})
	//成为会员
router.get("/bvip",(req,res)=>{
	var uid=req.session.uid;
	var vip=req.session.vip;
	var bvw=req.query.bvw;
	if(!req.session.uid) return;
	if(vip==2){
		res.send({code:-200,msg:"you are vip2 now"});
		return;
	}
	var sql="SELECT cash form user WHERE uid=?"
	pool.query(sql,[uid],(err,result)=>{
		if(err) throw err
		if(result.length>0){
			var oldcash=result[0];
			var newcash=oldcash-(bvw-vip)*100.0;
			if(newcash>=0){
				//如果钱包的钱足够扣款(100元*想要成几级会员),就开始修改vip等级并扣款
				sql="UPDATE user SET cash=?,vip=? WHERE uid=?"
				pool.query(sql,[newcash,bvw,uid],(err,result)=>{
					if(err) throw err;
					if(result.affectedRows>0){
						res.send({code:200,msg:"you are vip1 now!"})
					}else{
						res.send({code:-200,msg:"fail"})
					}
				})
			}else{
				res.send({code:-200,msg:"you don't have enough cash"})
			}
		}else{
			res.send({code:-200,msg:"fail to search"})
		}
	})


	

})

module.exports=router;