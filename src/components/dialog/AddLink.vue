<template>
    <div>
        <el-dialog title="服务评价" width="40%" center :visible.sync="dialogFormVisible">
            <div class="infoBox">
                <el-avatar size="50"></el-avatar>
                <div>
                    <div>上海必维检测技术服务有限公司</div>
                    <div class="subTitle">上海市徐汇区</div>
                </div>
            </div>
            <div class="rateBox">
                <div>链接方式类别</div>
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="rateBox">
                <div>分类</div>
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="rateBox">
                <div>指定联系人</div>
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
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
                dialogFormVisible:true,
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

    .label {
        margin: 0.5rem 0;
    }

    .rateBox {
        display: flex;
        align-items: center;
        margin-bottom:1rem;

        & > div:first-child {
            margin-right: 0.5rem;
            flex:1;
        }

        & > div:last-child {
            flex:3;
        }
    }
    .infoBox{
        display: flex;
        justify-content: center;
        align-items: center;
        border:1px solid #EEEEEE;
        margin-bottom:1rem;
        padding:1rem;
        line-height: 1.5rem;

        .el-avatar{
            margin-right: 1rem;
        }

        .subTitle{
            color: #999999;
        }
    }
</style>