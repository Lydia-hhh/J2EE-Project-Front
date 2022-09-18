<template>
  <div :style="conTop" style="height: 100vh;width: 100%;overflow: hidden;margin: 0;padding: 0">
    <div style="background-color: #242730;height: 90px;color: white;text-align: center;line-height: 100px">
      <h1 style="margin: 0 auto">注册界面</h1>
    </div>

<div style="margin: 5% auto;height: 580px;width: 500px;background: rgba(255,255,255,0.7)">
  <h2 style="text-align: center;color: #242730">欢迎注册</h2>
  <el-form ref="form" :model="form" size="normal" :rules="rules" style="width:70%;margin: 30px auto">
    <el-form-item prop="username">
      <!--el-icon><user-filled /></el-icon-->
      <el-input placeholder="请输入用户名"  v-model="form.username" clearable/>
    </el-form-item>

    <el-form-item prop="sex">
      性别：
      <!--el-input placeholder="请输入性别" v-model="form.sex" show-password clearable></el-input-->
      <el-radio v-model="form.sex" label="男">男</el-radio>
      <el-radio v-model="form.sex" label="女">女</el-radio>
    </el-form-item>

    <el-form-item prop="age">
      <el-input placeholder="请输入年龄" v-model="form.age" clearable></el-input>
    </el-form-item>

    <el-form-item prop="password">
      <el-input placeholder="请输入密码" v-model="form.password" show-password clearable></el-input>
    </el-form-item>
    <el-form-item prop="confirm">
      <el-input placeholder="请确认密码" v-model="conPwd" show-password clearable></el-input>
    </el-form-item>
    <el-form-item style="text-align: center">
      <el-radio v-model="form.role" label="user">我是用户</el-radio>
      <el-radio v-model="form.role" label="postman">我是快递员</el-radio>
    </el-form-item>
    <el-form-item style="text-align: center">
      <el-button style="width: 50%;" type="primary" @click="register">注册</el-button>
      <el-button @click="resetForm('form')">Reset</el-button>
    </el-form-item>
  </el-form>
</div>
    </div>
</template>

<script>
import request from "../utils/request";

export default {
  name: "Register",
  data(){
    return{
      form:{
        sex:'男',
        role:'user'
      },
      conPwd:'' ,
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur',},
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur',},
        ],
        conPwd:[
          {required: true, message: '请确认密码', trigger: 'blur',},
        ],
      },
      conTop: {
        backgroundImage:"url("+require("../assets/img/login1.jpg")+")",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        height:'100%',
        width:'100%',
        position:'page',
        top:'0px',
        left:'0px',
        right:'0px',
        bottom:'0px'
      }
    }
  },
  methods:{
    register(){
      console.log(this.form);
      if(this.form.password !== this.conPwd){
        this.$message({
          type:'error',
          message:"两次密码输入不一致！"
        })
        return;
      }
      this.$refs['form'].validate((valid) => {
            if (valid) {
              request.post('register',this.form).then(res => {
                console.log('form:'+this.form)
                if(res.code==='0'){
                  this.$message({
                    type:'success',
                    message:'注册成功'
                  })
                  if(this.form.role==="user"){
                    this.form={};
                    this.$router.push("/login/user")//登录成功之后进行页面的跳转，跳转到主页
                  }else if(this.form.role==="postman"){
                    this.form={};
                    this.$router.push("/login/postman");
                  }else{
                    this.$router.push("/login/admin");
                  }
                }else{
                  this.$message({
                    type:'error',
                    message:res.msg
                  })
                }
              })}}
      );
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  }
}
</script>

<style scoped>

</style>