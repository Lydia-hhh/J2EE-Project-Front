<template>
  <div style="width: 250px">
    <el-menu :default-active="index" class="el-menu-vertical-demo" style="height: calc(100vh - 90px)"
    background-color="#383e4a" text-color="#fff">

      <router-link to="/admin/userInfo" style="text-decoration: none">
      <el-menu-item index="1">
        <el-icon><box /></el-icon>
          <span>用户信息</span>
      </el-menu-item>
      </router-link>

      <router-link to="/admin/PostmanInfo" style="text-decoration: none">
      <el-menu-item index="2">
        <el-icon><box /></el-icon>
          <span>快递员信息</span>
      </el-menu-item>
      </router-link>

      <el-sub-menu index="3">
        <template #title>
          <el-icon><document/></el-icon>
          <span>订单管理</span>
        </template>
        <router-link to="/admin/unallocated" style="text-decoration: none">
          <el-menu-item index="3-1">
            <el-icon><takeaway-box/></el-icon>
            未分配订单
          </el-menu-item>
        </router-link>
        <router-link to="/admin/allocated" style="text-decoration: none">
          <el-menu-item index="3-2">
            <el-icon><takeaway-box/></el-icon>
            已分配订单
          </el-menu-item>
        </router-link>
      </el-sub-menu>
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