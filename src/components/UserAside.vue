<template>
  <div style="width: 250px">
    <el-menu :default-active="index" class="el-menu-vertical-demo" style="height: calc(100vh - 90px);"
          background-color="#383e4a"   text-color="#fff">


        <router-link to="send" style="text-decoration: none;">
          <el-menu-item index="1">
          <el-icon><box /></el-icon>
          <span>我要寄件</span>
          </el-menu-item>
        </router-link>


      <el-sub-menu index="2">
        <template #title>
          <el-icon><document/></el-icon>
          <span>订单管理</span>
        </template>
        <router-link to="sendSearch" style="text-decoration: none;">
          <el-menu-item index="2-1">
            <el-icon><takeaway-box/></el-icon>
            寄件查询
          </el-menu-item>
        </router-link>
        <router-link to="recSearch" style="text-decoration: none;">
          <el-menu-item index="2-2">
            <el-icon><takeaway-box /></el-icon>
            收件查询
          </el-menu-item>
        </router-link>

      </el-sub-menu>


        <router-link to="locationInfo" style="text-decoration: none">
          <el-menu-item index="3">
          <el-icon><location-information /></el-icon>
          <span style="">地址管理</span>
          </el-menu-item>
        </router-link>


    </el-menu>
  </div>


</template>

<script>
import {Box,LocationInformation,TakeawayBox} from "@element-plus/icons-vue";
import {Document} from "@element-plus/icons-vue";
export default {
  name: "UserAside",
  components:{
    Box,
    Document,
    LocationInformation,
    TakeawayBox
  }
}
</script>

<style scoped>

</style>