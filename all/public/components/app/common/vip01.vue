<template>
    <div class="vip">
        <div class="vip-top">
            <div class="left">
              <p class="one"></p>
              <p>BENBENBEN</p>
            </div>         
            <div class="right">
              <P>纤善时尚会员说明</P>
              <img src="@/assets/shuoming.png" class="vip-img"> 
            </div>           
        </div>

        <div class="vip-center">
           <div class="vip-title">
               <p>会员特权</p>
           </div>

           <ul class="vip-img">
              <li>
                  <img src="@/assets/vip002.png">
                  <p>九十份定制餐</p>
              </li>
              <li>
                  <img src="@/assets/vip003.png">
                  <p>免费品牌课程</p>
              </li>
              <li>
                  <img src="@/assets/vip004.png">
                  <p>七节私教课</p>
              </li>
              <li>
                  <img src="@/assets/vip006.png">
                  <p>体测数据单</p>
              </li>
              <li>
                  <img src="@/assets/vip008.png">
                  <p>健身月卡</p>
              </li>
              <li>
                  <img src="@/assets/vip002.png">
                  <p>免配送费</p>
              </li>
              <li>
                  <img src="@/assets/vip007.png">
                  <p>自选厨师</p>
              </li>
              <li>
                  <img src="@/assets/vip001.png">
                  <p>自选送餐员</p>
              </li>
           </ul>

           <div class="vip-btn">
               <button>立即开通会员</button>
           </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.vip{
    background: #fff;
    height: 724px;
}
.vip-top{
    background:#000;
    width: 100%;height: 50px;
    display: flex;
    justify-content:space-around;
    text-align: center;
    line-height: 50px;
}
.vip-top .left p.one{
    width: 20px;height: 20px;
    border-radius: 50%;
    background: #fff;
    text-align: center;
    margin-top: 15px;
    margin-right: 5px;
}
.vip-top .left{
    display: flex;
}
.vip-top .right{
    display: flex;
    text-align: center;
    margin-right: -5px;

}
.vip-top .right .vip-img{
    width: 16px;
    height: 16px;
    margin-top: 17px;
    margin-left: 10px;
}
.vip-top .right p{
    color: #BA9966;
    font-size: 10px;
}
.vip-img img{
    width:56px;
    height: 56px;
}
.vip-img p{
    font-size: 12px;
    font-family:PingFang SC;
}
.vip-center .vip-img{
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 26px;
}
.vip-center .vip-img li{
  width: 82px;height: 92px;
  text-indent: -7px;
}
.vip-center .vip-title p{
    font-size: 18px;
    margin-top: 25px;
    text-align: center;
    font-family:PingFang SC;
    color: #BA9966;
    
}
.vip-btn button{
    width: 295px;height: 50px;
    color: #fff;
    border-radius: 35px;
    background: #BA9966;
    margin-left:40px;
    margin-top: 20px;
}
</style>