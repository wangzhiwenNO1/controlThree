<template>
    <div>
        <el-dialog title="机构信息编辑"  width="45%" center :visible.sync="dialogFormVisible">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="机构名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="机构地址" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>

                <el-form-item label="机构类型(可多选)">
                    <el-checkbox-group v-model="ruleForm.type">
                        <el-checkbox label="检测实验室" name="type"></el-checkbox>
                        <el-checkbox label="国家重点实验室" name="type"></el-checkbox>
                        <el-checkbox label="科研实验室" name="type"></el-checkbox>
                        <el-checkbox label="校准实验室" name="type"></el-checkbox>
                        <el-checkbox label="企业内部实验室" name="type"></el-checkbox>
                        <el-checkbox label="高校实验室" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>

                <el-form-item label="机构类型(可多选)" >
                    <el-checkbox-group v-model="ruleForm.type">
                        <el-checkbox label="ISO/IEC 17025认可" name="type"></el-checkbox>
                        <el-checkbox label="ISO/IEC 17025认可" name="type"></el-checkbox>
                        <el-checkbox label="地推活动" name="type"></el-checkbox>
                        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>


                <el-form-item label="机构简介" >
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>

                <el-form-item label="基本信息" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="营业执照" >
                    <div class="uploadBox">
                        <div>
                            <i class="icon"></i>
                            <i class="el-icon-close"></i>
                        </div>
                        <div class="upbtnBox">
                            <el-button size="mini" type="text" icon="el-icon-circle-plus-outline">选择文件</el-button>
                            <el-button size="mini" round>上传</el-button>
                        </div>
                    </div>
                </el-form-item>

                <div class="uploadBox">
                    <div class="filesBox">
                        <div class="label">资质证明:(可上传多个文件)</div>
                        <div>
                            <i class="icon"></i>
                            <i class="el-icon-close"></i>
                        </div>
                    </div>

                    <div class="upbtnBox">
                        <el-button size="mini" type="text" icon="el-icon-circle-plus-outline">选择文件</el-button>
                        <el-button size="mini" round>上传</el-button>
                    </div>
                </div>

                <el-form-item label="机构logo：" >
                    <div class="uploadBox">
                        <div>
                            <i class="icon"></i>
                            <i class="el-icon-close"></i>
                        </div>
                        <div class="upbtnBox">
                            <el-button size="mini" type="text" icon="el-icon-circle-plus-outline">选择文件</el-button>
                            <el-button size="mini" round>上传</el-button>
                        </div>
                    </div>
                </el-form-item>
                <el-form-item label="背景图片：" >
                    <div class="uploadBox">
                        <div>
                            <i class="icon"></i>
                            <i class="el-icon-close"></i>
                        </div>
                        <div class="upbtnBox">
                            <el-button size="mini" type="text" icon="el-icon-circle-plus-outline">选择文件</el-button>
                            <el-button size="mini" round>上传</el-button>
                        </div>
                    </div>
                </el-form-item>

            </el-form>

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

<style lang="less" scoped>

    .label,.title{
        margin:0.5rem 0;
        font-weight: 600;
    }
    .el-select{
        margin:0.5rem 0.5rem 0.5rem 0;
    }

    .uploadBox{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .filesBox{
            display: flex;
            align-items: center;
            padding-left:1.1rem;
            margin-bottom:2rem;
            .label{
                color: #606266;
                font-weight:normal;
                margin-right: 0.5rem;
            }

        }

        .iconFile{
            width: 1rem;
            height: 1rem;
            background: pink;
            display: inline-block;
        }
        .icon{
            display: inline-block;
            width:1rem;
            height: 1rem;
            background: #EEE;
        }


        .upbtnBox{
            display: flex;
            justify-content: space-between;

            .el-button{
                width:5.25rem;
                background:rgba(255,255,255,1);

                border-radius:1rem;
                color:#2C64FF;
            }

            &>.el-button:last-child{
                border:1px solid #2C64FF;
            }

        }
    }

    .agreement{
        text-align: right;
        margin:1.5rem 0;

        span{
            margin-right: 0.5rem;
        }
    }

</style>