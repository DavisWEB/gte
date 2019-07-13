<template>
    <div class="vip">
        <div class="vip-one">
            <div class="left">
              <p class="one"></p>
              <p>BENBENBEN</p>
            </div>         
            <div class="right">
              <P>会员说明</P>
              <img src="@/assets/shuoming.png" class="vip-img"> 
            </div>           
        </div>

        <div class="vip-two">
            <img src="@/assets/black.png">
        </div>

        <div class="vip-t">
           <p></p><span>我的特权</span><p></p>
        </div>

        <ul class="vip-ul">
            <li>
                <p>九十份定制餐</p>
            </li>
            <li>
                <p>品牌旗下课程无线上</p>
            </li>
            <li>
                <p>赠送七节私教课程</p>
            </li>
            <li>
                <p>每月体测数据单</p>
            </li>
            <li>
                <p>免费送费</p>
            </li>
            <li>
                <p>选厨师</p>
            </li>
            <li>
                <p>自主选择送餐员</p>
            </li>
        </ul>

        <div class="vip-btn">
            <button>会员续费</button>
        </div>
    </div>
</template>

<script scoped>
export default {
    data(){
        return{

        }
    }
}
</script>

<style>
.vip{
    background: #fff;
}
.vip-one{
    background:#000;
    width: 100%;height: 50px;
    display: flex;
    justify-content:space-around;
    text-align: center;
    line-height: 50px;
}
.vip-one .left p.one{
    width: 20px;height: 20px;
    border-radius: 50%;
    background: #fff;
    text-align: center;
    margin-top: 15px;
    margin-right: 5px;
}
.vip-one .left{
    display: flex;
    margin-left: -10px;
}
.vip-one .right{
    display: flex;
    text-align: center;
    margin-right: -5px;

}
.vip-one .right .vip-img{
    width: 16px;
    height: 16px;
    margin-top: 17px;
    margin-left: 10px;
}
.vip-one .right p{
    color: #BA9966;
    font-size: 10px;
}
.vip-two{
    background: #000;
    height: 150px;
}
.vip-two img{
    margin:center;
    margin-left: 21px;
    margin-top: -12px;
}
.vip-t{
    display: flex;
    justify-content: center;
}
.vip-t p{
    width: 35px;
   border-top: 2px solid #BA9966;
   margin-top: 25px;
   margin-left: 8px;
   text-align: center;
}
.vip-t span{
    font-size: 16px;
    margin-top: 14px;
    font-weight: 400;
    font-family:PingFang SC;
    margin-left: 10px;
}
.vip-ul{
    list-style: none;
}
.vip-ul li{
    margin-top: 20px;
    text-indent: 10px;
}
.vip-ul li p{
    font-family:PingFang SC;
    color:#666;
    font-size: 14px;
}
.vip-btn button{
    width: 100%;
    height: 50px;
    color: #fff;
    background: #BA9966;
    margin-top: 20px;
    text-align: center;
    font-size: 16px;
}
</style>