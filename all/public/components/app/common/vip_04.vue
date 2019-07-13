<template>
    <div class="vip">
        <!-- 顶部价格和切换按钮子组件 -->
        <div class="price">
            <p>{{price}}</p>
        </div>

        <div class="vip-btn">
          <p class="left" @click="change(n)">{{leftvip}}</p>
          <p class="right" @click="change(n)">{{rightvip}}</p>
        </div> 
    </div>
</template>

<script>
export default {
    props:{
      price:{default:""},
      leftvip:{default:""},
      rightvip:{default:""},
      change:{type:Function}
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.vip .price p{
    color: rgb(10, 160, 115);
    font-size: 20px;
    text-align: center;
}
.vip-btn{
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
.vip-btn p{
    width: 120px;height: 35px;
    border: 1px solid rgb(10, 160, 115);
    text-align: center;
    line-height: 35px;
    margin-right: -15px;
}
.vip-btn p.left{
   color: #fff;
   background: rgb(10, 160, 115);
   font-size: 14px;
   border-radius: 18px;
}
.vip-btn p.right{
    color:rgb(10, 160, 115);
    border-left: 0;
    font-size: 14px;
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
}
</style>