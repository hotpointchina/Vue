<template>
    <div class="world">
        <div class="sky">
            <Nav />
        </div>

        <div class="land">
            <NameListPage />
        </div>
    </div>
</template>


<script>
import Nav from '../components/Nav';
import NameListPage from './NameList';

export default {
    name:'homepage',
      components:{
        //导航
        Nav,
        // 名单排序-中文英文名混排，排序
        NameListPage,
    },
    
}
</script>


<style lang='less' scoped>
.world{
    position: relative;
    padding: 20px;
}
.syk{
    position: fixed;
    top: 0px; left: 0px;
    z-index: 3;
    width: 100%;
}
.land{
    position: relative;
    width: 100%;
}
</style>