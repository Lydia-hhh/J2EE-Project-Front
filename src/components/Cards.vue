<template>
  <div style="color: #323742;text-align: center;margin-bottom: 50px;padding-top: 0;">
    <h1 style="width: 100px;border-left: #ffd04b 5px solid;margin: 0 auto">登录</h1>
  </div>

  <div>
    <el-row  :gutter="8">
      <el-col :span="4"></el-col>
      <el-col :span="6">

      <router-link to="/login/user" style="text-decoration: none">
        <el-card class="card" :body-style="{ padding: '0px' }" shadow="hover">

          <!--el-image style="width: 100%;height: 100%" :src="urls.user"></el-image-->
          <div style="display: block;box-sizing: border-box">
            <img :src="require('../assets/img/user.jpg')" class="image" alt="" />
          </div>
          <template #header>
            <div class="card-header" style="text-align: center">
              <h2 style="margin: 0;padding: 0">我是用户</h2>
            </div>
          </template>
        </el-card>
      </router-link>
      </el-col>


      <el-col :span="6">
        <router-link to="/login/postman" style="text-decoration: none">
          <el-card class="card" :body-style="{ padding: '0px' }" shadow="hover">
            <!--el-image style="width: 100%;height: 100%" :src="urls.user"></el-image-->
            <div style="display: block;box-sizing: border-box">
              <img :src="require('../assets/img/postman.jpg')" class="image" alt="" />
            </div>
            <template #header>
              <div class="card-header" style="text-align: center">
                <h2 style="margin: 0;padding: 0">我是快递员</h2>
              </div>
            </template>
          </el-card>
        </router-link>
      </el-col>
      <el-col :span="6">

        <router-link to="/login/admin" style="text-decoration: none">
          <el-card class="card" :body-style="{ padding: '0px' }" shadow="hover">
            <div style="display: block;box-sizing: border-box">
              <img :src="require('../assets/img/admin.jpg')" class="image" alt="" />
            </div>
            <template #header>
              <div class="card-header" style="text-align: center">
                <h2 style="margin: 0;padding: 0">我是管理员</h2>
              </div>
            </template>
          </el-card>
        </router-link>

      </el-col>
    </el-row>
  </div>





</template>

<script>
export default {
  name: "Cards",
  data(){
    const currentDate=new Date();
    return{
      currentDate,
      urls:[
        {userImg:require("../assets/img/user.jpg")},
      ]

    }
  }
}
</script>

<style scoped>



.image {
  width: 100%;
  height: 100%;
  display: block;
}
.card{
  width: 250px;
  height: 300px;
}
</style>