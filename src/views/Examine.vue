<template>
    <el-row>
        <el-col :span="8">
            <div class="providerBoxs">
                <div class="title">
                    <div>审核意见</div>
                </div>
                <div id="wangeditor">
                    <div ref="editorElem" style="text-align:left;"></div>
                </div>
                <div class="btnRow">
                    <el-button size="mini" round @click="jump">批准</el-button>
                    <el-button size="mini" round>驳回</el-button>
                </div>
            </div>


        </el-col>
        <el-col :span="16" class="cardBox">
            <div class="informations">
                <div class="informationOne informationItem">
                    <div class="title">新注册供应方审核</div>

                    <el-row class="detailsBoxTwo">
                        <el-col :span="4">

                            <el-avatar :size="80"></el-avatar>
                        </el-col>

                        <el-col :span="10">
                            <div>机构名称：<span>上海少林检测服务有限公司</span></div>
                            <div>机构地址：<span>上海黄浦区发达路888号</span></div>
                            <div>机构类型：<span>检测实验室</span></div>
                            <div> 机构资质：<span>ISO/IEC1702</span></div>
                        </el-col>
                        <el-col :span="10">
                            <div>联系人：<span>任盈盈</span></div>
                            <div>邮箱地址：<span>wangming@sample.com</span></div>
                            <div>联系电话：<span>1388888888</span></div>
                            <div>职位：<span>客户经理</span></div>
                        </el-col>

                    </el-row>
                </div>

                <div class="informationTwo informationItem">
                    <div class="title">机构简介</div>
                    <div class="text">
                        上海必为检测服务有限公司是独立的第三方检测机构，特色项目包括：EMC电磁兼容试验、三综合振动试验、ELV有害物质分析等， 服务
                    </div>
                </div>
                <div class="informationThree informationItem">
                    <div class="title">资质证书</div>
                    <div>
                        <el-image src="#" fit="fill"></el-image>
                    </div>
                </div>

            </div>
        </el-col>

    </el-row>
