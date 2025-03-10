import Mock from 'mockjs'
export default {
  getMenu: config => {
    const { username, password } = JSON.parse(config.body)
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    if (username === 'admin' && password === 'admin') {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path: '/home',
              name: 'home',
              label: 'ホーム',
              icon: 's-home',
              url: 'Home.vue'
            },
            {
              path: '/mall',
              name: 'mall',
              label: 'メニュー管理',
              icon: 'menu',
              url: 'Mall.vue'
            },
            {
              path: '/user',
              name: 'user',
              label: 'スタッフ管理',
              icon: 'user',
              url: 'User.vue'
            },
            {
              label: 'その他',
              icon: 'location',
              children: [
                {
                  path: '/page1',
                  name: 'page1',
                  label: '在庫管理',
                  icon: 'takeaway-box',
                  url: 'PageOne.vue'
                },
                {
                  path: '/page2',
                  name: 'page2',
                  label: '説明',
                  icon: 'notebook-1',
                  url: 'PageTwo.vue'
                }
              ]
            }
          ],
          token: Mock.Random.guid(),
          message: '成功しました'
        }
      }
    } else if (username === 'xiaoxiao' && password === 'xiaoxiao') {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path: '/home',
              name: 'home',
              label: 'ホーム',
              icon: 's-home',
              url: 'Home.vue'
            },
            {
              path: '/video',
              name: 'video',
              label: 'メニュー管理',
              icon: 'menu',
              url: 'Mall.vue'
            }
          ],
          token: Mock.Random.guid(),
          message: '成功しました'
        }
      }
    } else {
      return {
        code: -999,
        data: {
          message: 'パスワードが間違っている'
        }
      }
    }

  }
}