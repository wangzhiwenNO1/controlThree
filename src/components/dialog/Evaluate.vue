<template>
    <div>
        <el-dialog title="服务评价"  width="30%" center :visible.sync="dialogFormVisible">
            <div class="rateBox">
                <div>服务内容</div>
                <el-rate v-model="value1" :colors="colors"></el-rate>
            </div>
            <div class="rateBox">
                <div>服务内容</div>
                <el-rate v-model="value1" :colors="colors"></el-rate>
            </div>
            <div class="rateBox">
                <div>服务内容</div>
                <el-rate v-model="value1" :colors="colors"></el-rate>
            </div>
            <div class="label">评语</div>
            <div>
                <el-input v-model="form.name" type="textarea" autocomplete="off"></el-input>
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