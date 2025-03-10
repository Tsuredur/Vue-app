<template>
    <div class="manage">
        <el-dialog title="スタッフ管理" :visible.sync="dialogVisible" :before-close="handleClose">
            <!-- 新增人员表单信息 -->
            <el-form ref="form" :rules="rules" :model="form" label-width="80px" width="50%" :inline="true">
                <el-form-item label="名前" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="年齢" prop="age">
                    <el-input v-model="form.age"></el-input>
                </el-form-item>
                <el-form-item label="性別" prop="sex">
                    <el-select v-model="form.sex" placeholder="選択肢">
                        <el-option label="男" :value="1"></el-option>
                        <el-option label="女" :value="0"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="生年月日" prop="birth">
                    <div class="block">
                        <span class="demonstration"></span>
                        <el-date-picker v-model="form.birth" type="date" value-format="yyyy-MM-DD">
                        </el-date-picker>
                    </div>
                </el-form-item>
                <el-form-item label="住所" prop="addr">
                    <el-input v-model="form.addr"></el-input>
                </el-form-item>
                <el-form-item label="賃金" prop="salary">
                    <el-input v-model="form.salary"></el-input>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="cancel">キャンセル</el-button>
                <el-button type="primary" @click="submit">確認</el-button>
            </span>
        </el-dialog>
        <div class="manage-header">
            <el-button type="primary" @click="handleAdd">
                + 追加
            </el-button>
            <!-- 数据表 -->
            <el-form :inline="true" :model="userForm">
                <el-form-item>
                    <el-input placeholder="キーワードを入力してください" v-model="userForm.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">検索</el-button>
                </el-form-item>
            </el-form>
            <!-- form搜索区域 -->

        </div>
        <el-table :data="tableData" style="width: 100%" height="90%">
            <el-table-column prop="name" label="名前">
            </el-table-column>
            <el-table-column prop="sex" label="性別">
                <template slot-scope="scope">
                    <span> {{ scope.row.sex == 1 ? '男' : '女' }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="age" label="年齢">
            </el-table-column>
            <el-table-column prop="birth" label="生年月日">
            </el-table-column>
            <el-table-column prop="addr" label="住所">
            </el-table-column>
            <el-table-column prop="salary" label="賃金">

            </el-table-column>
            <el-table-column prop="button" label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.row)">編集</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.row)">削除</el-button>
                </template>
            </el-table-column>

        </el-table>
        <div class="pageChange">
            <el-pagination layout="prev, pager, next" :total="total" @current-change="handlePage">
        </el-pagination>

        </div>

    </div>
</template>

<script>
import { getUser, addUser, editUser, delUser } from '../api'
export default {
    data() {
        return {
            dialogVisible: false,
            form: {
                name: '',
                age: '',
                sex: '',
                birth: '',
                addr: '',
                salary: '',
            },
            rules: {
                // required为true时代表必填，message表示提示信息
                name: [
                    { required: true, message: "名前を入力してください" }
                ],
                age: [
                    { required: true, message: "年齢を入力してください" }
                ],
                sex: [
                    { required: true, message: "性別を選択してください" }
                ],
                birth: [
                    { required: true, message: "生年月日を選択してください" }
                ],
                addr: [
                    { required: true, message: "住所を入力してください" }
                ],
                salary: [
                    { required: true, message: "賃金を入力してください" }
                ]
            },
            tableData: [],
            modelType: 0, //0表示新增的弹窗，1表示编辑的弹窗
            total: 0, //当前总条数
            pageData: {
                page: 1,
                limit: 10
            },
            userForm: {
                name: ''
            },
        }
    },
    methods: {
        //提交用户表单
        submit() {
            //在element-ui的Form Methods下，提供了validate回调函数，用于校验表单 valid返回true or false
            this.$refs.form.validate((valid) => {
                if (valid) {
                    if (this.modelType === 0) {
                        addUser(this.form).then(() => {
                            // 重新获取列表接口
                            this.getList()
                        })
                    } else {
                        editUser(this.form).then(() => {
                            // 重新获取列表接口
                            this.getList()
                        })
                    }
                    //清空表单数据
                    this.$refs.form.resetFields()
                    //通过this.form 可以拿到数据并处理，最后关闭弹窗(且关闭弹窗时应清除数据，否则再次打开填写时有上一次的数据)
                    //此时使用API的resetFields方法，在弹窗关闭时调用此方法可清除表单信息。
                    //此时新的问题是，如何监听到关闭dialog(对话框)这个状态。dialog的before-close提供。
                    //如果在footer的slot中添加了用于关闭Dialog的按钮，那么可以在点击的回到函数中调用该方法
                    this.dialogVisible = false
                }

            })
        },
        //dialog对话框关闭时
        handleClose() {
            //清空表单数据
            this.$refs.form.resetFields()
            this.dialogVisible = false
        },
        cancel() {
            this.handleClose()
        },
        handleEdit(row) {
            this.modelType = 1
            this.dialogVisible = true
            //这里要进行深拷贝，否则会出错
            this.form = JSON.parse(JSON.stringify(row))

        },
        handleDelete(row) {
            this.$confirm('データを削除しますか', '提示', {
                confirmButtonText: 'YES',
                cancelButtonText: 'NO',
                type: 'warning'
            }).then(() => {
                delUser({ id: row.id }).then(() => {
                    this.$message({
                        type: 'success',
                        message: 'データを削除しました'
                    })
                    this.getList()
                })

            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: 'キャンセルしました'
                })
            })
        },
        handleAdd() {
            this.modelType = 0
            this.dialogVisible = true
        },
        //封装后专用于列表数据的方法
        getList() {
            getUser({params: {...this.userForm, ...this.pageData}}).then(({ data }) => {
                console.log(data)
                this.tableData = data.list
                this.total = data.count || 0
               
            })
        },
        //选择页码的回调函数
        handlePage(val) {
            this.pageData.page = val
            this.getList()
        },
        onSubmit() {
            this.getList()
        },
    },

    //对于列表的数据，应该在页面加载时就进行创建/请求
    mounted() {
        //getUser()通过Axios获取，是一个promise对象，用then()查看
        //data为获取的列表数据
        // getUser().then(({ data }) => {
        //     this.tableData = data.list
        //     this.total = data.count || 0
        // })
        this.getList()
    }
}
</script>

<style lang="less" scoped>
.manage {
    height: 90%;
    .manage-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .common-tabel {
        position: relative;
        height: calc(100% - 62px);
        .pager {
            position: absolute;
            bottom: 0;
            right: 20px;
        }
    }
}
// .pageChange {
//     position: relative;
//     bottom: 300px;
// }
</style>