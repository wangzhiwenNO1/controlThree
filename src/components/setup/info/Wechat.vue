<template>
    <el-form :model="ruleForm" label-position="left" size="mini" :rules="rules" ref="ruleForm" label-width="100px" class="infoForm">
        <div class="title">微信设置</div>
        <div class="formItem">
            <div>微信绑定</div>
            <div class="question">如何绑定？</div>
        </div>
        <div class="formItem">已绑定微信号：SXwds53</div>
        <div class="binding">
            <el-button size="mini" round type="text" icon="el-icon-circle-plus-outline">添加绑定</el-button>
            <el-button size="mini" round>解除绑定</el-button>
        </div>

        <el-form-item label="选择通知方式：">
            <div class="checkbox">
                <el-checkbox >邮件通知</el-checkbox>
                <el-checkbox>短信通知</el-checkbox>
            </div>

        </el-form-item>
        <div class="groupBox">
            <el-checkbox-group v-model="checkList" class="checkbox">
                <el-checkbox label="订单状态更新时通知我"></el-checkbox>
                <el-checkbox label="有消息时通知我"></el-checkbox>
                <el-checkbox label="有内部公告通知我"></el-checkbox>
                <el-checkbox label="关闭邮件通知功能" ></el-checkbox>
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

        .formItem{
            display: flex;
            line-height: 2rem;
        }
        .binding{
            margin-top:1rem;
        }
        .question{
            font-size:0.88rem;
            font-weight:400;
            color:rgba(44,100,255,1);
            margin-left:1rem;
        }

        .groupBox{
            margin-top:2rem;
        }
    }

</style>