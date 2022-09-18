<template>
  <div class="block" style="display: flex">
    <el-carousel indicator-position="outside" style="width: 100%;" height="700px">
      <el-carousel-item v-for="item in carouseData" :key="item">
        <el-image
            style="width: 100%; height: 100%"
            :src="item.url"
        ></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data(){
    return{
      carouseData:[
        {url:require("../assets/img/l1.jpg")},
        {url:require("../assets/img/l2.jpg")},
         {url:require("../assets/img/l3.jpg")},
      ]
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>