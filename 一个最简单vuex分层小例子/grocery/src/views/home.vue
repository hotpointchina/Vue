<template>
    <div class="world">
        <div class="land">
            <NameListPage />
        </div>
    </div>
</template>


<script>

import NameListPage from './NameList';

export default {
    name:'homepage',
    components:{
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
.land{
    position: relative;
    width: 100%;
}
</style>