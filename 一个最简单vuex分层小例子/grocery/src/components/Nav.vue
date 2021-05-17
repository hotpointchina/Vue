<template>
    <a-menu mode="horizontal">
        <a-menu-item key="home" @click='pushNav'> <a-icon type="home" /> 首页 </a-menu-item>
        <a-menu-item key="findyou" @click='pushNav'> <a-icon type="idcard" /> 名单筛选 </a-menu-item>
    </a-menu>
</template>

<script>
export default {
    name:'navComponent',

    methods:{
        pushNav( {key} ){
            console.log( ' key -->> ', key );
            if( window.location.pathname.slice(1) === key ){
                return ;
            }
            this.$router.push( key );
        }
    }
}
</script>

<style>

</style>