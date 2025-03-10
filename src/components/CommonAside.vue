<template>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <h3> {{ isCollapse ?  'システム' : '飲食店管理システム' }} </h3>
        <el-menu-item v-for="item in noChildren" :key="item.name" :index="item.name" @click="clickMenu(item)">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{ item.label }}</span>
        </el-menu-item>
        <el-submenu v-for="item in haveChildren" :key="item.label" :index="item.label">
            <template slot="title">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{ item.label }}</span>
            </template>
            <el-menu-item-group v-for="subItem in item.children" :key="subItem.name">
                <el-menu-item :index="subItem.name" @click="clickMenu(subItem)">{{ subItem.label }}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>


<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-menu {
     border-right: none;
    height: 120vh;

    h3 {
        color: #fff;
        text-align: center;
        line-height: 48px;
        font-size: 16px;
        font-weight: 400;
    }
}




</style>

<script>
import Cookie from 'js-cookie'
export default {
    data() {
        return {
            // menuData: [
            //     {
            //         path: "/",
            //         name: "home",
            //         label: "首页",
            //         icon: "s-home",
            //         url: "Home/Home",
            //     },
            //     {
            //         path: "/mall",
            //         name: "mall",
            //         label: "商品管理",
            //         icon: "menu",
            //         url: "MallManage/MallManage",
            //     },
            //     {
            //         path: "/user",
            //         name: "user",
            //         label: "用户管理",
            //         icon: "user",
            //         url: "UserManage/UserManage",
            //     },
            //     {
            //         label: "其他",
            //         icon: "location",
            //         children: [
            //             {
            //                 path: "/page1",
            //                 name: "page1",
            //                 label: "附页1",
            //                 icon: "setting",
            //                 url: "Other/PageOne",
            //             },
            //             {
            //                 path: "/page2",
            //                 name: "page2",
            //                 label: "附页2",
            //                 icon: "setting",
            //                 url: "Other/PageTwo",
            //             },
            //         ],
            //     },
            // ]
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        //路由跳转
        clickMenu(item) {
            //页面路由与当前不一致时跳转，否则不跳转
            if(this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path === '/'))) {
                this.$router.push(item.path)
            }
            this.$store.commit("selectMenu", item)
        },
    },
    computed: {
        //没有子菜单
        noChildren() {
            return this.menuData.filter(item => !item.children)
        },
        //有子菜单
        haveChildren() {
            return this.menuData.filter(item => item.children)
        },
        //Vuex传入当前isCollapse的状态
        menuData() {
      // 判断当前数据,如果缓存中没有,当前store中去获取
            return JSON.parse(Cookie.get('menu')) || this.$store.state.tab.menu
        },

        isCollapse() {
            return this.$store.state.tab.isCollapse
        }
    }
}
</script>

<style lang="less" scoped>
.el-menu {
    border-right: none;
}
</style>