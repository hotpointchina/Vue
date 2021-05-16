<template>
    <a-row>
        <a-col>
            <p ref="areaDataInfo"></p>
        </a-col>

        <a-col>
            <a-textarea 
                placeholder="Basic usage" :rows="4" 
                @pressEnter='sendArea' 
                @change='sendArea' 
            />
        </a-col>

        <a-button @click="submitArea">提交 Area </a-button>
    </a-row>
</template>

<script>
export default {
    name:'inputAndSubmit',
    data(){
        return {
            areaData:''
        }
    },
    methods:{
        
        sendArea( e, ...arg ){
            console.log( ' sendArea e -->> ', e );
            console.log( ' sendArea e.target.value -->> ', e.target.value );
            console.log( ' sendArea JSON -->> ', JSON.stringify( e.target.value ) );
            console.log( ' sendArea arg -->> ', arg );
            // this.areaData = JSON.stringify( e.target.value );
            this.areaData = e.target.value.toString();
        },

        submitArea(){
            let str = this.areaData.replace(/(\r\n)|(\n)/g,'<br>');
            console.log( ' @@@ str -->> ', str );

            
            this.$refs.areaDataInfo.innerHTML = str;
        }
    }
}
</script>

<style>

</style>