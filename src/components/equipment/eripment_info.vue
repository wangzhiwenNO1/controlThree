<template>
    <div class="eripmentInfo">
        <div >
            <div class="eripmentInfoBox">
                <div class="title">基本信息</div>

                <el-row class="rows">
                    <el-col :span="8">
                        <div class="label">设备信息</div>
                        <div class="">TE-001</div>
                    </el-col>

                    <el-col :span="8">
                        <div class="label">设备名称</div>
                        <div class="">湿度试验箱</div>
                    </el-col>

                    <el-col :span="8">
                        <div class="label">设备厂商和型号</div>
                        <div class="">CT-100</div>
                    </el-col>

                    <el-col :span="8">
                        <div class="label">设备图片</div>
                        <div class="">
                            <el-avatar :size="20"></el-avatar>
                        </div>
                    </el-col>

                    <el-col :span="8">
                        <div class="label">设置类别</div>
                        <div class="">
                            <el-select v-model="value" size="mini" placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>

                    <el-col :span="8">
                        <div class="label">设备是否联网</div>
                        <div class="">是</div>
                    </el-col>

                </el-row>
                <el-row class="rowTwo">
                    <el-col :span="4">
                        <div class="label">技术参数</div>
                    </el-col>
                    <el-col :span="20">
                        <div class="">温度：60℃ 温度：5%RH - 95%RH</div>
                    </el-col>

                </el-row>
            </div>
            <div class="tableBox">
                <div class="title">适用检测项目</div>
                <el-table
                        border
                        size="small"
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            label="姓名名称"
                            width="80">
                        <template slot-scope="scope">
                            <div>{{ scope.row.num }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="设备名称">
                        <template slot-scope="scope">
                            <div>{{ scope.row.name }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="认可项目">
                        <template slot-scope="scope">
                            <div class="taskStatusOne" v-if="scope.row.num">进行中</div>
                            <div class="taskStatusTwo" v-else>已完成</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="按需报价">
                        <template slot-scope="scope">
                            <div class="payStatusOne" v-if="scope.row.fapiao"><i></i></div>
                            <div class="payStatusTwo" v-else><i></i></div>
                        </template>
                    </el-table-column>
                    <el-table-column label="单价">
                        <template slot-scope="scope">
                            <div v-if="scope.row.payStatus"><i></i>支出</div>
                            <div v-else><i></i>支出</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="计价单位">
                        <template slot-scope="scope">

                            <el-select v-model="value" size="mini" placeholder="请选择">
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
        </div>
    </div>
</template>

<script>
    export default {
        name: "eripment_info",
        data() {
            return {
                tableData: [{
                    num: '高温测试',
                    name: 'GB/T24223.IEC6006B 2-1',
                    status: 0,
                    price: 0,
                    payStatus: 30,
                    sta: 0
                }]
            }
        },
    }
</script>

<style lang="less" >
    .eripmentInfo{
        .eripmentInfoBox{
            background: #FFFFFF;
            margin-bottom:1rem;
            padding:1rem;

            .title {
                padding: 0.5rem ;
                border-bottom: 1px solid #f2f4ff;
                margin-bottom: 1rem;
            }
        }

        .rows {
            .el-col {
                display: flex;
                align-items: center;

                & > div {
                    width: 50%;
                    text-align: center;
                    height: 2rem;
                    line-height: 2rem;
                    border: 1px solid #EEEEEE;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .label {
                    background: #E7E9EF;

                }
            }
        }

        /*.el-input__inner {*/
        /*    height: 24px;*/
        /*    line-height: 24px;*/
        /*}*/

        /*.el-input__prefix {*/
        /*    top: 0;*/
        /*}*/

        /*.el-input__suffix {*/
        /*    height: 25px;*/
        /*}*/


        .rowTwo {
            .el-col {
                display: flex;

                & > div {
                    text-align: left;
                    height: 2rem;
                    line-height: 2rem;
                    border: 1px solid #EEEEEE;
                    width: 100%;

                }

                .label {
                    text-align: center;
                    background: #E7E9EF;

                }
            }
        }

        .tableBox {
            margin: 0.5rem 0;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            background: #FFFFFF;
            padding:1rem;

            .title {
                padding: 0.5rem ;
                border-bottom: 1px solid #f2f4ff;
                margin-bottom: 1rem;
            }
        }

        .el-table th {
            background: #eeeeee;
        }

        .taskStatusOne {
            width: 5rem;
            background: linear-gradient(90deg, rgba(44, 168, 255, 1), rgba(255, 255, 255, 1));
            border-radius: 1rem;
            text-align: center;
        }

        .taskStatusTwo {
            background: linear-gradient(90deg, rgba(131, 230, 34, 1), rgba(255, 255, 255, 1));
            border-radius: 1rem;
            text-align: center;
            width: 5rem;
        }

        .payStatusOne {
            color: #999999;
            display: flex;
            align-items: center;

            i {
                width: 1rem;
                height: 1rem;
                background: #999999;
                display: inline-block;
                margin-right: 0.3rem;
                border-radius: 50%;
            }
        }

        .payStatusTwo {
            color: #2C64FF;
            display: flex;
            align-items: center;

            i {
                width: 1rem;
                height: 1rem;
                background: #2C64FF;
                display: inline-block;
                margin-right: 0.3rem;
                border-radius: 50%;
            }
        }

        .paymentTwo {
            color: #2C64FF;
        }

        .paymentThr {
            color: #F12C0B;
        }

    }



</style>