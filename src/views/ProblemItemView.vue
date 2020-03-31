<template>
  <div class="problemItem">
    <Nav></Nav>
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
            <span style="font-weight:700;font-size:80%">No.{{content.topic_id}}</span>
            <span style="margin-left:3%;font-size:130%;font-weight:600">{{content.topic_title}}</span>
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
import Nav from "@/components/NavComp.vue";
export default {
  components: {
    Nav
  },
  data() {
    return {
      content: ""
    };
  },
  mounted() {
    // this.axios.get("http://106.54.51.67:13289/api/topic").then(body => {
    //   this.content = body.data;
    // });
    const id = this.$route.query.id;
    if (id == 1000) {
      this.content = {
        'topic_id': 1000,
        'topic_title': "简单的A+B",
        'topic_tag': null,
        'topic_details': "简单的A+B",
        'topic_input': "两个数字",
        'topic_output': "两数之和",
        'topic_sample_input': "1 2",
        'topic_sample_output': "3",
        'topic_reminder': null,
        'topic_limit_time': "2020-03-31T14:19:09.485+0000",
        'topic_limit_memory': "10000kb",
        'topic_difficulty': null,
        'topic_pass_count': 0,
        'topic_onload_count': 0
      }
    } else if (id == 1001) {
      this.content = {
        'topic_id': 1001,
        'topic_title': "不是那么简单的A+B",
        'topic_tag': null,
        'topic_details': "不简单的A+B",
        'topic_input': "两个数字",
        'topic_output': "两数之asdlkgjnelwk",
        'topic_sample_input': "1 2",
        'topic_sample_output': "???????",
        'topic_reminder': null,
        'topic_limit_time': "2020-03-31T14:19:09.485+0000",
        'topic_limit_memory': "10000kb",
        'topic_difficulty': null,
        'topic_pass_count': 0,
        'topic_onload_count': 0
      }
    }
  },
  methods: {
    btnclick() {
      alert("Food shit?");
    },
  }
}
</script>