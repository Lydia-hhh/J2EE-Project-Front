<template>
<div style="margin-top: 0">
  <router-view></router-view><!--Hj-->
</div>


</template>
<script>
import Layout from "./HomeLayout";
import Carousel from "@/components/Carousel";
import UserHeader from "@/components/UserHeader";
import UserLayout from "@/UserLayout";
import MailForm from "@/components/MailForm";
import Test from "@/components/Test";
export default {
  name:'App',
  components:{
    Test,
    MailForm,
    UserLayout,
    UserHeader,
    Carousel,
    Layout

  },
// provide(){
//     return{
//       reload:this.reload,
//     }
// },
//   data(){
//     return{
//       isRouterAlive:true,
//     }
//   },
//   methods:{
//     reload(){
//       this.isRouterAlive=false;
//       this.$nextTick(function (){
//         this.isRouterAlive=true;
//       })
//     }

  //}

}
</script>
<style lang="scss">
</style>
