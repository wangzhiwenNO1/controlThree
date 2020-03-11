<template>
    <div class="order">
        <el-row :gutter="10">
            <el-col :span="6">
                <div class="grid-content bg-purple leftBox">
                    <!-- 左上 -->
                    <div class="itemBox leftOne">
                        <div class="orderNum">#45972</div>
                        <div class="orderName">
                            <div>T2019083003 Demo 003 检测项目</div>
                            <div class="price">￥3000</div>
                            <i class="icon"></i>
                        </div>
                        <ul class="ulBoxs">
                            <li>
                                <div>状态</div>
                                <div class="state">已完成</div>
                            </li>
                            <li>
                                <div>负责人</div>
                                <div class="conscientious">
                                    <div class="avatar"></div>
                                    <div>斩无极</div>
                                </div>
                            </li>
                            <li>
                                <div>优先级</div>
                                <div>
                                    <i></i>
                                    <div>中</div>
                                </div>
                            </li>
                            <li>
                                <div>未读消息</div>
                                <div>
                                   <i class="el-icon-chat-dot-square"></i>
                                    <span>5</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </el-col>
            <el-col :span="9">
                <div class="grid-content bg-purple middleBox">
                    <div class="itemBox leftOne">
                        <div class="orderNum">#45972</div>
                        <div class="orderName">
                            <div>T2019083003 Demo 003 检测项目</div>
                            <i class="icon"></i>
                        </div>
                        <ul class="ulBoxs">
                            <li>
                                <div>状态</div>
                                <div class="state">已完成</div>
                            </li>
                            <li>
                                <div>负责人</div>
                                <div class="conscientious">
                                    <div class="avatar"></div>
                                    <div>斩无极</div>
                                </div>
                            </li>
                            <li>
                                <div>优先级</div>
                                <div>
                                    <i></i>
                                    <div>中</div>
                                </div>
                            </li>
                            <li>
                                <div>写作人员</div>
                                <div>
                                    <div class="avatarBox">
                                        <div class="avatar"></div>
                                        <div class="avatar"></div>
                                    </div>
                                    <div>3+</div>
                                    <div class="icon"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="itemBox middleOne">
                        <div class="title">选择服务方</div>
                        <ul class="ulBoxs">
                            <li>
                                <div>
                                    <el-avatar :size="30"></el-avatar>
                                    <div>上海少林检测技术服务有限公司</div>
                                </div>
                                <div>￥3200</div>
                                <div class="infoBtn"> 详情</div>
                            </li>

                        </ul>
                    </div>

                    <div class=" itemBox">
                        <div class="itemBox middleTwo leftTwo">
                            <div class="title">需求描述</div>
                            <ul class="demandBox">
                                <li>
                                    <div>需求名称</div>
                                    <div>Demo 003 检测项目</div>
                                </li>
                                <li>
                                    <div>需求名称</div>
                                    <div>Demo 003 检测项目</div>
                                </li>
                                <li>
                                    <div>需求名称</div>
                                    <div>Demo 003 检测项目</div>
                                </li>
                                <li>
                                    <div>需求名称</div>
                                    <div>Demo 003 检测项目</div>
                                </li>
                                <li>
                                    <div>需求名称</div>
                                    <div>
                                        <div>Demo 003 检测项目</div>
                                        <div>Demo 003 检测项目</div>
                                    </div>
                                </li>
                                <li>
                                    <div>需求名称</div>
                                    <div>Demo 003 检测项目</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="middleThree itemBox">
                        <div>
                            <div class="title">
                                <div>技术资料</div>
                                <div>
                                    <el-button type="text" size="mini" icon="el-icon-circle-plus-outline">添加新文件</el-button>
                                    <i class="el-icon-arrow-up"></i>
                                </div>
                            </div>
                            <ul class="fileBox">
                                <li>
                                    <div></div>
                                    <div class="fileName">文件名</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="middleThree itemBox">
                        <div>
                            <div class="title">
                                <div>采购文件（订单或合同）</div>
                                <div>
                                    <el-button type="text" size="mini" icon="el-icon-circle-plus-outline">添加新文件</el-button>
                                    <i class="el-icon-arrow-up"></i>
                                </div>
                            </div>
                            <ul class="fileBox">
                                <li>
                                    <div></div>
                                    <div class="fileName">文件名</div>
                                </li>
                            </ul>
                        </div>
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
                activeName: 1,
                tableData: [
                    {
                        id: "1",
                        name: "王小虎",
                        amount1: "234",
                        amount2: "3.2",
                        amount3: 10,
                        amount4: 10
                    },
                    {
                        id: "2",
                        name: "王小虎",
                        amount1: "165",
                        amount2: "4.43",
                        amount3: 12,
                        amount4: 10
                    },
                    {
                        id: "合计 Total Price：",
                        name: "￥12,600"
                    },
                    {
                        id: "含税价格 Final Price with Tax：",
                        name: "￥12,600"
                    }
                ],
                tableDatas: [
                    {
                        id: "1",
                        name: "有害物质",
                        amount1: "上海必为检测技术服务有限公司"
                    }
                ]
            };
        },
        methods: {
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

        .upOfferBox {
            display: flex;
            justify-content: flex-end;
            margin-top: 0.5rem;
            border-top: 1px solid #eeeeee;
        }

        .upOffer {
            background: linear-gradient(
                    90deg,
                    #005E92,
                    rgba(52, 171, 255, 1)
            );
            margin-top: 0.5rem;
        }

        .RemarkBox{
            &>div{
                line-height: 1.5rem;
                font-weight: 600;
            }

            .Remarks{
                color:#999999;
                font-size: 0.75rem;
                font-weight: normal;
            }
        }

        .el-collapse-item {
            padding: 0 1rem;
            box-sizing: border-box;
            margin-bottom: 0.3rem;
            background: #ffffff;
            border-radius: 0.3rem;

            .el-collapse-item__header {
                height: 30px;
                line-height: 30px;
            }
        }
        .el-collapse-item__content {
            padding-bottom: 10px;
        }

        .fileBox {
            display: flex;
            align-items: center;
            padding: 1rem 0;

            .fileName{
                color:#999999;
            }

            li {
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: center;
                margin-right: 0.5rem;

                & > div:first-child {
                    width: 3rem;
                    height: 3rem;
                    background: pink;
                    margin-bottom: 0.3rem;
                }

                & > div:last-child {
                    color: #333333;
                    font-size: 0.75rem;
                }
            }
        }

        .title {
            padding: 0.3rem 0;
            border-bottom: 1px solid #f2f4fa;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .ulBoxs {
            display: flex;
            color: #999999;
            font-size: 0.75rem;
            align-items: center;
            justify-content: space-between;
            margin-top: 1rem;

            li {
                padding: 0.25rem;
                border-right: 1px solid #eeeeee;
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;

                & > div {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size:0.75rem;
                }
                & > div:first-child {
                    margin-bottom: 0.5rem;
                }

                .conscientious{
                    font-size:0.75rem;
                    flex-direction: column;
                    & > div {

                        font-size:0.75rem;
                    }
                }

                &:last-child {
                    border-right: none;
                }

                .state {
                    width: 4rem;
                    height: 1.25rem;
                    background: linear-gradient(
                            90deg,
                            rgba(131, 230, 34, 1),
                            rgba(255, 255, 255, 1)
                    );
                    border-radius: 1rem;
                    font-weight: 400;
                    color: rgba(51, 51, 51, 1);
                    line-height: 1.25rem;
                    align-self: center;
                }

                .avatar {
                    width: 1.25rem;
                    height: 1.25rem;
                    border-radius: 50%;
                    background: pink;
                    margin-right: 0.2rem;
                }

                .avatarBox {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .icon {
                    width: 1rem;
                    height: 1rem;
                    background: pink;
                    display: block;
                }
            }
        }

        .itemBox {
            padding: 0.5rem 1rem;
            background: #ffffff;
            border-radius: 0.3rem;
            margin-bottom: 0.5rem;

            &:last-child {
                margin-bottom: 0;
            }

            .el-icon-arrow-up{
                color:#2C64FF;
                margin-left:1rem;
            }
            .el-icon-chat-dot-square{
                font-size: 1.1rem;
                margin-right: 0.1rem;
            }
        }

        .leftBox {
            .leftOne {
                .orderNum {
                    font-size: 0.75rem;
                    color: #999999;
                }
                .orderName {
                    display: flex;
                    color: #333333;
                    font-size: 0.88rem;
                    align-items: center;
                    justify-content: space-between;

                    .icon {
                        width: 1rem;
                        height: 1rem;
                        display: block;
                        background: pink;
                    }



                    .price{
                        font-size: 0.75rem;
                        color:#999999;
                    }
                }
            }



            .leftThree,
            .leftFour {
            }
        }
    }
    .leftTwo {
        .demandBox {
            margin-top: 0.5rem;
            li {
                display: flex;
                align-items: center;

                & > div:first-child {
                    flex: 1;
                    border-right: 1px solid #f2f4fa;
                    height: 100%;
                    padding: 0.2rem 0;
                    color: #999999;
                }

                & > div:last-child {
                    flex: 3;
                    padding: 0rem 1rem;
                    box-sizing: border-box;
                    color: #333333;
                }
            }
        }
    }

    .middleBox {
        .middleOne {
            background: #ffffff;

            .ulBoxs{
                li{
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    color:#333333;

                    &> div:first-child {
                        margin-bottom: 0;
                    }
                    .infoBtn{
                        color:#2C64FF;
                    }
                }

            }
        }

        .fileBox {
            padding: 0;
        }
    }
</style>