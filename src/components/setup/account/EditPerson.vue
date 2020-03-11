<template>
    <div class="editPerson">
        <div class="title">编辑新成员</div>
        <div class="mainBox">
            <div class="avatarBox">
                <el-avatar :size="80"></el-avatar>
            </div>

            <el-form :model="ruleForm" label-position="left" size="mini" :rules="rules" ref="ruleForm" label-width="100px" class="infoForm">

                <el-form-item label="姓名">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>

                <el-form-item label="邮箱">
                    <el-input v-model="ruleForm.site"></el-input>
                </el-form-item>
                <el-form-item label="角色">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="职位">
                    <el-input v-model="ruleForm.ypwd"></el-input>
                </el-form-item>


                <el-form-item>

                </el-form-item>
            </el-form>
        </div>
        <div class="btnBox">
            <el-button size="mini" round type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button size="mini" round @click="resetForm('ruleForm')">重置</el-button>
        </div>

    </div>

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
                },
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '',
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
        flex:1;

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
        .el-select{
            width:40%;
            .el-input{
                width:100%;
            }
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
    .editPerson{
        background: #FFFFFF;

        .title{
            padding: 0.5rem;
            border-bottom:1px solid #eee;
            margin-bottom:0.5rem;
        }

        .btnBox{
            padding:1rem;
            box-sizing: border-box;
        }
    }
    .mainBox{
        display: flex;
        background: #FFFFFF;
        align-items: center;
        padding:0.5rem;

        .avatarBox{
            width:11rem;
            height:11rem;
            background:rgba(242,244,250,1);
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }


</style>