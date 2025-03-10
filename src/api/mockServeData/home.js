import Mock from 'mockjs'

//图表数据
let List = []
export default {
    getStatisticalData: () => {
        //Mock.Random.float 产生100-8000的随机数 保留小数 最小0位 最大0位
        for(let i = 0; i < 9; i++){
            let data1 = Mock.Random.float(100, 8000, 0, 0)
            let data2 = Mock.Random.float(100, 8000, 0, 0)
            let data3 = Mock.Random.float(100, 8000, 0, 0)
            let data4 = Mock.Random.float(100, 8000, 0, 0)
            let data5 = Mock.Random.float(100, 8000, 0, 0)
            let data6 = Mock.Random.float(100, 8000, 0, 0)
            let data7 = Mock.Random.float(100, 8000, 0, 0)
            let data8 = Mock.Random.float(100, 8000, 0, 0)
            List.push(
                Mock.mock({
                    ラーメン_塩: data1,
                    ラーメン_醤油: data2,
                    ラーメン_豚骨: data3,
                    天津飯: data4,
                    チャーハン: data5,
                    カレーライス: data6,
                    冷麺: data7,
                    唐揚げ: data8,
                })
            )
        }

        let data1 = Mock.Random.float(1245, 5600, 0, 0)
        let data2 = Mock.Random.float(2000, 4981, 0, 0)
        let data3 = Mock.Random.float(1000, 6210, 0, 0)
        let data4 = Mock.Random.float(1000, 3051, 0, 0)
        let data5 = Mock.Random.float(546, 4051, 0, 0)
        let data6 = Mock.Random.float(702, 4810, 0, 0)
        let data7 = Mock.Random.float(300, 3120, 0, 0)
        let data8 = Mock.Random.float(600, 1204, 0, 0)

        return {

            code: 20000,
            data: {
              //饼图
                videoData: [
                    // {
                    //     roseType: 'area'
                    // },
                    {
                        name: 'ラーメン_塩',
                        value: data1
                    },
                    {
                        name: 'ラーメン_醤油',
                        value: data2
                    },
                    {
                        name: 'ラーメン_豚骨',
                        value: data3
                    },
                    {
                        name: '天津飯',
                        value: data4
                    },
                    {
                        name: 'チャーハン',
                        value: data5
                    },
                    {
                        name: 'カレーライス',
                        value: data6
                    },
                    {
                        name: '冷麺',
                        value: data7
                    },
                    {
                        name: '唐揚げ',
                        value: data8
                    },

                ],
                //柱状图
                userData: [
                    {
                        date: '月曜日',
                        new: 0,
                        active: 32
                    },
                    {
                        date: '火曜日',
                        new: 13,
                        active: 45
                    },                    {
                        date: '水曜日',
                        new: 22,
                        active: 67
                    },                    {
                        date: '木曜日',
                        new: -13,
                        active: 54
                    },                    {
                        date: '金曜日',
                        new: 20,
                        active: 74
                    },                    {
                        date: '土曜日',
                        new: 60,
                        active: 134
                    },                    {
                        date: '日曜日',
                        new: -33,
                        active: 101
                    },
                ],
                //折线图
                orderData: {
                    date: ['2023_05','2023_06','2023_07','2023_08','2023_09','2023_10','2023_11'],
                    data: List
                },
                tableData: [
                    {
                        name: "ラーメン_塩",
                        todayBuy: 15,
                        monthBuy: 182,
                        totalBuy: 2417
                      }, {
                        name: "ラーメン_醤油",
                        todayBuy: 17,
                        monthBuy: 309,
                        totalBuy: 3172
                      }, {
                        name: "ラーメン_豚骨",
                        todayBuy: 24,
                        monthBuy: 671,
                        totalBuy: 6712
                      }, {
                        name: "天津飯",
                        todayBuy: 3,
                        monthBuy: 71,
                        totalBuy: 728
                      }, {
                        name: "チャーハン",
                        todayBuy: 11,
                        monthBuy: 279,
                        totalBuy: 2812
                      }, {
                        name: "カレーライス",
                        todayBuy: 13,
                        monthBuy: 157,
                        totalBuy: 2192
                      }, {
                        name: "冷麺",
                        todayBuy: 5,
                        monthBuy: 125,
                        totalBuy: 1192
                      }, {
                        name: "唐揚げ",
                        todayBuy: 13,
                        monthBuy: 123,
                        totalBuy: 1392
                      }
                ]
            }
        }
    }
}