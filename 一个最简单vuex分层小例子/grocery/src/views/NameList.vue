<template>
    <div class="namelist">
        <div class="nametable">
            <div class="box">
                <a-table
                    ref="antTable"
                    :columns='columns'
                    :data-source='list'
                    :row-key="it => it.name"
                    :pagination='pagination'
                />
            </div>
        </div>

        <a-row class="buttons">
            <a-button type="primary" class="cyan" @click='sortByNumber'> 按序号排列 </a-button>
            <a-button type="primary" @click='sortByPinyin'> 按姓名拼音排列 </a-button>
            <a-button type="primary" class="green" @click='downloadTableToExcel'> 下载表格为 Excel </a-button>
        </a-row>
    </div>
</template>



<script>
import { mapState } from 'vuex';
import pinyin from 'pinyin';
/*
    要使用 XLSX 生成 Excel 文件，
    ant-design 的 a-table 插件，不能使用 a-table 自带的 :scroll 属性
    一旦使用 ：scroll 将造成无法解析 table 数据的问题
*/ 
import XLSX from 'xlsx';

export default {
    name:'NameList',
    data(){
        return {
            list:[],
            pagination:{
                hideOnSinglePage:true
            },

        }
    },
    computed:{
        ...mapState({
            NationalLeaders: state=> state.NameList.NationalLeaders,
            columns: state=> state.NameList.columns,
        })
    },

    created(){
        this.list = this.NationalLeaders.map( (it,i)=>{return {...it, sortNumber:i+1}});
    },
        


    methods:{
        add(){
            console.log( ' this.$store -->> ', this.$store );
            this.$store.dispatch('NameList/addName',111);
        },

        sortByPinyin(){
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
        },
        
        sortByNumber(){
            this.list.sort( (a,b)=> a.sortNumber - b.sortNumber );
        },


        // 将表格下载为 Excel
        downloadTableToExcel(){
            console.log( ' this.$refs.antTable -->> ', this.$refs.antTable.$el );
            const htmlstr = this.$refs.antTable.$el.outerHTML;
            const workbook = XLSX.read(htmlstr, {type:'string'});

            console.log( ' ### workbook -->> ', workbook );
            XLSX.writeFile(workbook, 'nameList.xlsb');
        }
    }
}
</script>


<style lang='less'>
.namelist{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;

    & .buttons{
        & button{
            margin-left: 9px;
        }
        & .green{
            background-color:#81c824;
            border-color:#81c824;
        }
        & .cyan{
            background-color:#52dfcf;
            border-color:#52dfcf;
        }
    }
}
.nametable{
    position: relative;
    display: block;
    max-width: 600px;
    max-height: 560px;
    margin: 0px auto 20px auto;
    border: 1px solid gray;
    box-sizing: border-box;
    overflow: hidden;
    & .box{
        
        width: calc(100% + 12px);
        max-height: 550px;
        margin: -12px 0px 0px 0px; padding: 12px 0px 66px 0px;
        overflow: hidden;
        overflow-y: scroll;
    }
    & .ant-table-wrapper,
    & .ant-spin-nested-loading,
    & .ant-spin-container{
        position: unset;
    }
    & .ant-table-wrapper>.ant-spin-nested-loading>.ant-spin-container>.ant-pagination.ant-table-pagination{
        position:absolute;
        bottom: 0px; left: 0px;
        z-index: 1;
        width: 100%;
        margin: 0px; padding: 17px 0px;
        background: white none;
        border-top: 1px solid rgba(0, 0, 0, 0.05);
    }
}
</style>