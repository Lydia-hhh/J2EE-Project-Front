<template>
  <div style="color: #323742;text-align: center;margin-bottom: 50px;padding-top: 0;">
    <h1 style="width: 170px;border-left: #ffd04b 5px solid;margin: 0 auto">联系我们</h1>
  </div>
<div id="bg" :style="conTop" style="padding-top:30px">
  <div style="width: 80%;height: 80%;background:rgba(255,255,255,0.6);margin:0 auto;overflow: hidden;padding-top: 30px">
    <el-row  :gutter="8">
      <!--el-col :span="4"></el-col-->
      <el-col :span="6" style="margin-left: 160px">


        <el-card class="card" :body-style="{ padding: '0px' }" shadow="hover">

          <!--el-image style="width: 100%;height: 100%" :src="urls.user"></el-image-->
          <div style="display: block;box-sizing: border-box;text-align: center;margin-top: 20px">
            <el-icon size="50"><phone-filled /></el-icon>
            <h4>8888-8888</h4>
          </div>
          <template #header>
            <div class="card-header" style="text-align: center">
              <span>联系电话</span>
            </div>
          </template>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="card" :body-style="{ padding: '0px' }" shadow="hover">
          <!--el-image style="width: 100%;height: 100%" :src="urls.user"></el-image-->
          <div style="display: block;box-sizing: border-box;text-align: center;margin-top: 20px">
            <el-icon size="50"><location-filled/></el-icon>
            <h4>华东师范大学</h4>
          </div>
          <template #header>
            <div class="card-header" style="text-align: center">
              <span>联系地址</span>
            </div>
          </template>
        </el-card>
      </el-col>
      <el-col :span="6">

        <router-link to="/login/admin" style="text-decoration: none">
          <el-card class="card" :body-style="{ padding: '0px' }" shadow="hover">
            <div style="display: block;box-sizing: border-box;text-align: center;margin-top: 20px">
              <el-icon size="50"><timer /></el-icon>
              <h4>7:00至22:00</h4>
            </div>
            <template #header>
              <div class="card-header" style="text-align: center">
                <span>工作时间</span>
              </div>
            </template>
          </el-card>
        </router-link>

      </el-col>
    </el-row>
  </div>
</div>
</template>

<script>
import {PhoneFilled,LocationFilled,Timer} from "@element-plus/icons-vue";

export default {
  name: "contact",
  components:{
    PhoneFilled,LocationFilled,Timer
  },
  data(){
    return{
      conTop: {
        backgroundImage:"url("+require("../assets/img/contact.jpg")+")",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
      }
    }
  }
}
</script>

<style scoped>
#bg{
  width: 100%;
  height: 400px;
}
.card{
  width: 220px;
  height: 250px;
}
</style>