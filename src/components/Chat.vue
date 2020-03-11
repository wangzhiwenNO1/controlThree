
<template>
  <div class="Chat">
    <div class="chatTop">
<!--      <el-steps :active="active" finish-status="success" align-center>-->
<!--        <el-step title="创建"></el-step>-->
<!--        <el-step title="询价"></el-step>-->
<!--        <el-step title="执行"></el-step>-->
<!--        <el-step title="结束"></el-step>-->
<!--      </el-steps>-->
<!--      <div class="btnRow">-->
<!--        <div class="btn">录入变更</div>-->
<!--      </div>-->
      <div class="chatBox">
        <div class="title">
          <div>消息记录</div>
          <div class="icon"></div>
        </div>
        <ul class="chatHistory">
          <li>
            <div class="time">2019年9月16日 15:37</div>
            <div class="chatItem">
              <div class="avatar"></div>
              <div class="chatText">王经理，贵司的付款已收到，谢谢！</div>
            </div>
          </li>
          <li>
            <div class="time">2019年9月16日 15:37</div>
            <div class="chatItem">
              <div class="avatar"></div>
              <div class="chatText">王经理，贵司的付款已收到，谢谢！</div>
            </div>
          </li>
        </ul>
        <div class="subTitle">发送消息</div>
        <div>
          <el-input type="textarea" v-model="desc" placeholder="请输入您要发送的消息"></el-input>
        </div>
        <div class="btnRow">
          <div class="btn sendBtn">发送</div>
          <div class="btn">放弃</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Chat",
  components: {},
  data() {
    return {
      active: 4,
      desc:""
    };
  }
};
</script>
<style lang="less">
.chatTop {
  padding: 1rem;
  background: #ffffff;
  border-radius: 0.3rem;

  .el-step__title {
    font-size: 0.75rem;
    line-height: 20px;
  }
  .el-step__head.is-success {
    color: #2c64ff;
    border-color: #2c64ff;
  }
  .el-step__title.is-success {
    color: black;
  }
}

.btnRow {
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  .btn {
    width: 6.88rem;
    height: 1.88rem;
    background: linear-gradient(
      90deg,
      rgba(255, 105, 52, 1),
      rgba(255, 52, 105, 1)
    );
    border-radius: 1rem;
    color: #ffffff;
    text-align: center;
    line-height: 1.88rem;
  }

  .sendBtn {
    background: linear-gradient(
      90deg,
      #005E92,
      rgba(52, 171, 255, 1)
    );
    margin-right: 1rem;
  }
}

.chatHistory {
  margin-bottom: 0.5rem;
  height: 22rem;
  border-bottom: 1px solid #eeeeee;

  .chatItem {
    display: flex;
    align-items: center;
  }
  .time {
    text-align: center;
    font-size: 0.75rem;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 1.88rem;
  }
  .chatText {
    width: 100%;
    height: 2.5rem;
    background: rgba(242, 244, 250, 1);
    border-radius: 0.3rem;
    line-height: 2.5rem;
    padding: 0 1rem;
    box-sizing: border-box;
  }

  .avatar {
    width: 2rem;
    height: 2rem;
    background: pink;
    border-radius: 50%;
    margin-right: 1rem;
    flex-shrink: 0;
  }
}
.subTitle {
  padding-bottom: 0.5rem;
}

.el-textarea {
  height: 4.88rem;
  background: rgba(242, 244, 250, 1);

  textarea {
    height: 100%;
    background: rgba(242, 244, 250, 1);
  }
}
</style>
