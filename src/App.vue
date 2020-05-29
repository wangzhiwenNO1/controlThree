<template>
  <div id="app">
    <Myheader></Myheader>

    <div class="viewBox">
      <router-view />
    </div>

    <div class="footer">
      <div class="footerLeft">
        <div class="logoBox"></div>
        <div>Copyright©2019实验室帮 | 沪ICP备1700294号-3</div>
      </div>
      <div>

        <el-breadcrumb separator="|">
          <el-breadcrumb-item>服务协议</el-breadcrumb-item>
          <el-breadcrumb-item>隐私协议</el-breadcrumb-item>
          <el-breadcrumb-item>数据安全</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex";
  import Myheader from "./views/Myheader";

export default {
  name: 'app',
  components: {
    Myheader,
  },
  data(){
    return {
      type:1
    }
  },
  methods:{

  }
}
</script>

<style lang="less">
@import  './assets/css/reset.css';

.TopBox {
  height: 3.44rem;
  background: #005E92;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: #fff;
  box-sizing: border-box;
}
.TopsearchBox{
  display: flex;
  justify-content: center;
  align-items: center;
}
.searchBox {
  width: 20rem;
  height: 2rem;
  background:rgba(0,0,0,0.1);
  border-radius: 1rem;
}
.topRight {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: pink;
    margin-left: 2rem;
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
      margin-right:1rem;
      box-sizing: border-box;
      div {
        font-size: 1rem;
      }

      .gzt{
        background: url("./assets/imgs/btn-gzt1.png") no-repeat;
        background-size: cover;
      }
      .ddgl{
        background: url("./assets/imgs/btn-guanli1.png") no-repeat;
        background-size: contain;
      }
      .sbgl{
        background: url("./assets/imgs/btn-shebei1.png") no-repeat;
        background-size: contain;
      }
      .gysgl{
        background: url("./assets/imgs/btn-shichang1.png") no-repeat;
        background-size: contain;
      }
      .zxsc{
        background: url("./assets/imgs/btn-shichang1.png") no-repeat;
        background-size: contain;
      }
      .sz{
        background: url("./assets/imgs/btn-shezhi1.png") no-repeat;
        background-size: contain;
      }


      &.active {
        border-bottom: 1px solid #005E92;

        .gzt{
          background: url("./assets/imgs/btn-gzt2.png") no-repeat;
          background-size: cover;
        }
        .ddgl{
          background: url("./assets/imgs/btn-guanli2.png") no-repeat;
          background-size: contain;
        }
        .sbgl{
          background: url("./assets/imgs/btn-shebei2.png") no-repeat;
          background-size: contain;
        }
        .gysgl{
          background: url("./assets/imgs/btn-shichang2.png") no-repeat;
          background-size: contain;
        }
        .zxsc{
          background: url("./assets/imgs/btn-shichang2.png") no-repeat;
          background-size: contain;
        }
        .sz{
          background: url("./assets/imgs/btn-shezhi2.png") no-repeat;
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
    font-size:0.75rem;
    color:#999999;

    img{
      display: block;
      width:1.25rem;
      height: 1.25rem;
      background: pink;
      border-radius: 50%;
    }
    div{
      margin-left:0.3rem;
    }
  }

  .icon{
    width: 1.25rem;
    height: 1.25rem;
    background: url("./assets/imgs/Btn-tjtd.png") no-repeat;
    background-size: contain;
  }
}

.viewBox{
  min-height: calc(100vh - 9.6rem);
  background: #F2F4FA;
}

.footer{
  height: 3.65rem;
  background: #E0E4EF;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:0 1rem;
  box-sizing:border-box;
  color: #999999;
  font-size:0.75rem;

  .footerLeft{
    display: flex;
    align-items: center;
  }

  .logoBox{
    width:7.06rem;
    height:1.75rem;
    background: #EEEEEE;
    margin-right: 0.5rem;
  }

  div{
    font-size:0.75rem;
  }
  .el-breadcrumb{
    font-size:0.75rem;
  }
}
.alarm{
  display: flex;
  align-items: center;
  i{
    display: inline-block;
    width:1rem;
    height: 1rem;
    background: url("./assets/imgs/icon-tongzhi.png");
    background-size: contain;
    margin-right: 0.3rem;
  }
}
</style>
