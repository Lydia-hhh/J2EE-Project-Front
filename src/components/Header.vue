<template>
<div style="display: flex;height: 120px">
  <div id="head1" style="width: 70%;display: inline-block">
    <h2 style="color: white">LOGO</h2>
  </div>
  <div style="width: 30%;display: inline-block">
    <el-menu default-active="1" class="el-menu-demo" mode="horizontal" active-text-color="#ffd04b" style="height: 100%" background-color="#323742" text-color="#fff">
      <el-menu-item index="1" style="height: 100%;width: 100px">首页</el-menu-item>
      <el-menu-item index="2" style="height: 100%;width: 100px">关于我们</el-menu-item>
      <el-menu-item index="3" style="height: 100%;width: 100px">联系我们</el-menu-item>
    </el-menu>
  </div>

</div>





</template>

<script>
export default {
  name: "Header",
  data(){
    return{
    }
  },
  methods:{

  },

}

</script>

<style scoped>
#head1{
  background-color: #323742
}

</style>
