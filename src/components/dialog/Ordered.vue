<template>
    <div class="orderedBox">
        <el-dialog title="订单完成"  width="40%" center :visible.sync="dialogFormVisible">
            <div class="orderTop">
                <el-avatar :size="12"></el-avatar>
                <div>订单总价 </div>
                <span>￥13356</span>
            </div>
            <div class="mainBox">
                <div class="title">
                    <i></i>
                    <div>订单是否更新？</div>
                </div>
                <div>如果订单在执行行程中变更</div>
                <div>在提交客户确认订单完成之前，请先对订单进行更新。</div>
                <div class="upBtn">更新订单 <i class=""></i></div>
            </div>

            <div slot="footer" class="dialog-footer">
                <el-button round size="mini" type="primary" @click="centerDialogVisible = false">提 交</el-button>
                <el-button round size="mini" class="cancel" @click="centerDialogVisible = false">取 消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                colors:["#2C64FF","#2C64FF","#2C64FF"],
                value1:"",
                centerDialogVisible: true,
                dialogFormVisible:true,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px'
            };
        }
    };
</script>

<style lang="less" scoped>

    .orderedBox{

        i{
            display:inline-block;
            width:1rem;
            height: 1rem;
            margin-right: 0.5rem;
            background:pink;
        }

        .orderTop{
            display:flex;
            align-items: center;
            height: 4rem;

            .el-avatar{
                margin-right: 0.5rem;
            }
            span{

                font-size:1.5rem;
                font-weight:400;
                color:rgba(4,175,0,1);
            }
        }

        .mainBox{
            height:9.74rem;
            background:rgba(229,229,229,1);
            border-radius:0.3rem;
            padding:1rem;
            box-sizing: border-box;
            font-size:0.88rem;
            font-weight:400;
            color:rgba(153,153,153,1);
            line-height:1.5rem;

            .title{
                font-size:1rem;
                font-weight:400;
                color:rgba(51,51,51,1);
                line-height:1.5rem;
                display: flex;
                align-items: center;
                margin-bottom: 1rem;



            }

            .upBtn{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                color:#04AF00;
                i{
                    margin-left:0.5rem;
                    background:#04AF00;
                }
            }
        }
    }

    .label{
        margin:0.5rem 0;
    }

    .rateBox{
        display: flex;

        &>div:first-child{
            margin-right: 0.5rem;
        }
    }
</style>