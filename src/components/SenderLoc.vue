<template>
  <div>
    <div>
      <el-input v-model="search" placeholder="请输入" style="width: 400px;margin-left: 50px"/>
      <el-button type="primary" @click="load()" style="margin-left: 20px">
        <el-icon><search/></el-icon>
        搜索
      </el-button>
    </div>
    <div>
      <el-table :data="tableData"  highlight-current-row  @current-change="handleCurrentChange" style="width: 1000px">
        <el-table-column fixed label="姓名" prop="contacts" sortable/>
        <el-table-column label="联系方式" prop="phoneNum"/>
        <el-table-column label="地址" prop="addr" />
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
import {Check,Search} from "@element-plus/icons-vue";
export default {
  name: "SenderLoc",
  components:{
    Check,
    Search,
  },
  props:{

  },
  data(){
    return{
      currentPage:1,
      pageSize:5,
      total:10,
      tableData:[

      ],
      dialogVisible:false,
      form:{},
      radio:1,
      currentRow:null,
      search:'',
    }
  },
  created() {
    this.load();
  },
  methods:{
   load(){
     request.get('user/addr',{
       params:{
         contacts:this.search,
         pageNum:this.currentPage,
         pageSize:this.pageSize,
         status:1,
         //将参数传过去
       }
     }).then(res => {//res是从后台返回的数据
       this.tableData=res.data.records;
       this.total=res.data.total;
     })
   },
    handleCurrentChange(val) {
      this.currentRow = val;
      console.log(this.currentRow);
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