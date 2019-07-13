<template>
    <div class="vip">
      <!-- 选择说明的子组件 -->
        <ul class="vip-ul">
            <li class="vip-ul-li">
                <p class="left">{{lefttitle}}</p>
                <p class="right">{{righttitle}}</p>
            </li>
            <li>
                <p>{{p1}}</p>
            </li>
            <li>
                <p>{{p2}}</p>
            </li>
            <li>
                <p>{{p3}}</p>
            </li>
            <li>
                <p>{{p4}}</p>
            </li>
            <li>
                <p>{{p5}}</p>
            </li>
            <li>
                <p>{{p6}}</p>
            </li>
        </ul>
        
    </div>
</template>

<script>
export default {
    props:{
      righttitle:{default:""},
      lefttitle:{default:""},
      p1:{default:""},
      p2:{default:""},
      p3:{default:""},
      p4:{default:""},
      p5:{default:""},
      p6:{default:""}
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.vip-ul{
    list-style: none;
    /* margin-top: -20px; */
}
.vip-ul li{
    margin-top: 20px;
    text-indent: 20px;
}
.vip-ul .vip-ul-li{
    display: flex;
    justify-content: space-between;
}
.vip-ul li p{
    font-family:PingFang SC;
    color:#666;
    font-size: 14px;
}
.vip-ul li p.left{
    color:#666;
    font-size: 16px;
    margin-left: -16px;
    margin-top: 15px;

}
.vip-ul li p.right{
    color: rgb(10, 160, 115);
    font-size: 12px;
    margin-right: 40px;
    margin-top: 15px;
}
</style>