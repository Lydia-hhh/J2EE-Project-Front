<template>
<div style="text-align: center;color:#d3dce6;margin: 0 auto">
<table style="text-align: center;margin: 0 auto;">
  <tr style="height: 90px;">
    <td>智慧企业</td>
    <td>投资者关系</td>
    <td>隐私</td>
    <td>法律披露</td>
  </tr>
  <tr style="height: 90px">
    <td>招纳贤士</td>
    <td>新闻</td>
    <td>活动</td>
    <td>客户案例</td>
  </tr>
  <tr style="height: 90px">
    <td>商标</td>
    <td>网站地图</td>
    <td>服务通用条款</td>
    <td>电子报</td>
  </tr>
  <tr style="height: 90px">
    <td>中小型企业</td>
    <td>开发人员</td>
    <td>文本视图</td>
    <td>cookie说明</td>
  </tr>

</table>
</div>
</template>

<script>
import Tabs from "@/components/Tabs";
export default {
  name: "Tail",
  components: {Tabs}
}
</script>

<style scoped>
div{
  height: 400px;
  background-color: #323742;
}
td{
  width: 300px;
}
</style>