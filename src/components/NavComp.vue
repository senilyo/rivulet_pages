<template>
  <div id="nav">
    <el-menu :default-active="this.$route.path" mode="horizontal" @select="handleSelect">
      <el-menu-item index="index" style="margin-left:10%">rivulet</el-menu-item>
      <el-menu-item index="/" style="margin-left:5%">主页</el-menu-item>
      <el-menu-item index="/problemSet">题库</el-menu-item>
      <el-menu-item index="/login" style="margin-left:60%">登录</el-menu-item>
      <el-menu-item index="/register">注册</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    handleSelect(key) {
      if (key == "index") {
        key = "/";
      }
      if (key != this.$route.path) {
        this.$router.push(key);
      }
    }
  },

}
</script>

<style>
</style>