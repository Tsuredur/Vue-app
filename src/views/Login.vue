<template>
    <el-form ref="form" label-width="70px" :inline="true" class="login-container" :model="form" :rules="rules">
        <h3 class="login_title">LogIn</h3>
        <el-form-item label="ユーザID" prop="username" class="user" label-width="84px">
            <el-input v-model="form.username" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="パスワード" prop="password" class="password" label-width="94px">
            <el-input type="password" v-model="form.password" placeholder=""></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="submit" style="margin-left: 75px;margin-top: 40px;" type="primary">LogIn</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
import Mock from 'mockjs'
import Cookie from 'js-cookie'
import { getMenu } from '../api' 
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, trigger: 'blur', message: 'ユーザーIDを入力してください' }
                ],
                password: [
                    { required: true, trigger: 'blur', message: 'パスワードを入力してください' }
                ]
            }
        }
    },
    methods: {
        // 登录
        submit() {
            // // token信息
            // const token = Mock.Random.guid()
            

            // 校验通过
            this.$refs.form.validate((valid) => {
                if (valid) {
                    getMenu(this.form).then(({ data }) => {
                        console.log(data)
                        if (data.code === 20000) {
                            // token信息存入cookie用于不同页面间的通信
                            Cookie.set('token', data.data.token)

                            // 获取菜单的数据，存入store中
                            this.$store.commit('setMenu', data.data.menu)
                            this.$store.commit('addMenu', this.$router)
                            // 跳转到首页
                            this.$router.push('/home')
                        } else {
                            this.$message.error(data.data.message);
                        }
                    })
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.login-container {
    width: 350px;
    border: 1px solid #eaeaea;
    margin: 180px auto;
    padding: 30px 30px 0px 50px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 25px #cac6c6;
    box-sizing: border-box;
    .login_title {
        text-align: center;
        margin-bottom: 40px;
        color: #505458;
    }
    .el-input {
        width: 220px;
      
    }
    .user {
        
        display: inline;
    }
    .password {
        width: 96px;
        display: inline;
    }
}
</style>