</template>
<script>
    import E from "wangeditor";
    export default {
        data() {
            return {
                checkList: ["选中且禁用", "复选框 A"],
                type:1,
                editor: null,
                editorContent: ''
            };
        },
        // catchData是一个类似回调函数，来自父组件，当然也可以自己写一个函数，主要是用来获取富文本编辑器中的html内容用来传递给服务端
        props: ['catchData'], // 接收父组件的方法
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        alert("submit!");
                    } else {
                        console.log("error submit!!");
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(
                    `当前限制选择 3 个文件，本次选择了 ${
                        files.length
                    } 个文件，共选择了 ${files.length + fileList.length} 个文件`
                );
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${file.name}？`);
            },
            jump(){
                this.$router.push({
                    path: "/demand",
                })
            },
            changeType(type){
                this.type=type;
            }
        },
        mounted() {
            this.editor = new E(this.$refs.editorElem);
            // 编辑器的事件，每次改变会获取其html内容
            this.editor.customConfig.onchange = html => {
                this.editorContent = html;
                this.catchData(this.editorContent); // 把这个html通过catchData的方法传入父组件
            };
            this.editor.customConfig.menus = [
                // 菜单配置
                'head', // 标题
                'bold', // 粗体
                'fontSize', // 字号
                'fontName', // 字体
                'italic', // 斜体
                'underline', // 下划线
                'strikeThrough', // 删除线
                'foreColor', // 文字颜色
                'backColor', // 背景颜色
                'link', // 插入链接
                'list', // 列表
                'justify', // 对齐方式
                'quote', // 引用
                'emoticon', // 表情
                'image', // 插入图片
                'table', // 表格
                'code', // 插入代码
                'undo', // 撤销
                'redo' // 重复
            ];
            this.editor.create(); // 创建富文本实例
        }
    };
</script>
<style lang="less" >
    .el-row {
        box-sizing: border-box;
        margin: 0;
    }
    .el-form-item {
        margin-bottom: 10px;
    }
    serviceBoxs {
        display: flex;
        flex-direction: column;
    }
    .el-checkbox__label{
        font-size:0.75rem;
    }
    .radioBox {
        background: #ffffff;
        height: 100%;
        padding: 1rem;
        margin-top: 0.2rem;
        border-radius: 0.3rem;
        box-sizing: border-box;
        ul {
            li {
                margin-bottom: 0.5rem;
            }
        }

        .title {
            font-size: 1rem;
            font-weight: 400;
            color: rgba(2, 95, 147, 1);
            padding: 0.3rem 0;
            border-bottom: 1px solid #08ae00;
            margin-bottom: 0.3rem;
        }
    }

    .providerBoxs {
        padding: 1rem;
        box-sizing: border-box;
        background: #ffffff;
        margin: 1rem;
        border-radius: 0.3rem;

        #wangeditor{
            width:100%;

            .w-e-toolbar{
                flex-wrap: wrap;
            }
        }

        .textBox{
            align-self: flex-start;
        }

        .title {
            padding: 0.3rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #f2f4ff;
            margin-bottom: 0.3rem;
        }

        ul {
            padding: 0.5rem 0;

            li {
                display: flex;
                align-items: center;
                width: 100%;

                .label{
                    flex:1;
                }

                &>div{
                    margin:0.3rem 0;
                }

                &>div:last-child{
                    flex:8;
                }

                .items {
                    display: flex;
                    align-items: center;
                }
            }
        }
        .el-avatar {
            margin-right: 0.4rem;
        }
        .btnRow {
            padding: 1rem 0;
            border-top: 1px solid #f2f4ff;
            display: flex;
            justify-content: center;

            .el-button {
                width: 8rem;
            }
        }
    }
    .cardBox {
        padding: 0.5rem;

        .cardItem {
            display: flex;
            .imgBox {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-right: 1rem;

                .el-avatar {
                    margin-bottom: 0.5rem;
                }
            }
            .infoBox {
                flex: 1;
                padding: 0.5rem 0;
            }
            .infoBox > div {
                display: flex;
                justify-content: space-between;

                &:first-child {
                    padding: 0 0.5rem 1rem;
                }
            }
            .numBox {
                padding: 1rem 0.5rem 0;
                border-top: 1px solid #f4f2ff;

                i {
                    margin-right: 0.5rem;
                }
            }
            .numBox > div {
                display: flex;
                align-items: center;

                font-size: 0.75rem;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
                line-height: 1.5rem;
            }
        }
    }
    .site {
        font-size: 0.75rem;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        line-height: 1.5rem;
        margin-top: 0.3rem;
    }
    .informations {

        margin: 1rem;
        box-sizing: border-box;

        .informationItem{
            background: #FFFFFF;
            padding: 1rem;
            margin-bottom: 1rem;
            border-radius: 0.3rem;

            .title{
                padding:0.5rem 0;
                border-bottom: 1px solid #eeeeee;
                margin-bottom: 0.3rem;
            }

            .el-image{
                width:8.31rem;
                height:12.25rem;
            }
        }

        .imgBox {
            display: flex;
            padding: 0.5rem 0;
            border-bottom: 1px solid #f4f2ff;

            .el-avatar {
                margin-right: 1rem;
            }
        }

        .text {
            font-size: 0.88rem;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            line-height: 1.5rem;
            padding: 1rem 0;
        }

        .infoBtn {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .cardItems{

        .site{
            margin-bottom: 1rem;
            border-bottom: 1px solid #F4F2FF;
            padding-bottom: 1rem;
        }
        .inputBox{
            display: flex;
            align-items: center;

            label{
                flex-shrink: 0;
            }
        }
        .buttonBox{
            margin-top:2rem;
            padding-top:1rem;
            border-top:1px solid #f4f2ff;
            text-align: right;
        }
    }
    .leftBox {
        min-height: calc(100vh - 12rem);
        background: rgba(255, 255, 255, 1);
        padding: 0.5rem 0 0.5rem 0.5rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        & > div {
            display: flex;
            align-items: center;
            width: 8rem;
            padding: 0.8rem 0 0.8rem 0.8rem;
            box-sizing: border-box;
            border-bottom: 1px solid #EEEE;

            i {
                margin-right: 0.3rem;
                font-size: 1.2rem;
            }

        }

        i{
            width: 1rem;
            height: 1rem;
            display: inline-block;
        }

        .icon-all{
            background:url("../assets/imgs/btn-quanbu2.png") no-repeat;
            background-size: contain;
        }

        .icon-inside{
            background:url("../assets/imgs/btn-ffxqf1.png") no-repeat;
            background-size: contain;
        }

        .icon-important{
            background:url("../assets/imgs/btn-mfxqf1.png") no-repeat;
            background-size: contain;
        }





        .active {
            background: rgba(242, 244, 250, 1);
            color: #228AC4;
            border-left: 2px solid #228AC4;

            i::before {
                color: #228AC4;

            }
            .icon-all{
                background:url("../assets/imgs/btn-quanbu2.png") no-repeat;
                background-size: contain;
            }

            .icon-inside{
                background:url("../assets/imgs/btn-ffxqf2.png") no-repeat;
                background-size: contain;
            }

            .icon-important{
                background:url("../assets/imgs/btn-mfxqf2.png") no-repeat;
                background-size: contain;
            }



        }

        .addBox {
            flex-direction: column;
            padding: 0.8rem;

            i::before {
                color: #228AC4;
                font-size: 1.2rem;
            }

            & > div {
                margin-top: 0.3rem;
            }
        }
    }
    .detailsBoxTwo{
        margin:2rem 0 1rem;
        font-size:0.88rem;
        font-weight:400;
        color:rgba(153,153,153,1);
        line-height:1.88rem;

        .el-col{
            border-left: 1px solid #EEE;
            padding-left: 1rem;
            box-sizing: border-box;
        }
        &>.el-col:first-child{
            border-left: none;
        }
        .activity{
            display: flex;
            align-items: center;
            .icon{
                display: inline-block;
                width:1rem;
                height: 1rem;
                background: url("../assets/imgs/Btn-you.png") no-repeat;
                background-size: contain;
                margin-right: 0.3rem;
            }
        }
        span{
            color:#333333;
        }
    }
</style>