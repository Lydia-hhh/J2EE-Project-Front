<template>
  <div :style="conTop">
    <div style="color: #2c3e50;text-align: center;width: 95%;height: 5%;margin: 0 auto;background: rgba(255,255,255,0.6)">
      <h2>未分配订单</h2>
    </div>
    <div style="width: 95%;height: 80%;margin: 0 auto;overflow: hidden;background:rgba(255,255,255,0.6)">
      <div style="text-align: center;margin-top: 20px">
        <el-input v-model="search" placeholder="请输入" style="display: inline-block;width: 500px;margin-left: 50px" />
        <el-button type="primary" @click="load()" style="display: inline-block;margin-left: 10px">
          <el-icon><search /></el-icon>
          搜索
        </el-button>
      </div>
      <div style="text-align: center">
        <el-table :data="tableData"  highlight-current-row style="width: 95%;margin: 20px auto" border @current-change="handleCurrentRow">
          <el-table-column label="发货时间" prop="sendTime" sortable/>
          <el-table-column label="发货人" prop="senderName" />
          <el-table-column label="发货地" prop="sendPlace"/>
          <el-table-column label="收货人" prop="receiverName" />
          <el-table-column label="收货地" prop="receivePlace"/>
<!--          <el-table-column label="订单编号" prop="orderNum"></el-table-column>-->
          <el-table-column label="配送人" prop="postmanName"></el-table-column>
          <el-table-column label="状态" prop="packageState"/>
          <el-table-column label="操作">
            <template #default="scope">
              <el-button v-if="scope.row.packageState==='已下单'" type="danger" size="mini" @click="handleClick(scope.row)">分配</el-button>
              <el-button v-if="scope.row.packageState==='已分配'" type="success" circle size="mini"><el-icon><check/></el-icon></el-button>
              <el-popconfirm style="" title="您确定要删除吗？" @confirm="handleDelete(scope.row.id)">
                <template #reference>
                  <el-button size="mini" type="text">删除</el-button>
                </template>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div style="margin: 10px 0;text-align: center">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            v-model:current-page="currentPage"
            :page-sizes="[5, 10, 20]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
      </div>
    </div>



    <!--对话框-->
    <div>
      <el-dialog v-model="dialogVisible" title="快递员信息" width="70%">
        <PostmanCard  @msgEvent="chooseMan"></PostmanCard>
        <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false;save()">确认</el-button>
      </span>
        </template>
      </el-dialog>
    </div>
  </div>


</template>

<script>
import {Search} from "@element-plus/icons-vue";
import request from "../utils/request";
import PostmanInfo from "@/components/PostmanInfo";
import PostmanCard from "@/components/PostmanCard";
import {Check} from "@element-plus/icons-vue";
import {leaveTime} from "@/utils/tool";
export default {
  name: "Unallocated",
  components:{
    PostmanCard,
    PostmanInfo,
    Search,
    Check
  },
  data(){
    return{
      tableData:[

      ],
      allDate:[],
      dialogVisible: false,
      form:{},
      search:'',
      currentPage:1,
      pageSize:5,
      total:10,
      currentRow:null,
      row:'',
      conTop: {
        backgroundImage:"url("+require("../assets/img/waterfall.jpg")+")",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
      },
      newRow:{},
      newStr:'',
      stringObj:''
    }
  },
  created() {
    this.load();
  },
  methods:{
    handleClick(row){
     // this.form=JSON.parse(JSON.stringify(row));
      this.row=row;
      console.log(this.row);
      this.dialogVisible=true;
    },
    load(){
      request.get('admin/orderunalloc',{
        params:{
          pageNum:this.currentPage,
          pageSize:this.pageSize,
          search:this.search//将参数传过去
        }
      }).then(res => {//res是从后台返回的数据
        this.tableData=res.data.records;
        for (let i=0;i < this.tableData.length;i++){
          this.tableData[i].sendTime=leaveTime(this.tableData[i].sendTime);
        }
        this.total=res.data.total;
      })

    },
    handleSizeChange(pageSize) {//改变当前每页的个数
      this.pageSize=pageSize;
      this.load();
    },
    handleCurrentChange(pageNum) {//改变当前页码出发
      this.currentPage=pageNum;
      this.load();
    },
    chooseMan(value){
      if(value!==null){
        this.newRow.postmanName=value.username;
        this.newRow.id=this.row.id;
      // console.log(this.row.id)
      //  console.log( this.row.orderNum)
      //  console.log( this.row.packagePrice)
      //  console.log( this.row.packageState
      //   this.row.packageType
      //   this.row.packageWeight
      //   this.row.postmanName
      //   this.row.receivePlace
      //   this.row.receiveTime
      //   this.row.receiverName
      //   this.row.receiverPhone
      //   this.row.sendPlace
      //   this.row.sendTime
      //   this.row.senderName
      //   this.row.senderPhone
      }
    },
    handleCurrentRow(val){
      this.currentRow=val;
    },
    save(){
      request.put('admin/orderunalloc',this.newRow).then(res => {
        if(res.code==='0'){
          this.$message({
            type:'success',
            message:'订单已分配！'
          })
        }else {
          this.$message({
            type:'error',
            message:res.msg,
          })
        }
        this.load();
      })
    },
    handleDelete(id){
      console.log(id);
      request.delete('admin/orderunalloc/'+id).then(res => {//为什么这里传参传的是url+id,而不是url,id呢？？？？
        if(res.code==='0'){
          this.$message({
            type:'success',
            message:'删除成功'
          })
        }else{
          this.$message({
            type:'error',
            message:res.msg
          })
        }
        this.load();//重新加载表格的数据，删除之后
      });
    },
  }

}
</script>

<style scoped>

</style>