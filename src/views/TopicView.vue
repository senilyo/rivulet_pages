<template>
  <div class="topic">
    <nav class="navbar navbar-default">
      <div class="navbar-header"></div>
    </nav>

    <el-row class="tac">
      <el-col :span="4">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-flag"></i>
              <span>欢迎</span>
            </template>
            <span>用户id:{{content.topic_id}}，欢迎来到rivulet OJ系统</span>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-picture-outline-round"></i>
              <span>看看这个</span>
            </template>

            <img alt="Vue logo" class="logo" src="../assets/logo.png" />
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight:700">{{content.topic_id}}:</span>
            <span>{{content.topic_title}}</span>
            <span style="float: right;font-size:10%;color:#C0C0C0">
              <pre>
                时间限制:{{content.topic_limit_time}}
                内存限制:{{content.topic_limit_memory}}
              </pre>
            </span>
          </div>
          <div>
            <h3>题目描述</h3>
            <div>{{content.topic_details}}</div>
          </div>
          <div>
            <h3>输入</h3>
            <div>{{content.topic_input}}</div>
          </div>
          <div>
            <h3>输出</h3>
            <div>{{content.topic_output}}</div>
          </div>
          <div>
            <h3>样例输入</h3>
            <div>{{content.topic_sample_input}}</div>
          </div>
          <div>
            <h3>样例输出</h3>
            <div>{{content.topic_sample_output}}</div>
          </div>
          <div style="float:right;margin-bottom:5%">
            <router-link to="/codeInput">
              <el-button plain>写代码!</el-button>
            </router-link>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  data() {
    return {
      content: ""
    };
  },
  mounted() {
    this.axios.get("http://106.54.51.67:13289/api/topic").then(body => {
      this.content = body.data;
    });
    this.$cookies.set("user_id","111222333");
  },
  methods: {
    btnclick() {
      alert("Food shit?");
    },
  }
}
</script>