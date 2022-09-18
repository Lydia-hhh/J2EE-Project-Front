<template>
  <div style="background-color: #242730;">
    <div style="">
      <div style="display: inline-block;padding: 0 10px">
        <h2 style="color: white">快递员界面</h2>
      </div>
      <div style="display: inline-block;position: absolute;right: 10px;padding: 10px;margin: 10px 0">
        <el-dropdown>
          <el-button color="" size="mini" plain>
            {{form.username}}<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="$router.push('postPerson')">个人信息</el-dropdown-item>
              <el-dropdown-item @click="openDialog">修改密码</el-dropdown-item>
              <el-dropdown-item @click="logout">注销</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div>
      <div>
        <el-dialog
            v-model="dialogVisible"
            title="修改密码"
            width="50%"
        >
          <el-form
              ref="ruleForm"
              :rules="rules"
              label-width="120px"
              class="demo-ruleForm"
              style="width: 80%;"
          >
            <el-form-item label="原密码" prop="oldPwd">
              <el-input v-model="pwdForm.oldPwd" placeholder="请输入原密码" />
            </el-form-item>
            <el-form-item label="新密码" prop="newPwd">
              <el-input v-model="pwdForm.newPwd" placeholder="请输入新密码" />
            </el-form-item>
            <el-form-item label="确认新密码" prop="conPwd">
              <el-input v-model="pwdForm.conPwd" placeholder="请确认新密码" />
            </el-form-item>
          </el-form>
          <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false;save()">确认</el-button>
      </span>
          </template>
        </el-dialog>
      </div>

    </div>
  </div>
</template>

<script>
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
  Box
} from '@element-plus/icons-vue'
import request from "@/utils/request";

export default {
  name: "PostHeader",
  components: {
    Location,
    Document,
    Setting,
    IconMenu,
    Box
  },
  data(){
    return{
      form:{},
      pwdForm:{},
      dialogVisible:false,
      newPwd:'',
      oldPwd:'',
      conPwd:'',
      rules: {
        oldPwd: [
          {
            required: true,
            message: '请输入原密码',
            trigger: 'blur',
          }],
        newPwd: [
          {
            required: true,
            message: '请输入新密码',
            trigger: 'blur',
          }],
        conPwd: [
          {
            required: true,
            message: '请确认新密码',
            trigger: 'blur',
          }],
      }
    }
  },
  created() {
    this.load();
  },
  methods:{
    logout(){
      this.$router.push('/');
      sessionStorage.removeItem('logisticAdmin');
    },
    load(){
      request.get('/info').then(res => {//res是从后台返回的数据
        this.form=res.data;
        console.log(res)
      })
    },
    openDialog(){
      this.dialogVisible=true;
    },
    save(){
      this.$refs['pwdForm'].validate((valid) => {
        if(valid){


            request.put("/pwd", this.pwdForm).then(res => {
              console.log(res)
              if (res.code === '0') {
                this.$message({
                  type: "success",
                  message: "更新成功"
                })
                this.load();
                //sessionStorage.setItem("user", JSON.stringify(this.form)) //by Q
                // 触发Layout更新用户信息  //by Q
                //this.$emit("userInfo") //by Q
              } else {
                this.$message({
                  type: "error",
                  message: res.msg
                })
              }
            })





        }else{
          console.log('error submit!')
          return false;
        }
      })

    }
  }


}
</script>

<style scoped>

</style>