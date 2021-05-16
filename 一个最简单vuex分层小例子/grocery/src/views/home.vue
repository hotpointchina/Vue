<template>
    <div class="world">
        <NameListPage />
    </div>
</template>


<script>
import NameListPage from './NameList';

export default {
    name:'homepage',
      components:{
        NameListPage,
    },
    
}
</script>


<style lang='less' scoped>
.world{
    padding: 20px;
}
</style>