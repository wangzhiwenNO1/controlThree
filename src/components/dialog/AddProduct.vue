<template>
    <div>
        <el-dialog title="录入记录"  width="50%" center :visible.sync="dialogFormVisible">
            <div class="title">检测项目名称</div>

            <div class="label">中文名称</div>
            <div>
                <el-input v-model="ruleForm.name"></el-input>
            </div>
            <div class="label">英文名称(选填)</div>
            <div>
                <el-input v-model="ruleForm.name"></el-input>
            </div>
            <div class="label">适用标准</div>
            <div>
                <el-input v-model="ruleForm.name"></el-input>
            </div>
            <div class="label">认可项目</div>
            <div>
                <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                </el-radio-group>
            </div>
            <div class="label">可见范围</div>
            <div>
                <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="仅自己"></el-radio>
                    <el-radio label="在线市场"></el-radio>
                    <el-radio label="所有链接方"></el-radio>
                    <el-radio label="指定链接方"></el-radio>
                </el-radio-group>
            </div>

            <div slot="footer" class="dialog-footer">
                <el-button round size="mini" type="primary" @click="centerDialogVisible = false">添 加</el-button>
                <el-button round size="mini" class="cancel" @click="centerDialogVisible = false">取 消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dialogFormVisible:true,
                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

    .label,.title{
        margin:0.5rem 0;
        font-weight: 600;
    }

</style>