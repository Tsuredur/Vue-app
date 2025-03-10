<template>
    <div class="header-container">
        <div class="l-content">
            <el-button style="margin-right: 20px;" @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
            <!-- 面包屑 -->
            <el-breadcrumb separator="/" class="myColor">
                <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{ item.label }}</el-breadcrumb-item>

            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown @command="handleClick">
                <span class="el-dropdown-link">
                    <img class="user" src="../assets/images/profile.jpg" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="cancel">ログアウト</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import  {mapState} from 'vuex';
import Cookie from 'js-cookie'

export default {
    data() {
        return {

        }
    },
    methods: {
        handleMenu() {
            this.$store.commit("collapseMenu")
        },
        // clickMenu(item) {
        //     //页面路由与当前不一致时跳转，否则不跳转
        //     if(this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path === '/'))) {
        //         this.$router.push(item.path)
        //     }
        //     this.$store.commit("selectMenu", item)
        // },
        handleClick(command) {
            if (command === 'cancel') {
                console.log('登出')
                // 清除cookie中的token
                Cookie.remove('token')
                // 清除cookie中的menu
                Cookie.remove('menu')
                // 跳转到登录页
                this.$router.push('/login')
            }
        },
        
    },
    computed: {
        ...mapState({
            tags: state => state.tab.tabList
        })
    },
}
</script>

<style lang="less" scoped>
.header-container {
    padding: 0 20px;
    height: 60px;
    background-color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text {
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
    }

    .r-content {
        .user {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }

    .l-content {
        display: flex;
        align-items: center;
        //样式不生效，使用样式穿刺
        /deep/.el-breadcrumb__item {
            .el-breadcrumb__inner {
                font-weight: normal;
                &.is-link {
                    color: #666;
                }
            }
            &:last-child {
                .el-breadcrumb__inner {
                    color: white;
                }
            }
        }

    }
}
</style>