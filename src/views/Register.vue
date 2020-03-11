<template>
    <div class="registerBox">
        <div class="logoBox">
            <img src="../assets/imgs/icon-LOGO2.png" alt="">
        </div>
        <div class="regBox">
            <div class="title">注册</div>
            <div>
                <div class="label">职位</div>
                <div>
                    <el-input placeholder="请输入您在所属机构中的职位名称"></el-input>
                </div>
            </div>
            <div>
                <div class="label">机构名称</div>
                <div>
                    <el-input placeholder="请输入所属机构的名称"></el-input>
                </div>
            </div>
            <div>
                <div class="label">机构地址</div>
                <div>
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>
                        <el-col :span="24">
                            <div class="grid-content purple">
                                <el-input placeholder="请输入所属机构的详细地址"></el-input>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div>
                <el-button round>注册</el-button>
            </div>
        </div>
        <div class="goBack">返回首页 <i class="el-icon-arrow-right"></i></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
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
                value: ''
            }
        }
    }
</script>

<style lang="less" scoped>
    .registerBox {
        background: #F2F4FA;
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        .logoBox {
            height: 3.38rem;
            margin: 2rem;
        }

        .regBox {
            width: 31.25rem;
            height: 28.43rem;
            background: rgba(255, 255, 255, 1);
            border-radius: 0.3rem;
            padding:2rem 5rem;
            box-sizing: border-box;

            .label{
                line-height: 1.7rem;
            }

            .title{
                text-align: center;
                font-size:1.5rem;
                margin-bottom: 1rem;
            }


            .purple{
                margin:0.5rem 0;
            }


        }

        .el-button{
            width:100%;
            background:linear-gradient(90deg,rgba(44,100,255,1),rgba(52,171,255,1));
            color: #ffffff;
            margin-top:0.5rem;
        }

        .goBack{
            position: absolute;
            bottom:1rem;
            color:#999999;
        }
    }
</style>