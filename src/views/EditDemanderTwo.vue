<template>
    <div class="order">
        <el-row :gutter="10">
            <el-col :span="15">
                <div class="demaderLeft">
                    <div class="whiteBg">
                        <div class="leftTopBox">
                            <div class="title">
                                <div>注册需求方基本信息</div>
                                <div class="editBox">
                                    <div class="save">保存</div>
                                    <div class="cancel">取消</div>
                                </div>
                            </div>
                            <div class="leftTopInfo">
                                <el-avatar :size="60"></el-avatar>
                                <div>
                                    <div>上海峨眉检测技术服务有限公司</div>
                                    <ul>
                                        <li><i class=""></i><div>编号：{{labdetail.labCode}}</div></li>
                                        <li><i class=""></i><div>注册日：{{labdetail.registerDate}}</div></li>
                                        <li><i class=""></i><div>有效至：{{labdetail.validDate}}</div></li>
                                    </ul>
                                </div>
                                <div class="editBtn">查看详情</div>
                            </div>
                        </div>
                        <div>
                            <el-table
                                    border
                                    size="small"
                                    :data="tableData"
                                    style="width: 100%">
                                <el-table-column label="注册类型">
                                    <template slot-scope="scope">
                                        <!--                                        <div>{{}}</div>-->
                                        <el-select size="mini" v-model="value" placeholder="请选择">
                                            <el-option
                                                    v-for="item in options"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </template>
                                </el-table-column>
                                <el-table-column label="注册状态">
                                    <template slot-scope="scope">
                                        <el-select size="mini" v-model="value" placeholder="请选择">
                                            <el-option
                                                    v-for="item in options"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </template>
                                </el-table-column>
                                <el-table-column label="服务经理">
                                    <template slot-scope="scope">
                                        <div>{{labdetail.managerName}}</div>
                                        <!--                                        <el-select size="mini" v-model="value" placeholder="请选择">-->
                                        <!--                                            <el-option-->
                                        <!--                                                    v-for="item in options"-->
                                        <!--                                                    :key="item.value"-->
                                        <!--                                                    :label="item.label"-->
                                        <!--                                                    :value="item.value">-->
                                        <!--                                            </el-option>-->
                                        <!--                                        </el-select>-->
                                    </template>
                                </el-table-column>
                                <el-table-column label="付费方式">
                                    <template slot-scope="scope">
                                        <el-select size="mini" v-model="value" placeholder="请选择">
                                            <el-option
                                                    v-for="item in options"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </template>
                                </el-table-column>

                            </el-table>
                        </div>
                        <el-row class="detailsBox">
                            <el-col :span="6">
                                <div>总用户数：{{labdetail.userCount}}</div>
                                <div>总设备数：{{labdetail.deviceCount}}</div>
                                <div>总链接数：{{labdetail.linkCount}}</div>
                            </el-col>
                            <el-col :span="6">
                                <div>认可指数：{{labdetail.ratificationNum}}</div>
                                <div>综合评分：{{labdetail.ratesNum}}/5.0</div>
                                <div>活跃度：{{labdetail.activeStatus}}</div>
                            </el-col>
                            <el-col :span="6">
                                <div>总交易额：￥{{labdetail.totalPrice}}</div>
                                <div>总订单数：{{labdetail.totalOrderCount}}</div>
                                <div>近30天交易次数：{{labdetail.monthOrderCount}}</div>
                            </el-col>
                            <el-col :span="6">
                                <div>联系人：{{labdetail.contactName}}</div>
                                <div>邮箱地址：{{labdetail.contactEmail}}</div>
                                <div>联系电话：{{labdetail.contactPhone}}</div>
                                <div>职位：{{labdetail.contactPosotion}}</div>
                            </el-col>
                        </el-row>
                    </div>

                    <div class="whiteBg">
                        <div class="title">交易明细</div>
                        <el-table
                                border
                                size="small"
                                :data="tableData"
                                style="width: 100%">
                            <el-table-column label="任务编号">
                                <template slot-scope="scope">
                                    <div>{{ scope.row.id }}</div>
                                </template>
                            </el-table-column>
                            <el-table-column label="任务名称">
                                <template slot-scope="scope">
                                    <div>{{ scope.row.name }}</div>
                                </template>
                            </el-table-column>
                            <el-table-column label="任务状态">
                                <template slot-scope="scope">
                                    <div class="endType" v-if="scope.row.amount1">已完成</div>
                                    <div class="ingType" v-else>进行中</div>
                                </template>
                            </el-table-column>
                            <el-table-column label="交易对象">
                                <template slot-scope="scope">
                                    <div>{{ scope.row.amount2 }}</div>
                                </template>
                            </el-table-column>
                            <el-table-column label="交易金额">
                                <template slot-scope="scope">
                                    <div>{{ scope.row.amount3 }}</div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-col>
            <el-col :span="9">
                <div class="grid-content bg-purple">
                    <Chat></Chat>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Chat from "../components/Chat";

    export default {
        name: "order",
        components: {
            Chat
        },
        data() {
            return {
                labdetail:{},
                activeName: 1,
                tableData: [
                    {
                        id: "1",
                        name: "Demo 03 检测项目",
                        amount1: "234",
                        amount2: "供应商",
                        amount3: 10,
                        amount4: 10
                    }
                ],
                tableDatas: [
                    {
                        id: "1",
                        name: "有害物质",
                        amount1: "上海必为检测技术服务有限公司"
                    }
                ],
                options:[],
                value:"",
            };
        },
        created() {
            this.getlabdetail(10);
        },
        methods: {
            ///lab2lab/v1/system/getlabdetail需求方详细信息
            getlabdetail(id){
                let that=this;
                this.Axios.get("/lab2lab/v1/system/getlabdetail",{
                    id:id,
                }).then(function (res) {
                    console.log("需求方详细信息",res);
                    if(res.code==200){
                        that.labdetail=res.data;
                    }
                })
            },

            arraySpanMethod({ row, column, rowIndex, columnIndex }) {
                // if (rowIndex % 2 === 0) {
                //   if (columnIndex === 0) {
                //     return [1, 2];
                //   } else if (columnIndex === 1) {
                //     return [0, 0];
                //   }
                // }
                console.log(rowIndex);
                if (rowIndex == 2 || rowIndex == 3) {
                    return [1, 5];
                    // if (columnIndex === 0) {
                    //   return [1, 5];
                    // } else if (columnIndex === 1) {
                    //   return [0, 0];
                    // }
                }
            },

            objectSpanMethod({ row, column, rowIndex, columnIndex }) {
                // if (columnIndex === 0) {
                //   if (rowIndex % 2 === 0) {
                //     return {
                //       rowspan: 2,
                //       colspan: 1
                //     };
                //   } else {
                //     return {
                //       rowspan: 0,
                //       colspan: 0
                //     };
                //   }
                // }
            }
        }
    };
