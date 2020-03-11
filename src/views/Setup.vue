<template>
    <div>
        <div class="tabBoxs">
            <div :class="type==1?'active':''" @click="jump(1)">权限设置</div>
            <div :class="type==2?'active':''" @click="jump(2)">人员管理</div>
        </div>
        <div class="divView">
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
    import Organization from "../components/setup/Organization";
    import Information from "../components/setup/Information";
    import Power from "../components/setup/account/Power";

    export default {
        components: {
            Organization,
            Information,
            Power

        },
        data() {
            return {
                activeName: 'second',
                type:1
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            jump(type){
                this.type=type;
                let url="";
                switch (type) {

                    case 1:
                        url="/setup/authority";
                        break;
                    case 2:
                        url="/setup/account";
                        break;
                    default:
                        break;
                }

                this.$router.push({
                    path: url,
                })
            }
        }
    };
</script>

<style lang="less" scoped>
    .tabBoxs{
        display: flex;
        padding:0 1rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: 1px solid #eeeeee;

        &>div{
            margin:0.5rem 1rem 0 0;
            background: #eeeeee;

            padding:0.3rem 0.5rem ;
            border-top-left-radius: 0.3rem;
            border-top-right-radius:0.3rem ;
            color:#666666;
            font-size:0.77rem;
        }

        .active{
            background:rgba(44,100,255,1);
            color: #ffffff;
        }

    }

</style>