<template>
  <div style="width: 250px">
    <el-menu :default-active="index" class="el-menu-vertical-demo" style="height: calc(100vh - 90px);"
    background-color="#383e4a" text-color="#fff">

      <router-link to="/post/postUnfinished" style="text-decoration: none">
      <el-menu-item index="1">
        <el-icon><box /></el-icon>
          <span>未完成订单</span>
      </el-menu-item>
      </router-link>

      <router-link to="/post/postFinished" style="text-decoration: none">
      <el-menu-item index="2">
        <el-icon><location-information/></el-icon>
          <span>已完成订单</span>
      </el-menu-item>
      </router-link>

    </el-menu>
  </div>
</template>

<script>
import {Box,LocationInformation} from "@element-plus/icons-vue";
import {Document} from "@element-plus/icons-vue";
export default {
  name: "PostAside",
  components:{
    Box,
    Document,
    LocationInformation
  }
}
</script>

<style scoped>

</style>