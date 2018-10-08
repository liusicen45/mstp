<template>
  <div class="homepage">
    <!-- 顶部模版 -->
    <el-row  :gutter="15" class="row">
      <el-col :span="6" v-for="(item, index) in panels" :key="index">
        <section class="pithy-panel">
          <div class="symbol" :style="{background: item.background}">
            <i :class="item.icon"></i>
          </div>
          <div class="value">
            <div>{{ item.number }}</div>
            <div>{{ item.title }}</div>
          </div>
        </section>
      </el-col>
    </el-row>
    <!-- 图表 -->
    <el-row :gutter="20" class="row">
      <el-col :span="16">
        <section class="custom-bar" id="chart1"></section>
      </el-col>
      <el-col :span="8">
        <section class="custom-bar">
          <div class="chart-panel">
            <div class="chart-panel-title">
              <p>星期五</p>
              <p>¥ 57,000 | 15%</p>
            </div>
            <div class="new-income"></div>
            <div class="chart-panel-footer">
              <span>新的收入</span>
              <span>市场 | 转介 | 在线</span>
            </div>
          </div>
          <div class="chart-panel">
            <div class="chart-panel-title">
              <p>六月</p>
              <p>23天 | 65%</p>
            </div>
            <div class="total-income"></div>
            <div class="chart-panel-footer">
              <span>收入总额</span>
              <span>¥ 56,999,476</span>
            </div>
          </div>
        </section>
      </el-col>
    </el-row>
    <el-row :gutter="15">
      <el-col :span="9">
        <section class="banner">
          <div>
            <el-carousel height="180px">
              <el-carousel-item v-for="(item, index) in banner" :key="index">
                <div class="banner-box">
                  <h3>{{item}}</h3>
                  <el-button size="small" type="primary" round plain>查看详情</el-button>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="banner-footer">
            <ul>
              <li>
                <i class="el-icon-lx-sort"></i>
                <span>销售</span>
              </li>
              <li>
                <i class="el-icon-lx-present"></i>
                <span>促销</span>
              </li>
              <li>
                <i class="el-icon-lx-camera"></i>
                <span>照片</span>
              </li>
              <li>
                <i class="el-icon-lx-more"></i>
                <span>其他</span>
              </li>
            </ul>
          </div>
        </section>
      </el-col>
      <el-col :span="15">
        <section class="matter">
          <div class="matter-title">
            <span>工作进度</span>
            <el-button size="mini" type="text" >查看详情</el-button>
          </div>
          <div class="matter-box">
            <el-table :show-header="false" :data="tableData" style="width: 100%">
              <el-table-column type="index" align="center" width="50"></el-table-column>
              <el-table-column align="center">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="target" align="center"></el-table-column>
              <el-table-column align="center">
                <template slot-scope="scope">
                  <el-tag size="medium" :type="scope.row.type">{{ scope.row.tag }}</el-tag>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="120" align="center">
                <template slot-scope="scope">
                  <el-button size="mini" type="primary" icon="el-icon-edit">编辑</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </section>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import bus from '../common/bus.js'
export default {
  data () {
    return {
      panels: [
        {
          icon: 'el-icon-lx-friendaddfill',
          number: 495,
          title: '新用户',
          background: '#6ccac9'
        },
        {
          icon: 'el-icon-lx-tagfill',
          number: 980,
          title: '销售',
          background: '#ff6c60'
        },
        {
          icon: 'el-icon-lx-noticefill',
          number: 661,
          title: '系统通知',
          background: '#f8d347'
        },
        {
          icon: 'el-icon-lx-rankfill',
          number: 10372,
          title: '利润',
          background: '#57c8f2'
        }
      ],
      banner: [
        'vue全家桶模版内部推广',
        'react native开发app项目',
        'react + redux开发人工智能新产品',
        '后台传统java改nodejs + mongoDB'
      ],
      tableData: [{
        target: '目标营销',
        tag: '75%',
        date: '2016-05-02',
        type: 'success',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        target: '产品交付',
        tag: '25%',
        date: '2016-05-04',
        type: 'info',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        target: '付款收集',
        tag: '47%',
        date: '2016-05-01',
        type: 'warning',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        target: '交货待定',
        tag: '15%',
        date: '2016-05-03',
        type: 'danger',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    drowLine () {
      let myChart = this.$echarts.init(document.querySelector('#chart1'))

      myChart.setOption({
        title: {
          text: '去年收入统计',
          left: 'center',
          top: 10
        },
        grid: {
          x: 70,
          y: 50,
          x2: 40,
          y2: 40
        },
        tooltip: {
          // formatter:
        },
        xAxis: {
          data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
        },
        yAxis: {
          axisLabel: {
            formatter: '{value} 万'
          }
        },
        color: '#bfc2d2',
        series: [{
          itemStyle: {
            barBorderRadius: [5, 5, 0, 0]
          },
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 100, 20, 5, 20, 36, 10, 10, 20]
        }]
      });
      myChart.resize()
    },
    // 新的收入 折线图
    newIncome () {
      let myChart = this.$echarts.init(document.querySelector('.new-income'))

      myChart.setOption({
        grid: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 0
        },
        tooltip: {
          // formatter:
        },
        xAxis: {
          // show: false,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            interval: 0,
            lineStyle: {
              color: 'rgba(255, 255, 255, .2)'
            },
            show: true
          },
          axisLabel: {
            show: false
          },
          data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
        },
        yAxis: {
          show: true,
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        color: '#fff',
        series: [{
          symbolSize: 6,
          itemStyle: {
            normal: {
              color: '#ff6700',
              lineStyle: {
                color: '#fff'
              }
            }
          },
          name: '销量',
          type: 'line',
          data: [5, 20, 36, 10, 100, 20, 5, 20, 36, 10, 10, 20]
        }]
      });
      myChart.resize()
    },
    //总收入
    totalIncome () {
      let myChart = this.$echarts.init(document.querySelector('.total-income'))

      myChart.setOption({
        grid: {
          x: 30,
          y: 0,
          x2: 30,
          y2: 0
        },
        tooltip: {
          // formatter:
        },
        xAxis: {
          // show: false,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            interval: 0,
            lineStyle: {
              color: 'rgba(255, 255, 255, .2)'
            },
            show: true
          },
          axisLabel: {
            show: false
          },
          data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
        },
        yAxis: {
          show: true,
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        color: '#fff',
        series: [{
          itemStyle: {
            barBorderRadius: [2, 2, 0, 0],
          },
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 20, 5, 20, 36, 100, 10, 10, 20]
        }]
      });
      myChart.resize()
    }
  },
  mounted () {
    this.drowLine()
    this.newIncome()
    this.totalIncome()
  },
  created () {
    bus.$on('collapse', msg => {
      setTimeout( () => {
        this.drowLine()
        this.newIncome()
        this.totalIncome()
      }, 300)
    })
  }
}
</script>

