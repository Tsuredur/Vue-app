<template>
    <el-row>
        <el-col :span="8" style="padding-right: 10px;">
            <div class="grid-content bg-purple">

                <el-card class="box-card">
                    <div class="user">
                        <img src="../assets/images/profile.jpg" alt="">
                        <div class="userinfo">
                            <p class="name">SUN HAORAN</p>
                            <p class="access">2022M822</p>
                        </div>
                    </div>
                    <div class="login-info">
                        <p>ログイン時間：<span>{{currentTime}}</span></p>
                        <p>ログインアドレス：<span>{{ip}}</span></p>
                    </div>
                </el-card>

                <el-card style="margin-top: 20px; height: 520px;">
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column v-for="(val, key) in tableLabel" :prop="key" :label="val" :key="val" />
                    </el-table>
                </el-card>
            </div>
        </el-col>
        <el-col :span="16" style="padding-left: 10px;">
            <div class="num">
                <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
                    <div class="detail">
                        <p class="price">{{ item.value }}</p>
                        <p class="desc">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
            <el-card style="height: 280px;">
                <!-- 折线图 -->
                <div ref="echarts1" style="height: 280px; width: 900px;"></div>
            </el-card>
            <div class="graph">
                <el-card style="height: 240px;">
                    <div ref="echarts2" style="height: 260px;"></div>
                </el-card>
                <el-card style="height: 240px;">
                    <div ref="echarts3" style="height: 260px; margin-top: -26px;;"></div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import { getData } from '../api'
import * as echarts from 'echarts'
export default {
    data() {
        return {
            ip: '',
            currentTime: new Date().toLocaleString(),
            tableData: [],
            tableLabel: {
                name: "商品",
                todayBuy: "売上(日)",
                monthBuy: "売上(月)",
                totalBuy: "売上(年)"
            },
            countData: [
                {
                    name: "今日の注文数",
                    value: 73,
                    icon: "success",
                    color: "#2ec7c9"
                },
                {
                    name: "今日の顧客数",
                    value: 48,
                    icon: "menu",
                    color: "#ffb980"
                },
                {
                    name: "今日の売上（円）",
                    value: 55772,
                    icon: "s-goods",
                    color: "#5ab1ef"
                },
                {
                    name: "今月の注文数",
                    value: 2649,
                    icon: "success",
                    color: "#2ec7c9"
                },
                {
                    name: "今月の顧客数",
                    value: 1810,
                    icon: "menu",
                    color: "#ffb980"
                },
                {
                    name: "今月の売上（円）",
                    value: 1600762,
                    icon: "s-goods",
                    color: "#5ab1ef"
                }
            ]
        }
    },
    methods: {
    async getIP() {
      const response = await fetch("https://ipapi.co/json/")
      const data = await response.json()
      this.ip = data.country_name + ' ' + data.city
    },
  },
    mounted() {
        this.getIP()
        // 发起请求
        getData().then(({ data }) => {
            const { tableData } = data.data
            this.tableData = tableData

            //创建echarts实例
            const echarts1 = echarts.init(this.$refs.echarts1)
            //组装数据
            var echarts1Option = {}
            const { orderData, userData, videoData } = data.data
            //orderData.date 为日期
            console.log(orderData.date)
            //Object.keys() 返回key.  获取x轴并写入
            const xAxis = orderData.date
            const xAxis_1 = Object.keys(orderData.data[0])
            const xAxisData = {
                data: orderData.date
            }
            echarts1Option.xAxis = {
                data: orderData.date
            }
            echarts1Option.yAxis = {}
            echarts1Option.legend = {
                data: Object.keys(orderData.data[0])
            }
            echarts1Option.series = []
            xAxis_1.forEach(key => { 
                echarts1Option.series.push({
                    name: key,
                    data: orderData.data.map(item => item[key]),
                    type: 'line',
                })
            })
            // 显示图表
            echarts1.setOption(echarts1Option)

            //柱状图
            const echarts2 = echarts.init(this.$refs.echarts2)
            const echarts2Option = {
                legend: {
                    //图例文字颜色
                    textStyle: {
                        color: "#333",
                    },
                },
                grid: {
                    left: "20%",
                },
                //提示框
                tooltip: {
                    trigger: "axis",
                },
                xAxis: {
                    type: "category",
                    data: userData.map(item => item.date),
                    axisLine: {
                        lineStyle: {
                            color: "#17b3a3"
                        },
                    },
                    aXisLabel: {
                        interval: 0,
                        colorl: "#333",
                    },

                },
                yAxis: [
                    {
                        type: "value",
                        axisLine: {
                            lineStyle: {
                                color: "#17b3a3",
                            },
                        },
                    },
                ],
                color: ['#2ec7c9', '#b6a2de'],
                series: [
                    {
                        name: "増加数",
                        data: userData.map(item => item.new),
                        type: "bar"
                    },
                    {
                        name: "顧客総数",
                        data: userData.map(item => item.active),
                        type: "bar"
                    }
                ],
            }

            echarts2.setOption(echarts2Option)

            // 饼状图
            const echarts3 = echarts.init(this.$refs.echarts3)
            const echarts3Option = {
                tooltip: {
                    trigger: "item",
                },
                color: [
                    "#0f78f4",
                    "#dd536b",
                    "#946235",
                    "#a6a6a6",
                    "#e1bb22",
                    "#39c362",
                    "#3ed1cf",
                    "#da70d6"
                ],
                title: {
    text: '売上数(年)',
    left: 'center',
    top: 'center'
  },
                series:  [
                    
                    {
                        data: videoData,
                        type: "pie",
                        radius: ['40%', '70%']
                    }
                ],
            }
            echarts3.setOption(echarts3Option)
        })

    }
}
</script>

<style lang="less"  scoped>
.user {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;

    img {
        margin-right: 40px;
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }

    .userinfo {
        .name {
            font-size: 32px;
            margin-bottom: 10px;
        }

        .access {
            color: #999999;
        }
    }
}

.login-info {
    p {
        line-height: 28px;
        font-size: 14px;
        color: #999999;

        span {
            color: #666;
            margin-left: 60px;
        }
    }
}

.num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .el-card {
        width: 32%;
        margin-bottom: 20px;
    }

    .icon {
        font-size: 30px;
        height: 80px;
        width: 80px;
        text-align: center;
        line-height: 80px;
        color: #fff;
    }

    .detail {
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .price {
            font-size: 30px;
            margin-bottom: 10px;
            line-height: 30px;
            height: 30px;
        }

        .desc {
            font-size: 14px;
            color: #999;
            text-align: center;
        }
    }
}

.graph {
    display: flex;
    justify-content: space-between;

    .el-card {
        width: 48%;
        margin-top: 13px;
    }
}</style>