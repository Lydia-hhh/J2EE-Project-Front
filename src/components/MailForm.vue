<template>
<div :style="conTop">
    <div>
      <div style="color:#2c3e50;margin:0 auto;text-align: center;width: 80%;height: 10%;background:rgba(255,255,255,0.6)">
        <h2>寄快递</h2>
      </div>
      <div style="width: 80%;height:90%;background:rgba(255,255,255,0.6);margin: 0  auto;overflow: hidden">
        <div style="margin-top: 20px;padding-top: 10px">
          <div style="display: inline-block;margin-left: 40px">
            <table style="display: inline-block;">
              <tbody>
              <tr>
                <el-space :size="40">
                  <td>寄件人</td>
                  <td>
                    <el-button plain @click="showSendPlace" size="mini">
                      <el-icon><notebook /></el-icon>
                      地址簿
                    </el-button>
                  </td>
                  <td> <el-button size="mini" plain @click="saveSendPlace"><el-icon><check/></el-icon> 保存到地址簿</el-button></td>
                </el-space>

              </tr>
              </tbody>
            </table>
          </div>
          <div style="display: inline-block;margin-left: 70px">
            <table style="display: inline-block;">
              <tbody>
              <tr>
                <el-space :size="40">
                  <td>收件人</td>
                  <td>
                    <el-button plain @click="showRecPlace" size="mini">
                      <el-icon><notebook /></el-icon>
                      地址簿
                    </el-button>
                  </td>
                  <td> <el-button size="mini" plain @click="saveRecPlace"><el-icon><check/></el-icon> 保存到地址簿</el-button></td>
                </el-space>

              </tr>
              </tbody>
            </table>
          </div>

        </div>
        <div style="margin-top: 30px">
          <el-form
              ref="form"
              :model="form"
              class="demo-ruleForm"
              label-width="100px"
              style="width: 1000px;margin: 0 auto;"
              :rules="rules"
          >
            <div style="margin-left: 25px;display: inline-block">
              <el-form-item label="寄件人姓名" prop="senderName" style="width: 450px">
                <el-input v-model="form.senderName" disabled></el-input>
              </el-form-item>
              <el-form-item label="寄件人电话" prop="senderPhone">
                <el-input v-model="form.senderPhone"></el-input>
              </el-form-item>
              <el-form-item label="寄件人地址" prop="sendPlace">
                <el-input v-model="form.sendPlace"></el-input>
              </el-form-item>
            </div>
            <div style="margin-left: 30px;display: inline-block;border-left:1px #d3dce6 solid">

              <el-form-item label="收件人姓名" prop="receiverName" style="width: 450px">
                <el-input v-model="form.receiverName"></el-input>
              </el-form-item>
              <el-form-item label="收件人电话" prop="receiverPhone">
                <el-input v-model="form.receiverPhone"></el-input>
              </el-form-item>
              <el-form-item label="收件人地址" prop="receivePlace">
                <el-input v-model="form.receivePlace"></el-input>
              </el-form-item>

            </div>
            <el-divider></el-divider>

            <div style="margin-left: 150px">
              <h3>物品信息</h3>
              <el-form-item label="物品类型" prop="packageType">
                <el-select v-model="form.packageType" clearable>
                  <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="包裹重量" prop="packageWeight">
                <el-input v-model="form.packageWeight" placeholder="" style="width: 200px">
                  <template #append>KG</template>
                </el-input>
              </el-form-item>
            </div>
            <el-divider></el-divider>
            <div style="margin-left: 350px">
              <el-form-item>
                <el-button type="primary" @click="submitForm">提交订单</el-button>
                <el-button @click="resetForm">重置</el-button>
              </el-form-item>
            </div>
          </el-form>
        </div>
      </div>



    <!--弹窗-->
    <div>
      <el-dialog v-model="dialogVisible" title="请选择联系人" width="70%">
        <SenderLoc v-if="this.radio===1" @msgEvent="chooseSendPlace"></SenderLoc>
        <RecLoc v-if="this.radio===2" @msgEvent="chooseRecPlace"></RecLoc>
        <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false;">确认</el-button>
      </span>
        </template>
      </el-dialog>
    </div>
  </div>

