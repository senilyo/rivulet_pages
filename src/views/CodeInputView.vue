<template>
  <div>
    <el-input type="textarea" :rows="30" placeholder="请输入代码" v-model="code"></el-input>
    <el-button type="danger" @click="codeReset">清空</el-button>
    <el-button type="success" @click="submit">提交</el-button>
  </div>
</template>

<script>
const baseURL = "http://localhost:10032/";
export default {
  data() {
    return {
      code: ""
    }
  },
  methods: {
    codeReset() {
      this.$confirm('此操作将清空代码区域, 是否继续?', '提示', {
        confirmButtonText: '清除',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.code = "";
        this.$message({
          type: 'success',
          message: '清除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    submit() {
      this.$axios.post(baseURL + "api/core/code", {
        "user_id": 1,
        "topic_id": 1,
        "code": this.code
      }).then(res => {
        console.log(res.data);
        this.$router.push({ path: '/codeResult' })
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
</style>