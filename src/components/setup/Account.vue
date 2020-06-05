<template>
    <div class="account">
        <div class="leftBox">
<!--            <div :class="type==1?'active':''" @click="changeType(1)">-->
<!--                <i class="icon-wholes"></i>-->
<!--                <div>全部人员</div>-->
<!--            </div >-->
            <div :class="type==1?'active':''" @click="changeType(1)">
                <i class="icon-power"></i>
                <div>全部人员</div>
            </div>
            <div class="addBox" :class="type==2?'active':''" @click="changeType(2)">
                <i class="el-icon-circle-plus-outline"></i>
                <div>添加新人员</div>
            </div>
        </div>
        <div class="rightBox">
            <Wholes v-if="type==1"></Wholes>
            <AddPerson v-else-if="type==2"></AddPerson>
            <EditPerson v-else-if="type==3"></EditPerson>
            <Power v-else></Power>
        </div>
    </div>
</template>

<script>
    import Wholes from "./account/Whole";
    import AddPerson from "./account/AddPerson";
    import EditPerson from "./account/EditPerson";
    import Power from "./account/Power";

    export default {
        name: "Account",
        components:{
            Wholes,
            AddPerson,
            EditPerson,
            Power
        },
        data(){
            return{
                type:1
            }
        },
        methods:{
            changeType(type){
                this.type=type;
            }
        }
    }
</script>

<style lang="less" scoped>
    .account {
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
                width: 1rem;
                height: 1rem;
                display: inline-block;
            }

            .icon-wholes{
                background:url("../../assets/imgs/btn-qbry1.png") no-repeat;
                background-size: contain;
            }

            .icon-power{

                background:url("../../assets/imgs/btn-qxgl1.png") no-repeat;
                background-size: contain;
            }



            .active {
                background: rgba(242, 244, 250, 1);
                color: #2C64FF;
                border-left: 2px solid #2C64FF;

                i::before {
                    color: #2C64FF;

                }
                .icon-wholes{
                    background:url("../../assets/imgs/btn-qbry2.png") no-repeat;
                    background-size: contain;
                }

                .icon-power{

                    background:url("../../assets/imgs/btn-qxgl2.png") no-repeat;
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
