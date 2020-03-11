<template>
    <div>
        <el-dialog
                title="提醒"
                :visible.sync="centerDialogVisible"
                width="30%"
                center>
            <div class="flexBox">
                <i class="el-icon-warning-outline"></i>
                <div>确定取消关联吗？</div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button round size="mini" type="primary" @click="centerDialogVisible = false">确 定</el-button>
                <el-button round size="mini" class="cancel" @click="centerDialogVisible = false">取 消</el-button>
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

<style scoped>

    .flexBox {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .el-icon-warning-outline {
        color: red;
        font-size: 5rem;
        margin-bottom: 1.5rem;
    }
</style>