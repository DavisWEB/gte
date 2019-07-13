<template>
    <div>
        <img :src="focused?selected:noselected" class="imgstyle">
    </div>
</template>

<script>
export default {
    props:{
        focused:false,
        selected:{default:""},
        noselected:{default:""}
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.imgstyle{
    width:32px;height: 32px;
}
</style>