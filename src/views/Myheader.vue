<template>
    <div>
        <el-row class="TopBox">
            <el-col :span="8">
                <div class="grid-content bg-purple topLeft">
                    <div class="icon"></div>
                    <div>上海达摩科技有限公司 | 令狐冲</div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light TopsearchBox">
                    <div class="searchBox">
                        <el-input
                                class="searchInput"
                                size="mini"
                                placeholder="搜索：检测项目、实验室或标准等"
                                suffix-icon="el-icon-search">
                        </el-input>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple topRight">
                    <div class="alarmBox" @click="changeNotice">
                        <div class="alarm">
                            <i class="icon"></i>
                            <span>(5)</span>
                        </div>
                        <div class="noteBox" v-if="notice">
                            <div class="triangle triangleNote"></div>
                            <div class="title">
                                <i class="el-icon-bell"></i>
                                <p>
                                    通知记录
                                    <span>(5)</span>
                                </p>
                                <i class="el-icon-close"></i>
                            </div>
                            <ul>
                                <li v-for="item in 3" :key="item">
                                    <el-avatar :size="30"></el-avatar>
                                    <div>
                                        <div class="nameBox">
                                            <span>您有新的订单需要报价{{item}}</span>
                                            <i class="el-icon-more"></i>
                                            <div class="editBox" v-if="item==1">
                                                <div class="triangle triangleEdit"></div>
                                                <div class="editDel" @click="deletenotification">
                                                    <i class="el-icon-delete"></i>删除改通知
                                                </div>
                                                <div class="editClose">
                                                    <i class="icon"></i>关闭此类通知
                                                </div>
                                            </div>
                                        </div>
                                        <div class="time">2019年12月12日 10:11</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="avatar" @click="changeSetup"></div>
                    <div class="triangle" v-if="setup"></div>
                    <ul v-if="setup">
                        <li>令狐冲</li>
                        <li>
                            <i class="el-icon-share"></i>
                            <span>组织信息</span>
                        </li>
                        <li>
                            <i class="el-icon-delete"></i>
                            <span>个人信息</span>
                        </li>
                        <li>
                            <i class="el-icon-s-tools"></i>
                            <span>账号设置</span>
                        </li>
                        <li>
                            <i class="el-icon-download"></i>
                            <span>获取帮助</span>
                        </li>
                        <li>
                            <i class="el-icon-download"></i>
                            <span>投诉建议</span>
                        </li>
                        <li @click="logout">
                            <i class="el-icon-download"></i>
                            <span>退出</span>
                        </li>
                    </ul>
                </div>
            </el-col>
        </el-row>
        <div class="tabBox">
            <div class="tabLeft">
                <div class="tabItem" :class="type==1?'active':''" @click="jump(1)">
                    <div class="icon gzt"></div>
                    <div>工作台</div>
                </div>
                <div class="tabItem" :class="type==2?'active':''" @click="jump(2)">
                    <div class="icon zxsc"></div>
                    <div>需求方管理</div>
                </div>
                <div class="tabItem" :class="type==3?'active':''" @click="jump(3)">
                    <div class="icon gysgl"></div>
                    <div>供应商管理</div>
                </div>

                <div class="tabItem" :class="type==4?'active':''" @click="jump(4)">
                    <div class="icon sz"></div>
                    <div>设置</div>
                </div>
            </div>

            <!-- right -->
            <div class="tabRight">
                <div>团队成员</div>
                <div>
                    <img src="#" alt/>
                </div>
                <div>{{TeamMembers.length}}+</div>
                <div class="icon"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import { mapMutations } from 'vuex';
    export default {
        name: "Myheader",
        computed: {
            ...mapState(['hasLogin', 'TeamMembers'])
        },
        data(){
            return{
                notice:"",
                setup:false,
                type:1
            }
        },
        mounted() {
            console.log(this.TeamMembers);
        },
        methods:{
            ...mapMutations(['logOut']),
            deletenotification(id){
                let that=this;
                this.Axios.get("/lab2lab/v1/system/deletenotification",{
                    id:id,
                }).then(function (res) {
                    console.log(res);
                    if(res.code==200){

                    }
                })
            },
            jump(type) {
                this.type = type;
                let url = "";
                switch (type) {
                    case 1:
                        url="/workbench";
                        break;
                    case 2:
                        url="/request";
                        break;
                    case 3:
                        url="/supply";
                        break;
                    case 4:
                        url="/setup/authority";
                        break;

                    default:
                        break;
                }

                this.$router.push({
                    path: url
                });
            },
            //需求方登出
            logout(){
                let that=this;
                this.Axios.get("/lab2lab/v1/system/logout",{
                    userName:this.userName,
                    password:this.password,
                }).then(function (res) {
                    console.log(res);
                    if(res.code==200){
                        that.logOut();
                        that.setup=false;
                        that.$router.push({
                            path: "/login",
                        })
                    }
                })
            },
            changeNotice() {
                this.notice = !this.notice;
            },
            changeSetup() {
                this.setup = !this.setup;
            }
        }
    }
