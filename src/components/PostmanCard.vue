<template>
  <div>
    <div>
      <el-table :data="tableData"  highlight-current-row  @current-change="handleCurrentChange" style="width: 1000px">
        <el-table-column fixed label="用户名" prop="username" sortable/>
        <el-table-column label="密码" prop="password"/>
        <el-table-column label="性别" prop="sex" />
        <el-table-column label="年龄" prop="age" />
        <!--编辑和删除部分-->
        <el-table-column label="操作" width="100">
          <template #default="scope">
            <el-button type="success" plain size="mini" @click="sendMsg">选择</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handlePageChange"
          v-model:current-page="currentPage"
          :page-sizes="[5, 10, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import request from "../utils/request";
import {Check} from "@element-plus/icons-vue";
export default {
  name: "PostmanCard",
  components:{
    Check
  },
  props:{

  },
  data(){
    return{
      currentPage:1,
      pageSize:5,
      total:10,
      tableData:[
        {
          username:'袁成飞',
          password:'123',
          sex:'男',
          age:20,
        },
        {
          username:'黄娇',
          password:'456',
          sex:'女',
          age:21,
        },
        {
          username:'巴菲特',
          password:'789',
          sex:'女',
          age:0,
        },
      ],
      dialogVisible:false,
      form:{},
      radio:1,
      currentRow:null,
    }
  },
  created() {
    this.load();
  },
  methods:{
    load(){
      request.get('admin/postman',{
        params:{
          contacts:this.search,
          pageNum:this.currentPage,
          pageSize:this.pageSize,
          //将参数传过去
        }
      }).then(res => {//res是从后台返回的数据
        this.tableData=res.data.records;
        this.total=res.data.total;
      })
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    confirmRow(row){
      //this.$emit("msgEvent",row);

      return this.currentRow===row;
    },
    sendMsg(event){
      this.$emit("msgEvent",this.currentRow);
    },
    handleSizeChange(pageSize) {//改变当前每页的个数
      this.pageSize=pageSize;
      this.load();
    },
    handlePageChange(pageNum) {//改变当前页码出发
      this.currentPage4=pageNum;
      this.load();
    },


  }
}
</script>

<style scoped>

</style>