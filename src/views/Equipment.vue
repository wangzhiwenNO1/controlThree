<template>
    <div>
        <el-row>
            <el-col :span="6">
                <div class="itemBox">
                    <div class="title">设备详情</div>
                    <div class="infoItem">
                        <div class="tags">外部</div>
                        <div class="imgBox"></div>
                        <div>TE-001 湿湿度试验箱</div>
                    </div>
                    <div class="btnRows">
                        <el-button size="mini" round>返回</el-button>
                        <el-button size="mini" round>取消关联</el-button>
                    </div>
                </div>
                <div class="itemBox">
                    <div class="title">设备所有方</div>
                    <div class="nameList">
                        <el-avatar :size="30"></el-avatar>
                        <div>上海必为检测技术服务有限公司</div>
                    </div>
                </div>
                <div class="itemBox">
                    <div class="title">设备相关文件</div>
                    <ul class="ulList">
                        <li>
                            <div class="imgItem"></div>
                            <div>文件名001</div>
                        </li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="18">
                <div class="grid-content ">
                    <div class="nameBox">
                        <div :class="type==1?'active':''" @click="changeType(1)"><i class="el-icon-document"></i>设备信息</div>
                        <div :class="type==2?'active':''" @click="changeType(2)"><i class="el-icon-date"></i>设备日历</div>
                    </div>
                    <div class="rightBox">
                        <Info v-if="type==1"></Info>
                        <EripmentDate v-else></EripmentDate>
                    </div>
                </div>
            </el-col>
        </el-row>
        <AddProduct></AddProduct>
    </div>
</template>

<script>
import Info from "../components/equipment/eripment_info"
import EripmentDate from "../components/equipment/equipment_date"
import AddProduct from "../components/dialog/AddProduct";

    export default {
        name: "Equipment",
        components:{
            Info,
            EripmentDate,
            AddProduct
        },
        data(){
            return{
                type:1,
            }
        },
        methods:{
            changeType(type){
                this.type=type;
            }
        },

    }
</script>

<style lang="less" scoped>
    .el-col {
        padding: 1rem;
        box-sizing: border-box;
    }

    .itemBox {
        background: #FFFFFF;
        margin-bottom: 0.6rem;
        border-radius: 0.3rem;

        .title {
            padding: 0.6rem 1rem;
            border-bottom: 1px solid #f2f4ff;
        }

        .infoItem {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: relative;
            margin: 1rem 0;
        }

        .tags {
            position: absolute;
            top: -1rem;
            left: 1rem;
            padding: 0.1rem;
            background: rgba(241, 44, 11, 1);
            border-radius: 0.1rem;
            color: #ffffff;
            font-size: 0.75rem;
        }

        .imgBox {
            width: 8.75rem;
            height: 10.13rem;
            background: #eeeeee;
            margin-bottom:0.5rem;
        }
        .btnRows{
            display: flex;
            justify-content: center;
            padding:1rem 0;
        }

        .nameList{
            display: flex;
            align-items: center;
            padding:0.5rem;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;

            .el-avatar{
                margin-right:0.3rem;
            }
        }

        .ulList{
            li{
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 0.5rem;

                &>div{
                    font-size:0.75rem;
                    line-height: 1.5rem;
                }

                .imgItem{
                    width:1.81rem;
                    height:1.88rem;
                    background:#EEEEEE;


                }
            }
        }
    }

    .nameBox{
        display:flex;

        &>div{
            margin-right: 1rem;
        }

        i{
            margin-right: 0.3rem;
        }

        .active{
            color:#2C64FF;
        }
    }
    .rightBox{
        padding-top:0.5rem;
    }
</style>