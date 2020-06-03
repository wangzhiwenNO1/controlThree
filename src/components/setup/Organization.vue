<template>
    <div class="profileBox">
        <div class="el-row">
            <div class="el-col">
                <div class="mechanism itemBox">
                    <div class="title">机构简介</div>
                    <div>{{labelInfos.introduction}}</div>
                </div>
                <div class="itemBox certificateBox" >
                    <div class="title">
                        <div>资质证书</div>
                        <el-button icon="el-icon-circle-plus-outline" size="mini" type="text">上传证书</el-button>
                    </div>
                    <ul>
                        <li v-for="(item,index) in labelInfos.certification" :key="index">
                            <el-image :src="item.attrUrl" fit="fill"></el-image>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="el-col">
                <div class="infoBox mechanism itemBox">
                    <div class="title">基本信息</div>
                    <div class="">
                        <div><span>公司地址：</span>{{labelInfos.address}}</div>
                        <div><span>公司规模：</span>{{labelInfos.labScale}}人 </div>
                        <div><span>公司性质：</span>{{labelInfos.labNature}}</div>
                        <div><span>成立时间：</span>{{labelInfos.establishmentTime}}年</div>
                        <div><span>网站地址：</span>{{labelInfos.labSite}}</div>
                    </div>
                </div>
                <div class="mechanismTab itemBox">
                    <div class="title">机构标签</div>
                    <div v-if="labelInfos.labelInfo">
                        <el-tag
                                v-for="(item,index) in labelInfos.labelInfo"
                                :key="index"
                                closable
                        >
                            {{item.labelName}}
                        </el-tag>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                labelInfos: "",
            };
        },
        mounted() {
            this.getlabinfo();
        },
        methods: {
            //供应商机构概况
            getlabinfo(){
                let that=this;

                this.Axios.get("/lab2lab/v1/system/getlabdetailinfo", {
                    id:10
                }).then(function (res) {
                    console.log("供应商机构概况",res);
                    that.labelInfos=res.data;

                })
            },


        }
    };
</script>
<style lang="less" scoped>
    .profileBox {
        width: 100%;
        box-sizing: border-box;

        .el-row {
            display: flex;
        }

        .el-col {
            line-height: 1.88rem;
            position: relative;
            box-sizing: border-box;
            width: 50%;
        }

        .itemBox{
            padding: 0.5rem;
            background: #ffffff;
            margin:1rem 1rem 1rem 0;
            min-height: 15rem;
        }

        .title{
            padding-bottom:0.3rem;
            border-bottom: 1px solid #F2F4FA;
            margin-bottom: 0.1rem;
            display: flex;
            justify-content: space-between;
        }

        .avatarBox {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 10rem;
            height: 9rem;
            background: rgba(242, 244, 250, 1);
            margin-right: 1rem;
            line-height: 1.3rem;
        }

        .el-avatar {
            margin-bottom: 0.5rem;
        }
        .label {
            font-size: 0.88rem;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
        }

        .btnRow {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            position: absolute;
            bottom: 1rem;
            right: 1rem;

            i::before {
                font-size: 1.5rem;
                color: #2c64ff;
                margin-left: 2rem;
            }
        }

        .certificateBox {
            ul{
                display: flex;

                flex-wrap: wrap;
                li{
                    margin:0.3rem;

                    .el-image{
                        border:none;
                    }
                }
            }
            .el-image {
                width: 8.31rem;
                height: 12.25rem;
                border: 0.06px solid rgba(51, 51, 51, 1);
            }
        }
        .infoBox{
            span{
                color:#999999;
            }
        }

        .mechanism,.mechanismTab{
            min-height: 15rem;
            .el-tag{
                margin:0.3rem;
            }
        }
    }
</style>
