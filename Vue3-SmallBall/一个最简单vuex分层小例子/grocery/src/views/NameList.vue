<template>
    <div class="namelist">
        nameList
        <a-button type="primary" @click='add'> addName </a-button>
    </div>
</template>




<script>

export default {
    name:'NameList',
    // data(){},
    methods:{
        add(){
            console.log( ' this.$store -->> ', this.$store );
            this.$store.dispatch('NameList/addName',111);
        }
    }
}
</script>


<style lang='less' scoped>
.namelist{
    width: 900px;
    padding: 20px;
    background: #eee none;
}
</style>