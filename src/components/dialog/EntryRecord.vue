<template>
    <div>
        <el-dialog title="录入记录"  width="30%" center :visible.sync="dialogFormVisible">
            <div class="label">变更内容</div>
            <div>
                <el-input v-model="form.name" type="textarea" autocomplete="off"></el-input>
            </div>
            <div class="label">变更原因</div>
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

<style scoped>

   .label{
       margin:0.5rem 0;
   }
</style>