</script>
<style lang="less">
    .order {
        padding: 1rem;
        box-sizing: border-box;

        .demaderLeft{

            .whiteBg{
                padding:1rem;
                background: #FFFFFF;
                margin-bottom: 1rem;

                .title {
                    padding: 0.3rem 0;
                    border-bottom: 1px solid #f2f4fa;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.5rem;
                }
            }
        }

        .leftTopBox{

            .editBox{
                display: flex;


                .save{
                    color: #228AC4;
                    margin-right: 1rem;
                }
                .cancel{
                    color: #F12C0B;
                }
            }

            .leftTopInfo{
                display: flex;
                padding:1rem 0;
                position: relative;

                .el-avatar{
                    margin-right: 1rem;
                }

                ul{
                    display: flex;
                    margin-top:0.8rem;
                    li{
                        display: flex;
                        color:#999999;
                        margin:0 0.5rem 0 0;
                        align-items: center;

                        i{
                            display: inline-block;
                            width:1rem;
                            height: 1rem;
                            background: pink;
                            margin-right: 0.3rem;
                        }
                    }
                }

                .editBtn{
                    position: absolute;
                    right: 1rem;
                    top:1rem;
                    width:5.63rem;
                    height:1.88rem;
                    background:linear-gradient(90deg,rgba(0,94,146,1),rgba(27,156,228,1));
                    border-radius:1rem;
                    line-height:1.88rem;
                    text-align: center;
                    color:#FFFFFF;

                }
            }
        }

        .detailsBox{
            margin:2rem 0 1rem;
            font-size:0.88rem;
            font-weight:400;
            color:rgba(153,153,153,1);
            line-height:1.88rem;

            .el-col{
                border-left: 1px solid #EEE;
                padding-left: 1rem;
                box-sizing: border-box;
            }
        }

        .endType{
            width:5rem;
            height:1.25rem;
            background:linear-gradient(90deg,rgba(44,168,255,1),rgba(255,255,255,1));
            border-radius:1rem;
            font-size:0.75rem;
            text-align: center;
            line-height:1.25rem ;
            color: #333333;
        }



        .title {
            padding: 0.3rem 0;
            border-bottom: 1px solid #f2f4fa;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }


    }


</style>
