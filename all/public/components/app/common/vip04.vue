<template>
    <div class="vip">
        <!-- 顶部价格和切换按钮 -->
       <vip04
       price="￥2700.00"
       leftvip="白金会员"
       rightvip="黑金会员"
       :change(0)="selectleft"
       :change(1)="selectright"
       ></vip04>

       <mt-tab-container v-model="active">
           <mt-tab-container-item id="left">
             <!-- 白金会员底部选择信息 -->
               <vip04_01
               lefttitle="白金会员特权"
               righttitle="会员说明"
               p1="九十份定制餐"
               p2="任选七节课程"
               p3="每月体测数据单"
               p4="免配送费"
               p5="选择厨师"
               p6="自主选择送餐员"
               ></vip04_01>
           </mt-tab-container-item>

           <mt-tab-container-item id="right">
             <!-- 黑金会员底部选择信息 -->
               <vip04_01
               lefttitle="黑金会员特权"
               righttitle="会员说明"
               p1="九十份定制餐"
               p2="任选七节课程"
               p3="每月体测数据单"
               p4="免配送费"
               p5="选择厨师"
               p6="自主选择送餐员"
               ></vip04_01>
           </mt-tab-container-item>
       </mt-tab-container>

       <!-- 底部支付按钮 -->
       <div class="btn">
           <button>立即支付</button>
       </div>
    </div>
</template>

<script>
// 引入子组件
import Vip_04 from "./vip_04"
import Vip_04_01 from "./vip_04_01"
export default {
    data(){
        return{
        active:"left"
        }
    },
    methods: {
        selectleft(){
         console.log(123);
        },
        selectright(){
         console.log(234);
        }
    },
    //注册子组件
    components:{
        "vip04":Vip_04,
        "vip04_01":Vip_04_01
    }
}
</script>

<style scoped>
.vip{
    background: #fff;
}
.btn button{
    width: 295px;height: 50px;
    font-size: 14px;
    color: #fff;
    border-radius: 35px;
    background: rgb(10, 160, 115);
    margin-left:40px;
    margin-top: 35px;
}
</style>