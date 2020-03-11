<template>
    <div>
        <div class="topBox">
            <div>
                <el-avatar shape="square" :size="50" src="#"></el-avatar>
            </div>
            <div>
                <div>上海少林检测技术服务有限公司</div>
                <div class="subtitle">上海浦东新区未来路888号</div>
                <div class="subtitle">机构编号：R1234</div>
            </div>
            <div class="editBtn">
                <el-button>编辑</el-button>
            </div>
        </div>
        <div class="bodyBox">
            <div class="leftBox">
                <div>
                    <i class="icon"></i><span>机构概况</span>
                </div>
            </div>
            <div>
                <el-row  class="rightBox">
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <div class="title">机构介绍</div>
                            <div>
                                上海必为检测服务有限公司是独立的第三方检测机构，特色项目包括：EMC电磁兼
                                容试验、三综合振动试验、ELV有害物质分析等，服务于电气电子、工业制造和汽
                                车及其零部件行业，，主要客户包括：上海大众、上海通用、德国博世等。
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <div class="title">基本信息</div>
                            <div>
                                <div><span>公司地址：</span>上海市浦东新区未来路138号</div>
                                <div><span>公司规模：</span>50-100人</div>
                                <div><span>公司性质：</span>私营企业</div>
                                <div><span>成立时间：</span>2010年</div>
                                <div><span>网站地址：</span>www.</div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <div class="title">
                                <div>资质证书</div>
                                <div><el-button size="mini" type="text">上传证书</el-button></div>
                            </div>
                            <div class="zhengshu">
                                <div>请上传证书</div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <div class="title">机构标签</div>
                            <div>
                                <div>期初检测，电磁兼容，材料分析，失效分析</div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <Mechanism></Mechanism>
    </div>
</template>

<script>
    import Mechanism from "../dialog/Mechanism";
    export default {
        name: "Organization",
        components:{
            Mechanism
        }
    }
</script>

<style lang="less">
    .el-tabs__header {
        margin: 0;
    }

    .topBox {
        height: 5.5rem;
        display: flex;
        background: #999999;
        padding: 1rem;
        align-items: center;

        font-size: 1.5rem;
        font-weight: 400;
        color: rgba(255, 254, 254, 1);
        line-height: 1.5rem;
        position: relative;

        .subtitle {
            font-size: 0.75rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
        }

        .el-avatar {
            margin-right: 1.5rem;
        }

        .editBtn {
            position: absolute;
            right: 1rem;
            top: 0;
            display: flex;
            height: 100%;
            align-items: center;

            .el-button {
                width: 6.88rem;
                height: 1.88rem;
                background: linear-gradient(90deg, #005E92, rgba(52, 171, 255, 1));
                border-radius: 1rem;
                line-height: 1.88rem;
                font-size: 0.75rem;
                padding: 0;
            }
        }
    }

    .bodyBox{
        display: flex;


        .leftBox{
            flex-shrink: 0;
            width:8rem;
            background:rgba(255,255,255,1);
            padding-left:0.5rem;

            &>div{
                height:2.75rem;
                background:rgba(242,244,250,1);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size:1rem;
                font-weight:400;
                color:rgba(44,100,255,1);
                border-left:2px solid rgba(44,100,255,1);

                .icon{
                    display: inline-block;
                    width:1rem;
                    height: 1rem;
                    margin-right: 0.5rem;
                    background: url("../../assets/imgs/btn-jigou2.png");
                    background-size: contain;
                }
            }
        }

        .rightBox{
            padding:1rem;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            
            .grid-content{
                background: #FFFFFF;
                height:11rem;
                background:rgba(255,255,255,1);
                border-radius:0.3rem;
                margin: 0.4rem;
                padding:1rem;
                box-sizing: border-box;


                .title{
                    padding:0 0 0.5rem;
                    border-bottom:1px solid #eeeeee;
                    margin-bottom:0.5rem;
                    display: flex;
                    justify-content: space-between;
                }

                span{
                    color:#999999;
                }

                .zhengshu{
                    text-align: center;
                    color: #999999;
                }
            }
        }
    }
</style>