<template>
    <el-form :model="ruleForm" label-position="left" size="mini" :rules="rules" ref="ruleForm" label-width="100px" class="infoForm">
        <div class="avatarBox">
            <el-avatar :size="50" src="#"></el-avatar>
            <div>
                <el-button size="mini" round>上传头像</el-button>
            </div>
        </div>

        <el-form-item label="姓名">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="邮箱地址">
            <el-input v-model="ruleForm.site"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
            <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>

        <el-form-item label="原密码">
            <el-input v-model="ruleForm.ypwd"></el-input>
        </el-form-item>
        <el-form-item label="新密码">
            <el-input v-model="ruleForm.pwd"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
            <el-input v-model="ruleForm.pwd"></el-input>
        </el-form-item>
        <el-form-item label="机构名称">
            <el-input v-model="ruleForm.site"></el-input>
        </el-form-item>
        <el-form-item label="职位">
            <el-input v-model="ruleForm.site"></el-input>
        </el-form-item>
        <el-form-item label="补充信息">
            <el-input v-model="ruleForm.site"></el-input>
        </el-form-item>


        <el-form-item>
            <el-button size="mini" round type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button size="mini" round @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        data() {
            return {
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
        padding:0.5rem;
        -webkit-border-radius:0.3rem;
        -moz-border-radius: 0.3rem;
        border-radius:0.3rem;

        .el-form-item__label{
            width:5rem !important;
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
    }

</style>