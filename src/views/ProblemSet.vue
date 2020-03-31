<template>
  <div id="problemSet">
    <Nav></Nav>
    <el-row :gutter="15">
      <el-col :span="12" :offset="3">
        <el-card>
          <div slot="header">
            <span>题目列表</span>
          </div>
          <el-table
            :data="problemSetData"
            @current-change="toProblemItemPage"
            style="width: 100%;font-size:80%"
          >
            <el-table-column prop="solved" label="Solved" width="70"></el-table-column>
            <el-table-column prop="id" label="题号" width="100"></el-table-column>
            <el-table-column prop="title" label="题目"></el-table-column>
            <el-table-column prop="ratio" label="Ratio (AC/All)" width="200"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header">
            <span>搜索</span>
          </div>
          <el-row :gutter="5">
            <el-col :span="18">
              <el-input placeholder="输入标题,题号" v-model="searchStr" clearable></el-input>
            </el-col>
            <el-col :span="4">
              <el-button plain @click="search">搜索</el-button>
            </el-col>
          </el-row>
          <el-tag
            v-for="searchTag in searchTagList"
            :key="searchTag"
            closable
            :disable-transitions="false"
            type="info"
            style="margin-right:2%"
            @close="handleSearchTagClose(searchTag)"
          >{{searchTag}}</el-tag>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
/**
 * TODO:
 * 等待后期接口
 * problemSetData暂时为测试数据
 */
import Nav from "@/components/NavComp.vue";
export default {
  components: { Nav },
  data() {
    return {
      problemSetData: [{
        solved: " ",
        id: 1000,
        title: "简单的A+B",
        ratio: "37.05% (81986/221314)"
      }, {
        solved: "√",
        id: 1001,
        title: "不简单的A+B",
        ratio: "1.36% (2/147)"
      }],
      searchStr: "",
      //搜索栏维护此数组，之后用此处关键词进行查找
      searchTagList: [],
    };
  },

  methods: {
    toProblemItemPage(problem) {
      this.$router.push({ path: "/problemItem", query: { id: problem.id } });
    },
    search() {
      this.searchTagList.push(this.searchStr);
      this.searchStr = "";

    },
    handleSearchTagClose(searchTag) {
      this.searchTagList.splice(this.searchTagList.indexOf(searchTag), 1);
    }

  },
  mounted() {
    this.problemSetData = [{
      solved: " ",
      id: 1000,
      title: "简单的A+B",
      ratio: "37.05% (81986/221314)"
    }, {
      solved: "√",
      id: 1001,
      title: "不简单的A+B",
      ratio: "1.36% (2/147)"
    }];
  },
};
</script>

<style>
</style>

