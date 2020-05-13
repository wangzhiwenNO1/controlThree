<template>
  <div class="workbench">
    <div class="topBox">
      <ul>
        <li>
          <div>需求方数量</div>
          <div>2000 | <span>178</span></div>
        </li>
        <li>
          <div>供应方数量</div>
          <div>600 | <span>36</span></div>
        </li>
        <li>
          <div>在线需求方</div>
          <div>266</div>
        </li>
        <li>
          <div>在线供应方</div>
          <div>82,345</div>
        </li>
        <li>
          <div>总链接数量</div>
          <div>82,345</div>
        </li>
      </ul>
      <ul>
        <li>
          <div>已完成订单数量</div>
          <div>{{numbers.devCount}}</div>
        </li>
        <li>
          <div>总交易额</div>
          <div>{{numbers.providerCount}}</div>
        </li>
      </ul>
    </div>
    <div class="mainBoxs">
      <div class="leftBoxs">
        <div class="leftTop itemBox">
          <div class="title">快捷操作</div>
          <div class="btnRow">
            <div><i class="iconEdit"></i><span>提交新需求</span></div>
            <div @click="open"><i class="el-icon-circle-plus-outline"></i><span>邀请实验室</span></div>
          </div>
        </div>
        <div class="leftRight itemBox">
          <div class="title">待办事项</div>
          <div>
            <!-- 无线循环 -->
            <!-- <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
              <li v-for="(i,index) in count" class="infinite-list-item" :key="index">{{ i }}</li>
            </ul>-->
            <ul class="dealt">
              <li v-for="(item,index) in todolist" :key="index">
                <div>
                  <div class="dealtLeft">
                    <i class="icon" v-if="item.isRead==0"></i>
                    <i class="icon readIcon" v-else></i>
                    <span>{{item.title}}</span>
                  </div>
                  <div class="time">2019-08-19 10:34</div>
                </div>
                <div>
                  <el-button size="mini" round v-if="item.isRead==0">查看详情</el-button>
                  <div class="checkedBtn" v-else>已查看</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="rightBox itemBox">
        <div class="title">统计分析</div>
        <div class="tabBoxs">
          <div :class="analyze?'active':''" @click="changeAnalyze(1)">
            <i class="icon icon-expenditure"></i>支出统计
          </div>
          <div :class="!analyze?'active':''" @click="changeAnalyze(2)">
            <i class="icon icon-order"></i>订单统计
          </div>
        </div>
        <div>
          <el-select v-model="value" @change="quickTime" placeholder="最近30天">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"

            ></el-option>
          </el-select>

          <el-date-picker
                  v-model="value2"
                  type="daterange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  @change="changeTime"
          ></el-date-picker>
        </div>

        <div></div>
        <div class="trendBox">
          <div class="title">
            趋势图
            <i class="icon"></i>
          </div>
        </div>
        <div class="echartBox" id="echartBox"></div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import {mapState} from "vuex";
  import echarts from 'echarts'

  export default {
    name: "workbench",
    components: {},
    data() {
      return {
        numbers: "",
        count: 0,
        todolist: [],
        paymentDateList:[],
        paymentList:[],//
        analyze:true,
        startDate:"",
        endDate:"",


        charts: '',
        // opinion: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        // opinionData: [335,310,234, 135,548],


        options: [
          {
            value: "选项1",
            label: "30天"
          },
          {
            value: "选项2",
            label: "一年"
          }
        ],
        value: "",
        pickerOptions: {
          shortcuts: [
            {
              text: "最近一周",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit("pick", [start, end]);
                this.startDate=start;
                this.endDate=end;

              }
            },
            {
              text: "最近一个月",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit("pick", [start, end]);
              }
            },
            {
              text: "最近三个月",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit("pick", [start, end]);
              }
            }
          ]
        },
        value1: "",
        value2: ""
      };
    },
    computed: {
      ...mapState(['hasLogin', 'userInfo'])
    },
    mounted() {
      this.getNumbers();
      this.gettodolist();
      this.getpaycount();


    },
    methods: {
      //快速选择
      quickTime(){
        console.log(12);
        if(!this.analyze){
          this.getpaycount();
        }else{
          this.getordercount();
        }
      },
      //修改时间
      changeTime(e){
        console.log(e);
        this.startDate=e[0];
        this.endDate=e[1];
        if(!this.analyze){
          this.getpaycount();
        }else{
          this.getordercount();
        }
      },
      // 需求方代办事项列表
      gettodolist() {
        let that = this;
        this.Axios.get("/lab2lab/v1/requestor/gettodolist", {}).then(function (res) {
          console.log("需求方代办事项列表", res);
          if (res.code == 200) {
            that.todolist = res.data;
          }
        })
      },
      //  获取需求方数字统计
      getNumbers() {

        let that = this;
        this.Axios.get("/lab2lab/v1/requestor/getnumbers", {
        }).then(function (res) {
          console.log(res);
          if (res.code == 200) {

            that.numbers = res.data;
          }
        })

      },

      //echart表格
      drawPie(id) {
        let that=this;
        this.charts = echarts.init(document.getElementById(id))
        this.charts.setOption({
          xAxis: {
            type: 'category',
            data: that.paymentDateList
          },
          yAxis: {
            type: 'value'
          },

          series: [
            {
              type: 'line',

              labelLine: {

              },
              data: that.paymentList
            }
          ]
        })
      },

      //切换分析类型
      changeAnalyze(type){
        if(type==1){
          this.getpaycount();
          this.analyze=true;
        }else{
          this.getordercount();
          this.analyze=false;
        }
      },
      //需求方支出统计接口
      getpaycount(){
        //  获取需求方数字统计
        let that = this;
        this.Axios.get("/lab2lab/v1/requestor/getpaycount", {
          startDate:"2020-01-01",
          endDate:"2020-02-01",
        }).then(function (res) {
          console.log("获取需求方数字统计",res);
          if (res.code == 200) {
            if(res.data.length>0){
              let paymentList=[],paymentDateList=[];
              res.data.forEach((item)=>{
                paymentList.push(item.payment);
                paymentDateList.push(item.paymentDate);
              })
              that.paymentDateList=paymentDateList;
              that.paymentList=paymentList;

              that.$nextTick(function () {
                that.drawPie('echartBox')
              })
            }
          }
        })
      },
      //需求方订单统计接口
      getordercount(){
        let that = this;
        this.Axios.get("/lab2lab/v1/requestor/getordercount", {
          startDate:"2020-01-01",
          endDate:"2020-02-01",
        }).then(function (res) {
          console.log("需求方订单统计接口",res);
          if (res.code == 200) {
            if(res.data.length>0){
              let paymentList=[],paymentDateList=[];
              res.data.forEach((item)=>{
                paymentList.push(item.orderNumber);
                paymentDateList.push(item.orderDate);
              })
              that.paymentDateList=paymentDateList;
              that.paymentList=paymentList;

              that.$nextTick(function () {
                that.drawPie('echartBox')
              })
            }
          }
        })
      },
      open() {
        let that = this;
        this.$prompt('请输入拟邀请实验室联系人的邮箱地址', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({value}) => {
          //用户邀请实验室
          that.Axios.get("/lab2lab/v1/requestor/invitenewcustomer", {
            email: value
          }).then(function (res) {
            console.log("用户邀请实验室", res);
            if (res.code == 200) {
              that.$message({
                type: 'success',
                message: '已邀请'
              });
            }
          })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
      load() {
        this.count += 2;
      }

    }
  }
</script>

<style lang="less" scoped>
  .workbench {
    padding: 1rem;
    background: rgba(242, 244, 250, 1);
    min-height: calc(100vh - 9.6rem);
    box-sizing: border-box;

    .title {
      padding: 0.3rem 0;
      border-bottom: 1px solid #f2f4fa;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
      font-weight: 400;
      font-size: 1rem;
    }

    .topBox {
      height: 4.88rem;
      background: rgba(255, 255, 255, 1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      color:black;

      span{
        color: #228AC4;
      }

      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;

        li {
          text-align: center;
          width: 9rem;
          border-right: 1px solid #eeeeee;

          & > div:first-child {
            color: #999;
            height: 1rem;
            font-size: 0.75rem;
            margin-bottom: 0.5rem;
          }
          & > div:last-child {
            font-weight: 600;
            font-size: 1.5rem;
          }

          &:last-child {
            border-right: none;
          }
        }
      }
      & > ul:last-child {
        & div:last-child {
          color: #228AC4;
        }
      }
    }

    .itemBox {
      padding: 1rem;
      background: #fff;
    }

    .mainBoxs {
      display: flex;

      .leftBoxs {
        flex: 1;

        .leftTop {
          margin: 1rem 0;

          .btnRow {
            & > div {
              width: 10rem;
              height: 3rem;
              background: rgba(255, 255, 255, 1);
              border: 1px solid rgba(218, 220, 227, 1);
              border-radius: 3rem;
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0 1rem;
            }
          }

          .iconEdit {
            /*background: url("../assets/imgs/Btn-tjxq.png") no-repeat;*/
            background-size: contain;
            display: inline-block;
            width: 1.3rem;
            height: 1.3rem;
            margin-right: 0.3rem;
          }

          .el-icon-circle-plus-outline {
            font-size: 1.5rem;
            color: #2C64FF;
            margin-right: 0.3rem;
          }
        }

        .btnRow {
          display: flex;
          justify-content: center;
          padding: 1rem;
        }

        .rightTop {
          padding: 1rem;
          background: #fff;
        }
      }

      .rightBox {
        flex: 1;
        margin: 1rem 0 1rem 1rem;
        background: #fff;

        .title {
          margin-top: 0.5rem;
        }
      }
    }

    .dealt {
      li {
        border-bottom: 1px solid #eeeeee;
        padding: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > div {
          display: flex;
          align-items: center;
        }

        .el-button {
          color: #2C64FF;
          border: 1px solid #2C64FF;
        }
      }

      .icon {
        width: 0.5rem;
        height: 0.5rem;
        margin-right: 0.5rem;
        display: inline-block;
        background: #2c64ff;
        border-radius: 50%;
      }

      .readIcon {
        background: #666;
      }

      .time {
        font-size: 0.75rem;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        padding-left: 1rem;
      }

      .checkedBtn {

        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(218, 220, 227, 1);
        border-radius: 3rem;
        padding: 0.2rem 1.3rem;
        color: #666666;
      }
    }

    .infinite-list {
      height: 20rem;
      background: pink;
    }

    .tabBoxs {
      display: flex;
      margin-bottom: 1rem;

      & > div {
        padding: 0.5rem 1rem;

        margin-right: 1rem;
        display: flex;
        align-items: center;

        font-size: 0.88rem;
      }


      .icon {
        width: 1rem;
        height: 1rem;
        margin-right: 0.5rem;
        display: block;
      }

      .icon-expenditure {
        /*background: url("../assets/imgs/btn-zhichu1.png") no-repeat;*/
        background-size: contain;
      }

      .icon-order {
        /*background: url("../assets/imgs/btn-dingdan1.png") no-repeat;*/
        background-size: contain;
      }


      .active {
        border-bottom: 3px solid #2c64ff;

        .icon-expenditure {
          background: url("../assets/imgs/btn-zhichu2.png") no-repeat;
          background-size: contain;
        }

        .icon-order {
          background: url("../assets/imgs/btn-dingdan2.png") no-repeat;
          background-size: contain;
        }
      }
    }

    .trendBox {
      .title {
        justify-content: flex-start;
      }

      .icon {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        margin-left: 0.5rem;
        /*background: url("../assets/imgs/btn-hqbz.png") no-repeat;*/
        background-size: contain;
      }


    }

    .echartBox {
      height: 20rem;
      background: #eeeeee;
    }
  }

</style>
