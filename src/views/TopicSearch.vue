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
        <span>卡片名称</span>
    </div>
    <div v-for="o in 3" :key="o" class="text item">
        {{ o }}<!-- <div v-for="o in topics" :key="o">{{o.topic_id}}</div> -->
    </div>
    </el-card>

    <el-card class="box-card" id="search_card">
    <div slot="header" class="clearfix">
        <span>搜索</span>
        <router-link to="/searchReturn"><el-button style="float: right; padding: 3px 0" type="text" >确认</el-button></router-link>
    </div>
    <el-input v-model="input" placeholder="请输入题目" @change="getvalue()"></el-input>
    
    </el-card>
</div>
</template>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
  #topic_card{
      width:70%;
      float: left;
  }
  #search_card{
      width:29.5%;
      float: right;
  }
</style>
<script>
  export default {
    data() {
      return {
        input: '',
        userid:'',
        activeIndex: '1',
        activeIndex2: '1',
        numb:'',
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
      getvalue(){
        this.numb=this.input;
      },
    },
  };
</script>


// cd 项目前端\rivulet_pages  npm run serve