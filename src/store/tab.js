//tab.js 管理菜单相关数据
import Cookie from 'js-cookie'
export default {
    state: {
        isCollapse: false, //用于控制菜单的开合
        threshold: 5, // 库存预警阈值
        // breadcrumb 数据
        tabList: [
            {
                path: "/",
                name: "home",
                label: "ホーム",
                icon: "s-home",
                url: "Home/Home",
            }
        ],
        menu: [],
        goodsMenu: [
            { name: 'ラーメン　塩', price: 700, category: '麺類', stock: 12 },
            { name: 'ラーメン　醤油', price: 700, category: '麺類', stock: 5 },
            { name: 'ラーメン　豚骨', price: 900, category: '麺類', stock: 9 },
            { name: 'チャーハン', price: 600, category: 'ご飯', stock: 20 },
            { name: '天津飯', price: 780, category: 'ご飯', stock: 20},
            { name: 'カレーライス', price: 630, category: 'ご飯', stock: 20},
            { name: '唐揚げ', price: 400, category: 'おつまみ', stock: 60 },
            { name: '冷麺', price: 550, category: '麺類', stock: 25 }
          ]
    },
    mutations: {
        updateThreshold(state, value) {
            state.threshold = value;
          },
        updateGoodsMenu(state, updatedMenu) {
            state.goodsMenu = updatedMenu;
          },
        //修改菜单开合
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        //更新breadcrumb
        selectMenu(state, val) {
            // 要判断添加的数据是否为首页   
            if(val.name !== "home"){
                //存在则返回index， 不存在返回-1
                const index = state.tabList.findIndex(item => item.name === val.name)
                if(index === -1) {
                    state.tabList.push(val)
                }
            }
        },
        //删除指定的tag数据  state是全体数据，包括了tabList item是单体数据，包括label，name等   
        closeTag(state, item) {
            //console.log(item, state);  找出传入的item（指tags中的某个）的name和tabList中的name一致的那一项
            const index = state.tabList.findIndex(val => val.name === item.name)
            //删除那一项     splice(删除的位置，删除的个数)
            state.tabList.splice(index, 1)
        },

        setMenu(state, val) {
            state.menu = val
            Cookie.set('menu', JSON.stringify(val))
        },

        //动态注册路由
        addMenu(state, router) {
            if(!Cookie.get('menu')) return
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu

            const menuArray = []
            menu.forEach(item => {
                if(item.children) {
                    item.children = item.children.map(item => {
                        item.component = () => import(`../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                }else {
                    item.component = () => import(`../views/${item.url}`)
                    menuArray.push(item)
                }    
            })
        
            menuArray.forEach(item => {
                router.addRoute('Main', item)
            })
            
        }
    }
}