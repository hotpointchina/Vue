<template>
    <div class="namelist">
        
        <a-row>
            <!-- <a-button type="primary" @click='add'> addName </a-button> -->
            <a-button type="primary" @click='sort'> sort </a-button>
        </a-row>
        
        <a-divider> nameList </a-divider>

        <!-- <a-row v-for="name in list" :key="name.name">
            {{name.name}}
        </a-row> -->

        <a-table
            :columns='columns'
            :data-source='list'
            :row-key="it => it.name"
            :pagination='pagination'
        />
    </div>
</template>




<script>
import { mapState } from 'vuex';
import pinyin from 'pinyin';


export default {
    name:'NameList',
    data(){
        return {
            list:[],
            pagination:{
                hideOnSinglePage:true
            }
        }
    },
    computed:{
        ...mapState({
            NationalLeaders: state=> state.NameList.NationalLeaders,
            columns: state=> state.NameList.columns,
        })
    },

    created(){
        this.list = this.NationalLeaders.map( (it,i)=>{return {...it, sortNumber:i}});
    },

    methods:{
        add(){
            console.log( ' this.$store -->> ', this.$store );
            this.$store.dispatch('NameList/addName',111);
        },

        sort(){
            const familyNameList = this.list.map( it=> it.name.charAt(0) );
            console.log( ' familyNameList -->> ', familyNameList );


            const pinyinData = familyNameList.map(han => ({
                han: han,
                pinyin: pinyin(han)[0][0], // 可以自行选择不同的生成拼音方案和风格。
            }));
            const sortedData = pinyinData.sort((a, b) => {
                return a.pinyin.localeCompare(b.pinyin);
            }).map( (d,i) => { return { w:d.han, pnumber:i } });
            console.log( ' sortedData -->> ', sortedData );
            const pList = sortedData.map( it=>{
                let k = {};
                for(let i=0; i<this.list.length; i++){
                    if( this.list[i].name.charAt(0) === it.w ){
                        k = this.list[i];
                        break ;
                    }
                }
                k.pnumber = it.pnumber;
                return {...k};
            });
            
            console.log( ' pList -->> ', pList );
            this.list = [...pList];
        }
    }
}
</script>


<style lang='less' scoped>
.namelist{
    width: 900px;
    padding: 20px;
    background: rgba(0, 0, 0, 0.03) none;
}
</style>