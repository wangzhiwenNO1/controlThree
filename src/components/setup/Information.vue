<template>
    <div class="Information">
        <div class="leftBox">
            <div :class="type==1?'active':''" @click="changeType(1)">
                <i class="icon-infoForm"></i>
                <div>基本信息</div>
            </div >
            <div :class="type==2?'active':''" @click="changeType(2)">
                <i class="icon-notice"></i>
                <div>通知设置</div>
            </div>
            <div :class="type==3?'active':''" @click="changeType(3)">
                <i class="icon-wechat"></i>
                <div>微信设置</div>
            </div>

        </div>
        <div class="rightBox">
            <infoForm v-if="type==1"></infoForm>
            <Notice v-else-if="type==2"></Notice>
            <Wechat v-else></Wechat>
        </div>
<!--        <el-tabs tab-position="left" class="">-->
<!--            <el-tab-pane>-->
<!--                <span slot="label"><i class="el-icon-date"></i> 基本信息</span>-->
<!--                <div>-->
<!--                    <infoForm></infoForm>-->
<!--                </div>-->
<!--            </el-tab-pane>-->
<!--            <el-tab-pane>-->
<!--                <span slot="label"><i class="el-icon-message"></i> 通知设置</span>-->
<!--                <div>-->
<!--                    <Notice></Notice>-->
<!--                </div>-->
<!--            </el-tab-pane>-->
<!--            <el-tab-pane>-->
<!--                <span slot="label"><i class="el-icon-chat-dot-round"></i> 微信设置</span>-->
<!--                <div>-->
<!--                    <Wechat></Wechat>-->
<!--                </div>-->
<!--            </el-tab-pane>-->
<!--        </el-tabs>-->
    </div>

</template>

<script>
    import infoForm from "./info/infoForm";
    import Notice from "./info/Notice";
    import Wechat from "./info/Wechat";


    export default {
        name: "infoForms",
        components: {
            infoForm,
            Notice,
            Wechat
        },
        data(){
            return{
                type:1,
            }
        },
        methods:{
            changeType(type){
                this.type=type;
            }
        }
    }
</script>

<style lang="less" >
    .Information {
        padding-top: 1rem;

        .el-tabs__nav-scroll{
            background: #FFFFFF;
            min-height: calc(100vh  - 13rem );
        }
    }
    .Information {
        display: flex;

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

                i {
                    margin-right: 0.3rem;
                    font-size: 1.2rem;
                }
            }

            i{
                width: 1.2rem;
                height: 1rem;
                display: inline-block;
            }

            .icon-infoForm{
                background:url("../../assets/imgs/btn-jbxx1.png") no-repeat;
                background-size: contain;
            }

            .icon-notice{
                background:url("../../assets/imgs/btn-tzsz1.png") no-repeat;
                background-size: contain;
            }
            .icon-wechat{
                background:url("../../assets/imgs/btn-wxsz1.png") no-repeat;
                background-size: contain;
            }

            .active {
                background: rgba(242, 244, 250, 1);
                color: #2C64FF;
                border-left: 2px solid #2C64FF;

                i::before {
                    color: #2C64FF;

                }
                .icon-infoForm{
                    background:url("../../assets/imgs/btn-jbxx2.png") no-repeat;
                    background-size: contain;
                }

                .icon-notice{
                    background:url("../../assets/imgs/btn-tzsz2.png") no-repeat;
                    background-size: contain;
                }

                .icon-wechat{
                    background:url("../../assets/imgs/btn-wxsz2.png") no-repeat;
                    background-size: contain;
                }
            }

            .addBox {
                flex-direction: column;
                padding: 0.8rem;

                i::before {
                    color: #2C64FF;
                    font-size: 1.2rem;
                }

                & > div {
                    margin-top: 0.3rem;
                }
            }
        }

        .rightBox {
            width: 100%;
            box-sizing: border-box;
            margin: 0 1rem;
        }
    }
</style>