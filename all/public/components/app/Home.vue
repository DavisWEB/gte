<template>
    <div>
        <!-- 面板 -->
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="index">首页
        </mt-tab-container-item>

        <mt-tab-container-item id="yy">点餐
        </mt-tab-container-item>

        <mt-tab-container-item id="vip">
          <vip01></vip01>
        </mt-tab-container-item>

        <mt-tab-container-item id="order">订单
        </mt-tab-container-item>

        <mt-tab-container-item id="me">我的
        </mt-tab-container-item>
      </mt-tab-container>
      
        <!-- 底部导航栏 -->
        <mt-tabbar v-model="active" fixed>
            <mt-tab-item id="index" @click.native="change(0)">
              <tabbar
              :focused="index[0].isselect"
              :selected="require('../../assets/index02.png')"
              :noselected="require('../../assets/index01.png')"
              ></tabbar>
              首页
            </mt-tab-item>

            <mt-tab-item id="yy" @click.native="change(1)">
              <tabbar
              :focused="index[1].isselect"
              :selected="require('../../assets/yy02.png')"
              :noselected="require('../../assets/yy01.png')"
              ></tabbar>
              点餐
            </mt-tab-item>

            <mt-tab-item id="vip" @click.native="change(2)">
              <tabbar
              :focused="index[2].isselect"
              :selected="require('../../assets/vip01.png')"
              :noselected="require('../../assets/vip.png')"
              ></tabbar>
              会员
            </mt-tab-item>

            <mt-tab-item id="order" @click.native="change(3)">
              <tabbar
              :focused="index[3].isselect"
              :selected="require('../../assets/order.png')"
              :noselected="require('../../assets/order.png')"
              ></tabbar>
              订单
            </mt-tab-item>

            <mt-tab-item id="me" @click.native="change(4)">
              <tabbar
              :focused="index[4].isselect"
              :selected="require('../../assets/me01.png')"
              :noselected="require('../../assets/me02.png')"
              ></tabbar>
              我的
            </mt-tab-item>
        </mt-tabbar>

    </div>
</template>

<script>
//引入tabbar子组件
import Tabbar from "./common/tabbar.vue"
import Vip01 from "./common/vip01.vue"
export default {
    data(){
        return{
        active:"index",
        index:[
            {isselect:true},
            {isselect:false},
            {isselect:false},
            {isselect:false},
            {isselect:false}
        ]
        }
    },
    methods: {
        change(n){
            for(var i=0;i<this.index.length;i++){
            if(n==i){
               this.index[i].isselect=true;
             }else{
               this.index[i].isselect=false;
             }
         }
        }
    },
    components:{
    "tabbar":Tabbar,
    "vip01":Vip01
    }
}
</script>

<style scoped>
.mint-tabbar>.mint-tab-item-label{
  color:red;
}
.mint-tabbar>.mint-tab-item.is-selected{
  background-color:transparent;
  color:#0d733bbf;
}
</style>