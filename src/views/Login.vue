<template>


  <div :style="conTop"  style="height: 100vh;width: 100%;overflow: hidden;margin: 0;padding: 0">
    <div style="background-color: #242730;height: 90px;color: white;text-align: center;line-height: 100px">
     <h1 style="margin: 0 auto">登录界面</h1>
   </div>

    <div style="margin: 10% auto;height: 400px;width:500px;background:rgba(255,255,255,0.6);">
      <!--div style="color: #409EFF;text-align: center"-->
      <h2 style="text-align: center;color:  #242730">欢迎登录</h2>
      <el-form ref="form" :model="form" size="normal" :rules="rules" style="width:70%;margin: 30px auto">
        <el-form-item prop="username" >
          <!--el-icon><user-filled /></el-icon-->
          <el-input placeholder="请输入账号" v-model="form.username" clearable>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="请输入密码" v-model="form.password" show-password clearable></el-input>
        </el-form-item>
        <el-form-item>
          <div style="display: flex">
            <el-input v-model="form.validCode" style="width: 50%;" placeholder="请输入验证码"></el-input>
            <ValidCode @input="createValidCode"/>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 70%;"   @click="login">登录</el-button>
          <el-button @click="resetForm('form')">Reset</el-button>
        </el-form-item>
      </el-form>

      <!--/div-->
      <!--div style="margin:30px auto"-->
      <!--原form-->
      <!--/div-->

    </div>
  </div>


</template>

<script>
import ValidCode from "@/components/ValidCode";
import request from "@/utils/request"
export default {
  name: "Login",
  components:{
    ValidCode,

  },
  data(){
    return{
      form:{},
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur',},
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur',},
        ]
      },
      validCode:'',
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
    createValidCode(data){
      this.validCode=data;
    },
    login(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if(!this.form.validCode){
            this.$message.error('请填写验证码');
          }
          if(this.form.validCode.toLowerCase()!==this.validCode.toLowerCase()){
            this.$message.error('验证码错误');
            return ;
          }
          request.post('/login',this.form).then(res => {
            if(res.code==='0'){
              sessionStorage.setItem('logisticAdmin',res.data)  //ycf
              this.$message({
                type:'success',
                message:'登录成功'
              })
              //sessionStorage.setItem('user',JSON.stringify(res.data));
              //this.$router.push("/")//登录成功之后进行页面的跳转，跳转到主页
              if(this.$route.params.id==="user"){
                this.$router.push("/user");
              }else if(this.$route.params.id==="postman"){
                this.$router.push("/post");
              }else if(this.$route.params.id==="admin"){
                this.$router.push("/admin");
              }
            }else{
              this.$message({
                type:'error',
                message:res.msg,
              })
            }
          })

        } else {
          console.log('error submit!!');
          return false;
        }
      })


    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  }


}
</script>

<style scoped>

</style>