</script>

<style lang="less" scoped>
    .TopBox {
        height: 3.44rem;
        background: #005E92;
        display: flex;
        align-items: center;
        padding: 0 1rem;
        color: #fff;
        box-sizing: border-box;
    }

    .TopsearchBox {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .searchBox {
        width: 20rem;
        height: 2rem;

        border-radius: 1rem;

        .searchInput {
            width: 100%;

            input {
                background: rgba(25, 80, 233, 1);
                border: none;
                border-radius: 2rem;
            }
        }
    }

    .topRight {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: relative;

        .triangle {
            width: 0;
            height: 0;
            border-left: 0.5rem solid transparent;
            border-right: 0.5rem solid transparent;
            border-bottom: 0.8rem solid #f3f4f9;
            position: absolute;
            top: 1.8rem;
            right: 0.5rem;
            z-index: 9;
        }

        & > ul {
            position: absolute;
            width: 7.81rem;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0rem 0rem 1rem 0rem rgba(0, 0, 0, 0.37);
            border-radius: 0rem;
            top: 2.5rem;
            right: 0;
            color: #333333;
            z-index: 8;

            & > li {
                width: 100%;
                height: 2.5rem;
                box-sizing: border-box;
                border-radius: 0rem;
                line-height: 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                border-bottom: 1px solid #f2f4fa;

                i {
                    display: block;
                    margin-right: 0.3rem;
                }
            }

            & > li:hover {
                background: rgba(229, 229, 229, 1);
            }

            & > li:first-child {
                background: #f3f4f9;
            }
        }

        .avatar {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            background: pink;
            margin-left: 2rem;
        }

        .alarmBox {
            position: relative;

            .noteBox {
                position: absolute;
                width: 25.63rem;
                background: rgba(255, 255, 255, 1);
                box-shadow: 0rem 0rem 1rem 0rem rgba(0, 0, 0, 0.37);
                border-radius: 0rem;
                top: 2rem;
                left: -23rem;
                z-index: 9;
                color: #333333;

                .triangleNote {
                    top: -0.8rem;
                    right: 1.5rem;
                }

                .title {
                    background: #f3f4f9;
                    height: 3.5rem;
                    font-size: 1.5rem;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    p {
                        font-size: 1.5rem;
                        margin-left: 0.5rem;
                    }

                    span {
                        font-size: 0.88rem;
                        color: rgba(51, 51, 51, 1);
                    }

                    .el-icon-close {
                        position: absolute;
                        top: 1.2rem;
                        right: 1rem;
                        color: #a4a8a8;
                        font-size: 1rem;
                    }
                }

                & > ul {
                    padding: 1rem;

                    li {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 23.13rem;
                        height: 4.06rem;
                        border-radius: 0.3rem;
                        padding: 0 1rem;
                        box-sizing: border-box;
                        margin: 0.5rem 0;
                        border: 1px solid rgba(221, 224, 233, 1);

                        &:first-child {
                            background: rgba(215, 215, 215, 1);
                        }

                        & > div {
                            flex: 1;
                        }

                        .el-avatar {
                            flex-shrink: 0;
                            margin-right: 0.8rem;
                        }

                        .el-icon-more {
                            color: #999999;
                            font-size: 0.88rem;
                        }

                        .nameBox {
                            display: flex;
                            justify-content: space-between;
                            position: relative;
                            line-height: 1.5rem;
                        }

                        .editBox {
                            position: absolute;
                            top: 1.3rem;
                            right: -0.3rem;
                            background: rgba(255, 255, 255, 1);
                            box-shadow: 0rem 0rem 1rem 0rem rgba(0, 0, 0, 0.37);
                            border-radius: 0.2rem;
                            z-index: 9;

                            .triangleEdit {
                                top: -0.8rem;
                                right: 0.3rem;
                                border-bottom: 0.8rem solid #ffffff;
                            }

                            .editDel,
                            .editClose {
                                height: 2rem;
                                line-height: 2rem;
                                padding: 0 1rem;

                                i {
                                    margin-right: 0.3rem;
                                }

                                .icon {
                                    display: inline-block;
                                    width: 0.875rem;
                                    height: 0.875rem;
                                    background: pink;
                                }

                                &:hover {
                                    color: #2c64ff;
                                    background: #d7d7d7;
                                }
                            }

                            .editDel {
                                border-bottom: 1px solid #eeeeee;
                            }
                        }

                        .time {
                            color: #999999;
                            font-size: 0.75rem;
                        }
                    }
                }
            }
        }

        .alarm {
            display: flex;
            align-items: center;

            i {
                display: inline-block;
                width: 1.5rem;
                height: 1.5rem;
                background: url("../assets/imgs/icon-tongzhi.png");
                background-size: contain;
                margin-right: 0.3rem;
            }
        }

        .icon {
            width: 1.25rem;
            height: 1.25rem;
        }
    }

    .tabBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 2.5rem;
        background: rgba(255, 255, 255, 1);
        padding: 0 1rem;

        .tabLeft {
            display: flex;

            .tabItem {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 7.5rem;
                height: 2.5rem;
                // border-bottom: 1px solid #005E92;
                line-height: 2.5rem;
                margin-right: 1rem;
                box-sizing: border-box;

                div {
                    font-size: 1rem;
                }

                .gzt {
                    background: url("../assets/imgs/btn-gzt1.png") no-repeat;
                    background-size: cover;
                }

                .ddgl {
                    background: url("../assets/imgs/btn-guanli1.png") no-repeat;
                    background-size: contain;
                }

                .sbgl {
                    background: url("../assets/imgs/btn-shebei1.png") no-repeat;
                    background-size: contain;
                }

                .gysgl {
                    background: url("../assets/imgs/btn-gys1.png") no-repeat;
                    background-size: contain;
                }

                .zxsc {
                    background: url("../assets/imgs/btn-shichang1.png") no-repeat;
                    background-size: contain;
                }

                .sz {
                    background: url("../assets/imgs/btn-shezhi1.png") no-repeat;
                    background-size: contain;
                }

                &.active {
                    border-bottom: 1px solid #005E92;

                    .gzt {
                        background: url("../assets/imgs/btn-gzt2.png") no-repeat;
                        background-size: cover;
                    }

                    .ddgl {
                        background: url("../assets/imgs/btn-guanli2.png") no-repeat;
                        background-size: contain;
                    }

                    .sbgl {
                        background: url("../assets/imgs/btn-shebei2.png") no-repeat;
                        background-size: contain;
                    }

                    .gysgl {
                        background: url("../assets/imgs/btn-gys2.png") no-repeat;
                        background-size: contain;
                    }

                    .zxsc {
                        background: url("../assets/imgs/btn-shichang2.png") no-repeat;
                        background-size: contain;
                    }

                    .sz {
                        background: url("../assets/imgs/btn-shezhi2.png") no-repeat;
                        background-size: contain;
                    }
                }
            }

            .icon {
                margin-right: 0.5rem;
            }
        }

        .tabRight {
            display: flex;
            align-items: center;
            font-size: 0.75rem;
            color: #999999;

            img {
                display: block;
                width: 1.25rem;
                height: 1.25rem;
                background: pink;
                border-radius: 50%;
            }

            div {
                margin-left: 0.3rem;
            }

            .icon {
                width: 1.25rem;
                height: 1.25rem;
                background: url("../assets/imgs/Btn-tjtd.png") no-repeat;
                background-size: contain;
            }
        }

        .icon {
            width: 1.25rem;
            height: 1.25rem;
        }
    }
</style>
