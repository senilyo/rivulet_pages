<template>
<div>
    <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"    
    >    
    <el-menu-item index="1" style="margin-left:91%" @click="card1View()">登录</el-menu-item>
    <el-menu-item index="2" @click="card2View()">注册</el-menu-item>
    </el-menu>
    <div id="card1" class="card" v-show="card1show">
        <el-card class="box-card">
            <div slot="header" class="clearfix" style="margin-left:43%">
                <span>登录</span>
            </div>
        <span>账号：</span><el-input v-model="userid"  placeholder="请输入账号" style="width:300px"></el-input>
        <br><br>
        <span>密码：</span><el-input v-model="password" type="password" placeholder="请输入密码" style="width:300px"></el-input>
        <br><br>
            <el-row style="margin-left:30%">
                <router-link to="/topicSearch"><el-button type="primary" @click="saveid()">确认</el-button></router-link>&nbsp;
                <el-button type="info">找回</el-button>
            </el-row>
        </el-card>
    </div>
    <div id="card2" class="card" v-show="card2show">
        <el-card class="box-card" >
            <div slot="header" class="clearfix" style="margin-left:43%">
                <span>注册</span>
            </div>
        <span>账号：</span><el-input v-model="createinput"  placeholder="请输入账号" style="width:300px"></el-input>
        <br><br>
        <span>密码：</span><el-input v-model="createpassword" type="password" placeholder="请输入密码" style="width:300px"></el-input>
        <br><br>
        <span>邮箱：</span><el-input v-model="email" placeholder="请输入邮箱" style="width:300px"></el-input>
        <br><br>
            <el-row style="margin-left:30%">
                <el-button type="primary">确认</el-button>
                <el-button type="success">取消</el-button>
            </el-row>
        </el-card>
    </div>
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

  .card{
      padding-left: 35%;
      height: 666px;
  }
</style>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        card1show:true,
        card2show:false,

        userid: '',
        password:'',
        createinput:'',
        createpassword:'',
        email:'',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      onSubmit() {
        console.log('submit!');
      },
      card1View(){
          this.card1show=true;
          this.card2show=false;
      },
      card2View(){
          this.card1show=false;
          this.card2show=true;
      },
      saveid(){
      this.$cookies.set('userid',this.userid);
      },
    }

  }
</script>