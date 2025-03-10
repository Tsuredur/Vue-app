<template>
    <div class="tabs">
        <el-tag v-for="(item, index) in tags" :key="item.path" :effect="$route.name === item.name ? 'dark' : 'plain'"
            :closable="item.name !== 'home'" @click="changeMenu(item)" @close="handleClose(item, index)" size="small">
            {{ item.label }}
        </el-tag>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'CommonTag',
    data() {
        return {}
    },
    computed: {
        ...mapState({
            tags: (state) => state.tab.tabList,
        }),
 
    },
    methods: {
       //传入store中的closeTag方法
       ...mapMutations(["closeTag"]),
        //点击tag跳转
        changeMenu(item) {
            this.$router.push({ name: item.name })
        },
        //点击tag删除（加index是要判断高亮的位置）  注：删除数据本质删除的是tab.js 中的tabList的数据
        handleClose(item, index) {
            //调用store的muations的closeTag
            this.closeTag(item)
            const length = this.tags.length  

            //删除tag之后的路由跳转逻辑
            //1.删除非激活的tag，URL不变化(点击删除的标签的name和路由的name不一致)
            if(item.name !== this.$route.name){
                return
            }
            //2.当前删除的tag的index与length相等（即删除的是最后一项）,应显示前一项的路由和高亮
            if(index === length) {
                this.$router.push({
                    name: this.tags[index - 1].name
                })
            }
             //3.若选中并删除中间位置的内容，会向后一个进行跳转
            else{
                this.$router.push({
                    name: this.tags[index].name
                })
            }
           
        },

    }

}
</script>

<style lang="less" scoped>
.tabs {
    padding: 20px;
    .el-tag{
        margin-right: 15px;
        //移入时加入小手的指针
        cursor: pointer;
    }
}
</style>