</div>

</template>

<script>
import request from "../utils/request";
import {Notebook,Check} from "@element-plus/icons-vue";
import LocationInfo from "@/components/LocationInfo";
import SenderLoc from "@/components/SenderLoc";
import RecLoc from "@/components/RecLoc";

export default {
 name: "MailForm",
 components:{
   RecLoc,
   SenderLoc,
   LocationInfo,

   Notebook,
   Check


 },
 data() {
   return {
     dialogVisible: false,
     radio: null,
     form: {},
     rules: {
       senderName: [{required: true, message: '请输入姓名', trigger: 'blur',}],
       senderPhone: [{required: true, message: '请输入正确的电话号', trigger: 'blur',},],
       sendPlace: [{required: true, message: '请输入地址', trigger: 'blur',},],
       receiverName: [{required: true, message: '请输入姓名', trigger: 'blur',},],
       receiverPhone: [{required: true, message: '请输入正确的电话号', trigger: 'blur',},],
       receivePlace: [{required: true, message: '请输入地址', trigger: 'blur',},],
       packageWeight: [{required: true, message: '请输入包裹重量', trigger: 'blur',},],
       packageType: [{required: true, message: '请选择物品类型', trigger: 'blur',},],
     },
     showAreaPicker: false,
     value: '',
     options: [{value: '文件', label: '文件',},
       {value: '酒水', label: '酒水',},
       {value: '食品', label: '食品',},
       {value: '药品', label: '药品',},
       {value: '数码产品', label: '数码产品',},
       {value: '衣物', label: '衣物',},
       {value: '日用品', label: '日用品',},
       {value: '家电', label: '家电',},
       {value: '配件', label: '配件',},
       {value: '特产', label: '特产',},
       {value: '其他', label: '其他',},],
     conTop: {
       backgroundImage: "url(" + require("../assets/img/mountains.jpg") + ")",
       backgroundRepeat: "no-repeat",
       backgroundSize: "cover",
     },
    // personData:{}
   }
 },
  created() {
   this.load();
  },
  methods:{
   load(){
     request.get('user/info').then(res => {//res是从后台返回的数据
       //this.personData=res.data;
       this.form.senderName=res.data.username;
       console.log(res)
     })
   },
   showSendPlace(){
     this.radio=1;
     this.dialogVisible=true;
   },
  showRecPlace(){
     this.radio=2;
     this.dialogVisible=true;
  },
   submitForm() {
     this.$refs['form'].validate((valid) => {
       if (valid) {
         request.post('user/send',this.form).then(res => {
           if(res.code==='0'){
             this.$message({
               type:'success',
               message:'提交成功'
             })
           }else{
             this.$message({
               type:'error',
               message:res.msg
             })
           }
         })
       } else {
         console.log('error submit!!')
         return false
       }
     })
   },
   resetForm() {
     this.$refs['form'].resetFields()
   },
   chooseSendPlace(value){
     console.log(value);
     if(value!==null){
       this.form.senderName=value.contacts;
       this.form.senderPhone=value.phoneNum;
       this.form.sendPlace=value.addr;
     }
   },
   chooseRecPlace(value){
     console.log(value);
     if(value!==null){
       this.form.receiverName=value.contacts;
       this.form.receiverPhone=value.phoneNum;
       this.form.receivePlace=value.addr;
     }
   },
   saveSendPlace(){
     request.post('user/addr',{
          status:1,
          contacts:this.form.senderName,
          phoneNum:this.form.senderPhone,
          addr:this.form.sendPlace,
     }).then(res => {
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
     })
   },
   saveRecPlace(){
     request.post('user/addr',{
       status:2,
       contacts:this.form.receiverName,
       phoneNum:this.form.receiverPhone,
       addr:this.form.receivePlace,
     }).then(res => {
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
     })
   },
 }


}
</script>

<style scoped>

</style>