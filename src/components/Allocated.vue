<template>
  <div :style="conTop">
    <div style="color: #2c3e50;text-align: center;width: 95%;height: 5%;margin: 0 auto;background: rgba(255,255,255,0.6)">
      <h2>已分配订单</h2>
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
        <el-table :data="tableData" style="width: 95%;margin: 20px auto" border>
          <el-table-column label="发货时间" prop="sendTime" sortable/>
          <el-table-column label="发货人" prop="senderName" />
          <el-table-column label="发货地" prop="sendPlace"/>
          <el-table-column label="收货人" prop="receiverName" />
          <el-table-column label="收货地" prop="receivePlace"/>
<!--          <el-table-column label="订单编号" prop="orderNum"></el-table-column>-->
          <el-table-column label="配送人" prop="postmanName" />
          <el-table-column label="状态" prop="packageState"/>
          <el-table-column label="操作">
            <template #default="scope">
              <el-button type="text" size="small" @click="handleClick(scope.row)">详情</el-button>
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
      <el-dialog v-model="dialogVisible" title="寄件详情" width="30%">
        <el-row>
          <el-col> 发货人:{{form.senderName}}</el-col>
          <el-col> 发货地:{{form.sendPlace}}</el-col>
          <el-col> 发货时间:{{form.sendTime}}</el-col>
          <el-col> 收货人:{{form.receiverName}}</el-col>
          <el-col> 收货地:{{form.receivePlace}}</el-col>
          <el-col> 收货时间:{{form.receiveTime}}</el-col>
          <el-col>订单编号：{{form.orderNum}}</el-col>
          <el-col> 包裹重量:{{form.packageWeight}}</el-col>
          <el-col> 价格:{{form.packagePrice}}</el-col>
          <el-col> 配送人:{{form.postmanName}}</el-col>
          <el-col> 状态:{{form.packageSate}}</el-col>
        </el-row>
        <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确认</el-button>
      </span>
        </template>
      </el-dialog>
    </div>
  </div>


</template>

<script>
import {Search} from "@element-plus/icons-vue";
import request from "../utils/request";
import {leaveTime} from "@/utils/tool";
export default {
  name: "Allocated",
  components:{
    Search
  },
  data(){
    return{
      tableData:[

      ],
      dialogVisible: false,
      form:{},
      search:'',
      currentPage:1,
      pageSize:5,
      total:10,
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
      request.get('admin/orderalloc',{
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
    handleDelete(id){
      console.log(id);
      request.delete('admin/orderalloc/'+id).then(res => {//为什么这里传参传的是url+id,而不是url,id呢？？？？
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