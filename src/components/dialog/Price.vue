<template>
    <div>
        <el-dialog title="外层 Dialog" center :visible.sync="outerVisible">
            <div class="outBox">
                <ul>
                    <li>
                        <div class="avatarBox">
                            <el-avatar :size="30"></el-avatar>
                            <div>上海</div>
                        </div>
                        <div class="infoBox">
                            <div class="infoItem">
                                <div>资质</div>
                                <div>17025认可</div>
                            </div>
                            <div class="infoItem">
                                <div>综合评价</div>
                                <div>4.9/5</div>
                            </div>
                            <div class="infoItem">
                                <div>总价</div>
                                <div>￥2000</div>
                            </div>
                            <div class="infoItem">
                                <div>完成周期</div>
                                <div>详情</div>
                            </div>
                        </div>
                        <div class="btnBoxs">
                            <el-button round size="mini" class="blueBtn" @click="outerVisible = false">批准</el-button>
                            <el-button round size="mini" class="redBtn" @click="innerVisible = true">详情</el-button>
                        </div>
                    </li>
                    <li class="addLis">
                        <div class="addBox">
                            <i class="el-icon-circle-plus-outline"></i>
                            <div>发起新的询价</div>
                        </div>
                        <div class="tips">每个订单最多可以获得5份报价</div>
                    </li>
                </ul>
            </div>
            <el-dialog
                    width="30%"
                    title="内层 Dialog"
                    :visible.sync="innerVisible"
                    append-to-body
                center>
                <el-form :model="form" class="formBox">
                    <div>反馈意见</div>
                    <div>
                        <el-input type="textarea" v-model="form.name"></el-input>
                    </div>
                    <div>上传采购订单（PO）</div>
                    <div>
                        <el-upload
                                class="upload-demo"
                                ref="upload"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :file-list="fileList"
                                :auto-upload="false">
                            <el-button slot="trigger" size="small" type="text" icon="el-icon-circle-plus-outline">选取文件</el-button>
                            <el-button style="margin-left: 10px;" size="mini" round  @click="submitUpload">上传</el-button>
<!--                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                        </el-upload>
                    </div>
                    <div class="btnBoxs">
                        <el-button round size="mini" class="blueBtn" @click="outerVisible = false">批准</el-button>
                        <el-button round size="mini" class="redBtn" @click="innerVisible = true">取消</el-button>
                    </div>
                </el-form>
            </el-dialog>
            <div slot="footer" class="dialog-footer">

            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                centerDialogVisible: true,
                innerVisible:false,
                outerVisible:true,
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
                formLabelWidth: '120px',
                fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]

            };
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
            submitUpload() {
                this.$refs.upload.submit();
            },
        }
    };
</script>

<style lang="less" scoped>
.outBox{
    ul{
        display: flex;
        justify-content: center;
        align-items: center;

        li{
            width:14rem;
            height: 20rem;
            border:1px solid rgba(221, 224, 233, 1);
            line-height: 2.2rem;
            padding:1rem;
            box-sizing: border-box;
            border-radius: 0.3rem;
            margin:0 0.5rem;



            .avatarBox{
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                padding:0.5rem;
            }

            .infoItem{
                border-bottom:1px solid #EEEEEE;
                display: flex;
                align-items: center;
                &:first-child{
                    border-top:1px solid #EEEEEE;
                }

                &>div{
                    flex:1;

                    &:first-child{
                        color: #999999;
                    }
                }

            }


            .addBox{
                flex:9;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                i{
                    font-size:5rem;
                    color:#2C64FF;
                }
            }
            .tips{
                font-size:0.75rem;
                color:#999999;
            }

        }
        .addLis{
            display:flex;
            justify-content: center;
            flex-direction: column;
        }
    }

}
.btnBoxs{
    padding: 1rem 0 0;
    text-align: center;

    .el-button{
        width:5rem;
    }
}
.formBox{
    .btnBoxs{
        width:100%;
        display:flex;
        justify-content: center;
        align-items: center;
    }
}
</style>