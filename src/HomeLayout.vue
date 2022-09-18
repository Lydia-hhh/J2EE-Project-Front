<template>
<div id="body">
  <!--Header id="header"></Header-->
  <div style="display: flex;height: 120px">
    <div id="head1" style="width: 70%;display: inline-block">
      <h1 style="color: white">LOGO</h1>
    </div>
    <div style="width: 33%;display: inline-block">
      <el-menu default-active="1" class="el-menu-demo" mode="horizontal" active-text-color="#ffd04b" style="height: 100%" background-color="#323742" text-color="#fff">
        <el-menu-item index="1" style="height: 100%;width: 100px">首页</el-menu-item>
        <el-menu-item index="2" style="height: 100%;width: 100px" @click="toAbout(1)">关于我们</el-menu-item>
        <el-menu-item index="3" style="height: 100%;width: 100px">联系我们</el-menu-item>
        <router-link to="/register" style="text-decoration: none">
          <el-menu-item index="4" style="height: 100%;width: 100px">注册</el-menu-item>
        </router-link>

      </el-menu>
    </div>

  </div>

  <Carousel></Carousel>
  <div style="height: 50px"></div>
  <Cards id="page1" ref="page1_ref"></Cards>
  <div style="height: 50px"></div>
  <el-divider></el-divider>
  <div style="height: 50px"></div>
 <Tabs></Tabs><!--这一部分的tabs可以换成手风琴效果-->
  <div style="height: 100px"></div>
  <el-divider></el-divider>
  <div style="height: 50px"></div>
  <Contact></Contact>
<Tail></Tail>
</div>

</template>

<script>
import Header from "./components/Header";
import Carousel from "@/components/Carousel";
import Cards from "@/components/Cards";
import Show from "@/components/Show";
import Tabs from "@/components/Tabs";
import Tail from "@/components/Tail";
import Contact from "@/components/Contact";
export default {
  name: "layout",
  components: {Contact, Tail, Show, Carousel, Header,Cards,Tabs},
  methods:{
    toAbout(){
      // 获取元素在页面中的位置
      console.log(this.$refs.page1_ref.getBoundingClientRect());
      // document
      //   .getElementById("agentTitle")
      //   .scrollIntoView({ block: "start", behavior: "smooth" });
      // 跳转到指定位置并且平滑滚动
      this.$el
          .querySelector("#page1")
          .scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }
}
</script>

<style scoped>
#header{

}
#body{
  /*background-color: #383e4a;*/
  /*background-image: -webkit-linear-gradient(160deg, #383e4a 0%, #242730 100%);*/
  /*background-image: -moz-linear-gradient(160deg, #383e4a 0%, #242730 100%);*/
  /*background-image: -o-linear-gradient(160deg, #383e4a 0%, #242730 100%);*/
  /*background-image: linear-gradient(160deg, #383e4a 0%, #242730 100%);*/

}
#head1{
  background-color: #323742
}
</style>