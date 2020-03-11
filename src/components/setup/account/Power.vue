<template>
    <div>
        <el-table
                :data="tableData"
                border
                size="mini"
                style="width: 100%">
            <el-table-column label="项目">
                <template slot-scope="scope">
                    <div>{{scope.row.name}}</div>
                </template>
            </el-table-column>
            <el-table-column
                    label="免费用户"
                    width="120">
                <template slot-scope="scope">
                    <div><el-input size="mini"></el-input></div>
                </template>
            </el-table-column>
            <el-table-column label="付费用户"  width="120">
                <template slot-scope="scope">
                    <div><el-input size="mini"></el-input></div>
                </template>
            </el-table-column>

        </el-table>
        <div class="btnRows">
            <el-button round size="mini" class="edit">更新</el-button>
            <el-button round size="mini" class="cancel">取消</el-button>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '用户数量上限',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '链接方数量上限',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '设备数量上限',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '订单数量上限',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    }
</script>
<style lang="less">
    .btnRows{
        padding:1rem;
        background: #FFFFFF;

        .el-button{
            width:6.88rem;
            border-radius:1rem;
            color:#FFFFFF;
        }

        .edit{
            background:linear-gradient(90deg,rgba(0,94,146,1),rgba(27,156,228,1));
        }

        .cancel{
            background:linear-gradient(90deg,rgba(255,105,52,1),rgba(255,52,105,1));
        }
    }
</style>