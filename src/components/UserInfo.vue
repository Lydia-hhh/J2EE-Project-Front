<template>
  <div :style="conTop">
    <div style="color: #2c3e50;text-align: center;width: 80%;height: 5%;margin: 0 auto;background: rgba(255,255,255,0.6)">
      <h2>用户信息</h2>
    </div>
    <div style="width: 80%;height: 80%;margin: 0 auto;overflow: hidden;background:rgba(255,255,255,0.6)">
      <div style="text-align: center;margin-top: 20px">
        <el-input v-model="search" placeholder="请输入" style="display: inline-block;width: 500px;margin-left: 50px" />
        <el-button type="primary" @click="load()" style="display: inline-block;margin-left: 10px">
          <el-icon><search /></el-icon>
          搜索
        </el-button>
      </div>
      <div style="text-align: center">
        <el-table :data="tableData" style="width: 90%;margin: 20px auto" border>
          <el-table-column label="用户名" prop="username" sortable/>
          <el-table-column label="密码" prop="password" />
          <el-table-column label="性别" prop="sex"/>
          <el-table-column label="年龄" prop="age" />
        </el-table>
      </div>
      <div style="margin: 10px 0;text-align: center">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentPage"
            v-model:current-page="currentPage"
            :page-sizes="[5, 10, 20]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
      </div>
    </div>

  </div>


</template>

<script>
import {Search} from "@element-plus/icons-vue";
import request from "../utils/request";
export default {
  name: "UserInfo",
  components:{
    Search
  },
  data(){
    return{
      tableData:[

      ],
      form:{},
      search:'',
      currentPage:1,
      pageSize:5,
      total:10,
      currentRow:null,
      conTop: {
        backgroundImage:"url("+require("../assets/img/waterfall.jpg")+")",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
      }
    }
  },
  created() {
    this.load();
  },
  methods:{
    handleClick(row){
      this.form=JSON.parse(JSON.stringify(row));
      this.dialogVisible=true;
    },
    load(){
      request.get('admin/user',{
        params:{
          pageNum:this.currentPage,
          pageSize:this.pageSize,
          search:this.search//将参数传过去
        }
      }).then(res => {//res是从后台返回的数据
        this.tableData=res.data.records;
        this.total=res.data.total;
      })

    },
    handleSizeChange(pageSize) {//改变当前每页的个数
      this.pageSize=pageSize;
      this.load();
    },
    handleCurrentPage(pageNum) {//改变当前页码出发
      this.currentPage=pageNum;
      this.load();
    },
  }

}
</script>

<style scoped>

</style>