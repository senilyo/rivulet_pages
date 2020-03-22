<template>
  <div>
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"> 
        <el-menu-item index="1">题库</el-menu-item>
        <el-submenu index="2">
            <template slot="title" id="userid">{{userid}}</template>
            <el-menu-item index="2-1">个人中心</el-menu-item>
            <el-menu-item index="2-2">我的班级</el-menu-item>
            <el-menu-item index="2-3">个人主页</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" >消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
    <el-card class="box-card" id="topic_card">
        <div slot="header" class="clearfix">
            <span>搜索结果</span>
        </div>
        <div v-for="o in 3" :key="o" class="text item">
            <router-link to="/TopicView">{{ o }}<!-- <div v-for="o in topics" :key="o">{{o.topic_id}}</div> --></router-link>
        </div>
    </el-card>
  </div>
</template>
<style>
#topic_card{
    width: 100%;
}
</style>
<script>
export default {
    data() {
      return {
        userid:'',
        activeIndex: '1',
        activeIndex2: '1',
        topics:[],
      };
    },
    mounted(){
    this.userid=this.$cookies.get("userid");      
    console.log(this.$cookies.get("userid"));
    // this.axios.get("http://localhost:8081/api/core/topics/"+this.userid).then(body =>{
    // this.topics=body.data;
    // console.log(this.topics[0]);
    // });
    },
    methods: {
      handleSelect(key, keyPath) {       
        console.log(key, keyPath);
      },
    },
}
</script>