<style scoped>
  .homepage {
    overflow-x: hidden;
  }

  .row {
    margin-bottom: 15px;
  }

  .pithy-panel {
    height: 100px;
    width: 100%;
    display: flex;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
  }

  .symbol {
    width: 43%;
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 55px;
    color: #fff;
  }

  .value {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #bbb;
    /* font-weight: bold; */
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-size: 15px;
  }

  .value div:nth-of-type(1) {
    font-size: 40px;
  }

  .custom-bar {
    width: 100%;
    height: 400px;
    /* background: #fff; */
    /* border-radius: 5px; */
  }

  .chart-panel {
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  }

  .chart-panel > div:nth-of-type(2) {
    flex: 1;
  }

  .chart-panel:nth-of-type(1) {
    height: 205px;
    background-color: #6ccac9;
    margin-bottom: 15px;
  }

  .chart-panel:nth-of-type(2) {
    height: 180px;
    background-color: #a9d96c;
    margin-bottom: 15px;
  }

  .chart-panel-footer {
    height: 50px;
    background: rgba(0, 0, 0, 0.1);
    color: rgba(255, 255, 255, .8);
    font-weight: bold;
    line-height: 50px;
    padding: 0 15px;
    /* text-indent: 20px; */
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }

  .chart-panel-footer > span:nth-of-type(2) {
    font-size: 14px;
    letter-spacing: 1px;
  }

  .chart-panel-title {
    height: 50px;
    /* background: red; */
    /* line-height: 50px; */
    color: rgba(255, 255, 255, .8);
    font-weight: bold;
    border-bottom: 1px solid rgba(255, 255, 255, .2)
  }

  .chart-panel-title > p {
    font-size: 14px;
    margin: 0;
    letter-spacing: 1px;
    padding-left: 15px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }

  .chart-panel-title > p:nth-of-type(1) {
    padding-top: 8px;
  }

  .banner {
    height: 260px;
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    overflow: hidden;
    flex-direction: column;
  }

  .banner > div:nth-of-type(1) {
    flex: 1;
    background: #58c9f3;
  }

  .banner > div:nth-of-type(2) {
    height: 90px;
    background: #fff;
  }

  .banner-footer > ul {
    list-style: none;
    display: flex;
    margin: 0;
    width: 100%;
    padding: 0;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .banner-footer > ul > li {
    /* background: red; */
    height: 50px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #ddd;
    color: #74829c;
  }

  .banner-footer > ul > li > i {
    cursor: pointer;
    font-size: 23px;
  }

  .banner-footer > ul > li > span {
    cursor: pointer;
    font-size: 13px;
    margin-top: 4px;
  }

  .banner-footer > ul > li:last-child {
    border: none
  }

  .banner-footer > ul > li:hover {
    color: #58c9f3;
  }

  .banner-box {
    width: 80%;
    text-align: center;
    margin: 0 auto;
    padding: 30px;
    color: #fff;
  }

  .matter {
    width: 100%;
    height: 260px;
    background: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  }

  .matter-title {
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    color: #39b5aa;
    height: 48px;
    line-height: 48px;
    font-size: 18px;
    /* text-indent: 20px; */
    /* font-weight: bold; */
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    letter-spacing: 1px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }

  .matter > div:nth-of-type(2) {
    flex: 1;
    background: red;
  }
</style>
