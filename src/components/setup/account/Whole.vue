<template>
    <div>
        <el-row>
            <el-col :span="12">
                <div class="grid-content ">
                    <div class="avatarBox">
                        <el-avatar :size="70"></el-avatar>
                        <div class="name">张三丰</div>
                        <div class="subTitle">实验室经理</div>
                    </div>
                    <div class="infoBox">
                        <div class="editBox">
                            <div>编辑</div>
                        </div>
                        <div><span>联系邮箱：</span>123@tianji.com</div>
                        <div><span>角色：</span>超级管理员</div>
                        <div class="btnRows">
                            <i class="el-icon-message"></i>
                            <i class="el-icon-chat-dot-square"></i>
                        </div>
                    </div>

                </div>
            </el-col>
            <el-col :span="12">

            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <div class="grid-content ">
                    <div class="avatarBox">
                        <el-avatar :size="70"></el-avatar>
                        <div class="name">张三丰</div>
                        <div class="subTitle">实验室经理</div>
                    </div>
                    <div class="infoBox">
                        <div class="editBox">
                            <div>编辑</div>
                            <div class="del">删除</div>
                        </div>
                        <div><span>联系邮箱：</span>123@tianji.com</div>
                        <div><span>角色：</span>超级管理员</div>
                        <div class="btnRows">
                            <i class="el-icon-message"></i>
                            <i class="el-icon-chat-dot-square"></i>
                        </div>
                    </div>

                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content ">
                    <div class="avatarBox">
                        <el-avatar :size="70"></el-avatar>
                        <div class="name">张三丰</div>
                        <div class="subTitle">实验室经理</div>
                    </div>
                    <div class="infoBox">
                        <div class="editBox">
                            <div>编辑</div>
                            <div class="del">删除</div>
                        </div>
                        <div><span>联系邮箱：</span>123@tianji.com</div>
                        <div><span>角色：</span>超级管理员</div>
                        <div class="btnRows">
                            <i class="el-icon-message"></i>
                            <i class="el-icon-chat-dot-square"></i>
                        </div>
                    </div>

                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Whole"
    }
</script>

<style lang="less" scoped>
    .rightBox {
        width: 100%;
        box-sizing: border-box;
        margin: 0 1rem;


        .grid-content {
            display: flex;
            background: #FFFFFF;
            margin: 0.3rem;
            box-sizing: border-box;
            padding: 1rem;
            position: relative;

            i{
                font-size:1.2rem;
                margin-left:1rem;
                color:#2C64FF;
            }

            span{
                color: #999999;
            }
        }

        .contentOne {
            height: 100%;
        }


        .avatarBox {
            width: 8rem;
            height: 8rem;
            background: rgba(242, 244, 250, 1);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            margin-right: 1rem;
        }

        .name {
            margin: 0.1rem 0;
        }

        .subTitle {
            color: #999999;
            font-size: 0.75rem;
        }

        .infoBox {
            display: flex;
            flex-direction: column;
            width: 100%;

            .btnRows{
                position: absolute;
                bottom:1rem;
                right: 1rem;
            }

            .editBox{
                color:#2C64FF;
                &>div{
                    margin:0 0.3rem;

                }
                .del{
                    color:#F12C0B;
                }
            }
        }

        .editBox {
            display: flex;
            align-self: flex-end;
        }
    }
</style>