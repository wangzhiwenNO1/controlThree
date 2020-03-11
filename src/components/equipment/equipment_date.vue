<template>
    <div class="equipmentDate">
        <div>
            <div class="tableBoxs">
                <div class="title">
                    <div class="tagsBox">
                        <div>按天</div>
                        <div class="active">按周</div>
                        <div>按月</div>
                    </div>
                    <div>Nov 11–Nov 17-2019 <i class=""></i></div>
                </div>
                <el-table
                        border
                        size="small"
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column label="">
                        <template slot-scope="scope">
                            <div>{{ scope.row.date }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="Mon 11">
                        <template slot-scope="scope">
                            <div class="blueBg" v-if="scope.row.mon==0"></div>
                            <div class="greenBg" v-else-if="scope.row.mon==1"></div>
                            <div class="greyBg" v-else></div>
                        </template>
                    </el-table-column>
                    <el-table-column label="Tue 12">
                        <template slot-scope="scope">
                            <div class="blueBg" v-if="scope.row.tue==0"></div>
                            <div class="greenBg" v-else-if="scope.row.tue==1"></div>
                            <div class="greyBg" v-else></div>
                        </template>
                    </el-table-column>
                    <el-table-column label="Wed 13">
                        <template slot-scope="scope">
                            <div class="blueBg" v-if="scope.row.wed==0"></div>
                            <div class="greenBg" v-else-if="scope.row.wed==1"></div>
                            <div class="greyBg" v-else></div>
                        </template>
                    </el-table-column>
                    <el-table-column label="Thu 14">
                        <template slot-scope="scope">
                            <div class="blueBg" v-if="scope.row.thu==0"></div>
                            <div class="greenBg" v-else-if="scope.row.thu==1"></div>
                            <div class="greyBg" v-else></div>
                        </template>
                    </el-table-column>
                    <el-table-column label="Fri 15">
                        <template slot-scope="scope">
                            <div class="blueBg" v-if="scope.row.fri==0"></div>
                            <div class="greenBg" v-else-if="scope.row.fri==1"></div>
                            <div class="greyBg" v-else></div>
                        </template>
                    </el-table-column>
                    <el-table-column label="Set 16">
                        <template slot-scope="scope">
                            <div class="blueBg" v-if="scope.row.set==0"></div>
                            <div class="greenBg" v-else-if="scope.row.set==1"></div>
                            <div class="greyBg" v-else></div>
                        </template>
                    </el-table-column>
                    <el-table-column label="Sun 17">
                        <template slot-scope="scope">
                            <div class="blueBg" v-if="scope.row.sun==0"></div>
                            <div class="greenBg" v-else-if="scope.row.sun==1"></div>
                            <div class="greyBg" v-else></div>
                        </template>
                    </el-table-column>

                </el-table>
                <div class="introduce">
                    <div><i class="icon blueIcon"></i>未使用</div>
                    <div><i class="icon greenIcon"></i>已使用</div>
                    <div><i class="icon greyIcon"></i>不可用</div>
                </div>
            </div>

            <div class="tableBox">
                <div class="title">设备使用史</div>
                <el-table
                        border
                        size="small"
                        :data="tableDataTwo"
                        style="width: 100%">
                    <el-table-column
                            label="开始时间">
                        <template slot-scope="scope">
                            <div>{{ scope.row.startTime }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="结束时间">
                        <template slot-scope="scope">
                            <div>{{ scope.row.endTime }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="任务编号">
                        <template slot-scope="scope">
                            <div>{{ scope.row.num }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="使用项目/事件">
                        <template slot-scope="scope">
                            <div>{{ scope.row.things }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="使用时长">
                        <template slot-scope="scope">
                            <div>{{ scope.row.times }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="收入">
                        <template slot-scope="scope">
                            <div>{{ scope.row.price }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="成本">
                        <template slot-scope="scope">
                            <div>{{ scope.row.cost }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="收益">
                        <template slot-scope="scope">
                            <div>{{scope.row.profit}}</div>
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
                    date: '00:00 02:00',
                    mon: 0,
                    tue: 0,
                    wed: 0,
                    thu: 1,
                    fri: 2,
                    set: 0,
                    sun: 0
                }],
                tableDataTwo:[{
                    startTime:"2019年12月2日",
                    endTime:"2019年12月6日",
                    num:"T20191201001",
                    things:"高温试验",
                    times:"120",
                    price:"3600",
                    cost:"2400",
                    profit:"1200"
                }],
            }
        },
    }
</script>

<style lang="less">
    .equipmentDate{
        .topBox {
            background: #FFFFFF;
            margin-bottom: 1rem;
            padding: 1rem;

            .title {
                padding: 0.5rem;
                border-bottom: 1px solid #f2f4ff;
                margin-bottom: 1rem;
            }
        }

        .introduce{
            display:flex;
            align-items: center;
            padding:1rem 0 0;

            &>div{
                margin-right:0.5rem;
            }

            .icon{
                width:0.8rem;
                height: 0.8rem;
                margin-right:0.3rem;
                border-radius:50%;
                display:inline-block;
            }
            .blueIcon{
                background: #B2C4F6;
            }
            .greenIcon{
                background: #B0E280;
            }
            .greyIcon{
                background: #DFE0E5;
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

        .el-input__inner {
            height: 24px;
            line-height: 24px;
        }

        .el-input__prefix {
            top: 0;
        }

        .el-input__suffix {
            height: 25px;
        }

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
        .tableBox{
            .el-table .cell{
                font-size:0.75rem;
                &>div{
                    font-size:0.75rem;
                }
            }
        }

        .tableBoxs {
            margin: 0.5rem 0;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            background: #FFFFFF;
            padding: 1rem;

            .title{
                display:flex;
                justify-content: space-between;
            }

            .tagsBox{
                display:flex;
                &>div{
                    margin-right:1rem;
                }
                .active{
                    color:#2C64FF;
                }
            }

            .el-table--small td{
                padding:0;
            }

            .blueBg{
                background: #B2C4F6;
                width:100%;
                height: 1.8rem;
            }
            .greenBg{
                background: #B0E280;
                width:100%;
                height: 1.8rem;
            }
            .greyBg{
                background: #DFE0E5;
                width:100%;
                height: 1.8rem;
            }

            .cell{
                padding:0;
            }

            .title {
                padding: 0.5rem;
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