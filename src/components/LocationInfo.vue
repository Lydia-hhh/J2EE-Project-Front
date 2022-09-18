<template>
  <div :style="conTop">
    <div style="margin: 10px auto;text-align: center;background:rgba(255,255,255,0.6);width: 80%;height: 8%;padding-top: 6px">
      <el-radio-group v-model="radio"  @change="agreeChange">
        <el-radio-button style="color: #2c3e50" border :label="1">寄件人</el-radio-button>
        <el-radio-button style="color:#2c3e50;margin-left: 20px" border :label="2">收件人</el-radio-button>
      </el-radio-group>
      <el-input v-model="search" placeholder="请输入" style="width: 400px;margin-left: 50px"/>
      <el-button color="#2c3e50" style="margin-left: 20px" plain @click="load()">
        <el-icon><search/></el-icon>
        搜索
      </el-button>
    </div>
    <div style="width: 80%;height: 80%;background:rgba(255,255,255,0.6);margin: 20px auto;overflow: auto">
      <div>
        <el-button plain  color="#2c3e50" style="position: relative;left: 80%;margin-top: 20px" @click="add()">添加联系人</el-button>
      </div>
      <div style="margin: 10px auto;text-align: center">
        <el-table border :data="tableData" style="width: 90%;margin: 10px auto">
          <el-table-column label="姓名" prop="contacts" sortable/>
          <!--el-table-column label="类型" prop="status" /-->
          <el-table-column label="联系方式" prop="phoneNum"/>
          <el-table-column label="地址" prop="addr" />
          <!--编辑和删除部分-->
          <el-table-column label="操作" width="100">
            <template #default="scope">
              <el-button style="" size="mini" @click="handleEdit(scope.row)" type="text">编辑</el-button>
              <el-popconfirm style="" title="您确定要删除吗？" @confirm="handleDelete(scope.row.id)">
                <template #reference>
                  <el-button size="mini" type="text">删除</el-button>
                </template>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div style="margin: 10px auto;text-align: center">
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
      <el-dialog title="添加/编辑联系人" v-model="dialogVisible" width="50%">
        <el-form :model="form" label-width="120px">
          <!--el-form-item>
            <el-radio style=" color:#E2231A" v-model="radio" label="1" border>寄件人</el-radio>
            <el-radio style=" color:#E2231A" v-model="radio" label="2" border>收件人</el-radio>
          </el-form-item-->
          <el-form-item label="姓名">
            <el-input v-model="form.contacts" style="width: 75%;display: flex"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="form.phoneNum" style="width: 75%;display: flex"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="form.addr" style="width: 75%;display: flex"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
          <!--取消就是关闭弹窗，让dialogVisible为false-->
    <el-button type="primary" @click="dialogVisible = false;save()">确定</el-button>
  </span>
      </el-dialog>
    </div>
  </div>

</template>

<script>
import request from "../utils/request";
import {Search} from "@element-plus/icons-vue";
export default {
 // inject:['reload'],
  name: "LocationInfo",
  components:{
    Search
  },
  data(){
    return{
      search:'',
      radio:1,
      form:{
        status:1,
        contacts:'',
        phoneNum:'',
        addr:''
      },
      tableData:[

      ],
      dialogVisible:false,
      currentPage:1,
      pageSize:5,
      total:10,
      conTop: {
        backgroundImage:"url("+require("../assets/img/mountains.jpg")+")",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
      }
    }
  },
  created() {
    this.load();
  },
  mounted() {
    //this.load();
    //this.reload();
  },
  methods:{
    load(){
      const that=this;
        request.get('user/addr',{
          params:{
            contacts:this.search,
            pageNum:this.currentPage,
            pageSize:this.pageSize,
            status:this.form.status,
           // search:this.search,
          }
        }).then(res => {
          console.log(res.data);
          that.tableData=res.data.records;
          that.total=res.data.total;
        })
      //that.reload();
      //this.$router.go(0);

    },
    handleEdit(row) {
      this.form=JSON.parse(JSON.stringify(row));//将该行表格的内容进行深拷贝，先将row解析出字符串，再解析成json对象
      this.dialogVisible=true;//再弹出弹窗
    },
    handleDelete(id){
      console.log(id);
      request.delete('user/addr/'+id).then(res => {//为什么这里传参传的是url+id,而不是url,id呢？？？？
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
    add(){
      const that=this;
      that.dialogVisible=true;
      that.form={};
      that.form.status=that.radio;
    },
    save() {
      if(this.form.id){
        request.put("user/addr",this.form).then(res => {
          console.log(res);
          if(res.code==='0'){
            this.$message({
              type:'success',
              message:'更新成功'
            })
          }else{
            this.$message({
              type:'error',
              message:res.msg,
            })
          }
          this.load();//刷新弹窗
          this.dialogVisible=false;//关闭弹窗
        })
      }else{
        request.post('user/addr',this.form).then(res => {
          console.log(res);
          if(res.code==='0'){
            this.$message({
              type:'success',
              message:'新增成功'
            })
          }else{
            this.$message({
              type:'error',
              message:res.msg
            })
          }
          this.load();//刷新弹窗
          this.dialogVisible=false;//关闭弹窗
        })
      }
    },
    handleSizeChange(pageSize) {//改变当前每页的个数
      this.pageSize=pageSize;
      this.load();
    },
    handleCurrentChange(pageNum) {//改变当前页码出发
      this.currentPage4=pageNum;
      this.load();
    },
    agreeChange(val){
      const that=this;
      that.form.status=that.radio;
      that.load();
    }
  },


}
</script>

<style scoped lang="scss">

</style>