<template>
    <div>
        <el-container>
            <el-aside width="auto" style="overflow: hidden;">
                <common-aside/>
            </el-aside>
            <el-container>
                <el-header>
                    <common-header/>
                </el-header>
                <common-tag />
                <el-main>        
                    <!-- 子路由的路由出口 -->
                    <router-view></router-view>
                </el-main>
            </el-container>
            </el-container>
    </div>

</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '@/components/CommonHeader.vue'
import CommonTag from '@/components/CommonTag.vue'
    export default {
        data() {
            return {
                
            }
        },
        components: {
            CommonAside,
            CommonHeader,
            CommonTag,
        }
    }
</script>

<style lang="less" scoped>
.el-header {
    padding: 0;
}
</style>