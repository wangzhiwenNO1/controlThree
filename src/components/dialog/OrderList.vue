<template>
    <div>
        <el-dialog
                title="订单记录"
                :visible.sync="centerDialogVisible"
                width="40%"
                center>
            <div >
                <div class="upBtn"><el-button type="text" icon="el-icon-download" size="mini" >下载记录</el-button></div>
                <ul>
                    <li class="flexBox">
                        <el-avatar :size="25"></el-avatar>
                        <div>
                            <div><span>周芷若</span>提交了报价</div>
                            <div class="timeBox">2019年8月8日 11:25</div>
                        </div>
                    </li>
                </ul>
            </div>
            <span slot="footer" class="dialog-footer">
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                centerDialogVisible: true
            };
        }
    };
</script>

<style lang="less" scoped>

    .flexBox {
        display: flex;

        align-items: center;
       border:1px solid #EEEEEE;
        padding:0.5rem;
        line-height: 1.5rem;
        -webkit-border-radius: 0.3rem;
        -moz-border-radius: 0.3rem;
        border-radius: 0.3rem;



        span{
            color:#2C64FF;
            margin-right: 0.5rem;
        }
        .timeBox{
            color: #999999;
        }

        .el-avatar{
            margin-right: 0.5rem;
            align-self: flex-start;
        }
    }
    .upBtn{
        text-align: right;
        margin-bottom:0.3rem;
    }

    .el-icon-warning-outline {
        color: red;
        font-size: 5rem;
        margin-bottom: 1.5rem;
    }
</style>