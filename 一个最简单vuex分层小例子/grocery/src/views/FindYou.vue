/*
    练习 ant-design-vue 的 a-auto-complete
    利用 ant-design-vue 中的 a-auto-complete 实现
    从名单表中模糊查询出 名单中的 人员
    input 失去焦点时校验 input 中的内容
    如果其中内容在数据源中没有，则清空 input 
*/ 
<template>
    <div class="ship">
        <article>
            练习 ant-design-vue 的 a-auto-complete
            利用 ant-design-vue 中的 a-auto-complete 实现
            从名单表中模糊查询出 名单中的 人员
            input 失去焦点时校验 input 中的内容
            如果其中内容在数据源中没有，则清空 input 
        </article>

        <a-form :form='form'>
            <a-form-item label="各国政要名单" :colon=false>
                <a-auto-complete
                    allowClear
                    :filter-option="filterOption"
                    placeholder="请选择"
                    v-decorator="['choosedName',{rules: [{ required: true,  message: '请选出您的名字'  }]}]"
                    @select='selectName'
                    @blur='blurName'
                >
                    <template slot="dataSource">
                        <a-select-option v-for="item in NationalLeaders" :key='item.id' :value="item.id.toString()">{{item.name}}</a-select-option>
                    </template>
                </a-auto-complete>
            </a-form-item>
        </a-form>
    </div>
</template>



<script>
import { mapState } from 'vuex';

export default {
    name:'NameList',
    data(){
        return {
            list:[],
            form: this.$form.createForm( this, {name:'findYou'} ),
            choosedName:''
        }
    },
    computed:{
        ...mapState({
            NationalLeaders: state=> state.NameList.NationalLeaders,
        })
    },

    methods:{
        filterOption(input, option) {
            return (
                option.componentOptions.children[0].text.toUpperCase().indexOf(input.toUpperCase()) >= 0
        );
        },
        selectName( value ){
            console.log( ' ====== selectName -->', value );
            this.choosedName = value;
        },
        blurName( value ){
            console.log( ' ====== blurName -->', value );
            if( !this.NationalLeaders.some(it=>it.id===value) ){
                this.choosedName = '';
                this.form.setFieldsValue({
                    choosedName: '',
                });
            }
        },        
    }
}
</script>


<style lang='less'>
.ship{
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
}
</style>