<template>
  <div class="about">
        <nav class="navbar navbar-default">
        <div class="navbar-header">
            <img alt="Vue logo" class="logo" src="../assets/logo.png">
            <h1 id="title_name">{{content.topic_id}} Welcome study</h1>
        </div>
    </nav>
    <hr>
    <div class="topic" id="topic_t">Topic：{{content.topic_title}}</div>
    <div id="topic_limit">LimiTtime:{{content.topic_limit_time}} LimitMemory:{{content.topic_limit_memory}}</div>
    <div class="topic_">Topic detail：{{content.topic_details}}</div>
    <div class="topic_">
      Topic requirement
        <div id="topic_requirement">
          input ：{{content.topic_input}}
          <br>
          output：{{content.topic_output}}
        </div>
    </div>
    <div class="topic_">
      Topic example
        <div id="topic_requirement">
          input ：{{content.topic_sample_input}}
          <br>
          output：{{content.topic_sample_output}}
        </div>
    </div>
    <div id="topic_reminder">
      <button class="btn btn-primary" id="btn_reminder" v-on:click="btnclick()">reminder</button>
      &nbsp;
      <router-link to="/codeInput"><button class="btn btn-primary">w r i t e</button></router-link>
    </div>
  </div>
</template>
<style scoped>
@import "../assets/css/base.css";
</style>
<script>
export default {
    data(){
      return{
        content: ""
      };
    },
    mounted(){
      this.axios.get("http://106.54.51.67:13289/api/topic").then(body =>{
        this.content=body.data;
        });
    },
    methods:{
      btnclick(){
        alert("Food shit?");
      },
    }
}
</script>