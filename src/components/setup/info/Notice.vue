<template>
    <el-form :model="ruleForm" label-position="left" size="mini" :rules="rules" ref="ruleForm" label-width="100px" class="infoForm">
        <div class="title">通知设置</div>

        <el-form-item label="选择通知方式：" class="">
            <div class="checkbox">
                <el-checkbox >邮件通知</el-checkbox>
                <el-checkbox>短信通知</el-checkbox>
            </div>

        </el-form-item>
        <div>
            <el-checkbox-group v-model="checkList" class="checkbox">
                <el-checkbox label="复选框 A"></el-checkbox>
                <el-checkbox label="复选框 B"></el-checkbox>
                <el-checkbox label="复选框 C"></el-checkbox>
                <el-checkbox label="禁用" disabled></el-checkbox>
                <el-checkbox label="选中且禁用" disabled></el-checkbox>
            </el-checkbox-group>
        </div>


        <div>
            <el-button size="mini" round type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button size="mini" round @click="resetForm('ruleForm')">重置</el-button>
        </div>
    </el-form>
</template>
<script>
    export default {
        data() {
            return {
                checkList: ['选中且禁用','复选框 A'],
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

<style lang="less">
    .infoForm{
        background: #FFFFFF;
        margin:0 1rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding:0.5rem 0.5rem 3rem;
        -webkit-border-radius:0.3rem;
        -moz-border-radius: 0.3rem;
        border-radius:0.3rem;

        .el-form-item__label{
            width:8rem !important;
        }
        .el-form-item__content{
            margin-left:5rem !important;
        }

        .el-form-item{
            margin-bottom: 0.5rem;
        }

        .el-input{
            width:40%;
        }

        .avatarBox{
            display: flex;
            align-items: center;
            margin-bottom:0.5rem;

            .el-avatar{
                margin-right: 1.5rem;
            }
        }

        .checkbox{
            display:flex;
            flex-direction: column;
        }

        .el-checkbox-group{
            margin-bottom:0.5rem;
        }

        .title{
            padding: 0 0 0.5rem;
            border-bottom:1px solid #eee;
            margin-bottom:0.5rem;
        }
    }

</style>