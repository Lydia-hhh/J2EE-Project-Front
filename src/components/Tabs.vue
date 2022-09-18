<template>
  <div style="color: #323742;text-align: center;margin-bottom: 50px;padding-top: 0;">
    <h1 style="width: 170px;border-left: #ffd04b 5px solid;margin: 0 auto">关于我们</h1>
  </div>

  <div style="height: 400px">
  <el-tabs id="tabs" v-model="activeName" @tab-click="handleClick" stretch>
    <el-tab-pane class="tab" label="企业介绍" name="intro" >
      <div style="display:inline-block;overflow: hidden;box-sizing: border-box;margin:10px 10px 10px 20px;">
        <img :src="require('../assets/img/intro.jpg')" class="image" alt="" />
      </div>
      <div style="display: inline-block;overflow: auto;width: 300px;height: 400px;margin-left: 30px;color: #d3dce6">
        <p>
          广州交通集团物流有限公司，简称“广交物流”。
          成立于1985年，前身是“广州市国营集装箱运输公司”。
          位于广州市黄埔区，毗邻黄埔港，公司旁边就是广深沿江高速，交通便利。
          公司经营近20万平方米的仓储和堆场，300多台各类型运输车辆和装卸机械，营运网点覆盖全国30多个大中城市。
          为客户提供集物流策划，仓储，包装，分拨，装卸，运输，报关，多式联运等供应链一体化的综合物流服务。
        </p>
      </div>
      <div style="display:inline-block;overflow: hidden;box-sizing: border-box;margin:10px 10px 10px 30px">
        <img :src="require('../assets/img/intro1.jpg')" class="image" alt="" />
      </div>
      <div style="display: inline-block;overflow: auto;width: 300px;height: 400px;margin-left: 30px;color:#d3dce6">
        <p>
          广州交通集团物流有限公司，简称“广交物流”。
          成立于1985年，前身是“广州市国营集装箱运输公司”。
          位于广州市黄埔区，毗邻黄埔港，公司旁边就是广深沿江高速，交通便利。
          公司经营近20万平方米的仓储和堆场，300多台各类型运输车辆和装卸机械，营运网点覆盖全国30多个大中城市。
          为客户提供集物流策划，仓储，包装，分拨，装卸，运输，报关，多式联运等供应链一体化的综合物流服务。
        </p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="企业理念" name="idea" class="tab">
      <div style="display:inline-block;overflow: hidden;box-sizing: border-box;margin:10px 10px 10px 30px;">
        <img :src="require('../assets/img/idea1.jpg')" class="image" alt="" />
      </div>
      <div style="display: inline-block;overflow: auto;width: 300px;height: 400px;margin-left: 30px;color:#d3dce6">
        <p>
          广州交通集团物流有限公司，简称“广交物流”。
          成立于1985年，前身是“广州市国营集装箱运输公司”。
          位于广州市黄埔区，毗邻黄埔港，公司旁边就是广深沿江高速，交通便利。
          公司经营近20万平方米的仓储和堆场，300多台各类型运输车辆和装卸机械，营运网点覆盖全国30多个大中城市。
          为客户提供集物流策划，仓储，包装，分拨，装卸，运输，报关，多式联运等供应链一体化的综合物流服务。
        </p>
      </div>
      <div style="display:inline-block;overflow: hidden;box-sizing: border-box;margin:10px 10px 10px 30px">
        <img :src="require('../assets/img/idea2.jpg')" class="image" alt="" />
      </div>
      <div style="display: inline-block;overflow: auto;width: 300px;height: 400px;margin-left: 30px;color:#d3dce6">
        <p>
          广州交通集团物流有限公司，简称“广交物流”。
          成立于1985年，前身是“广州市国营集装箱运输公司”。
          位于广州市黄埔区，毗邻黄埔港，公司旁边就是广深沿江高速，交通便利。
          公司经营近20万平方米的仓储和堆场，300多台各类型运输车辆和装卸机械，营运网点覆盖全国30多个大中城市。
          为客户提供集物流策划，仓储，包装，分拨，装卸，运输，报关，多式联运等供应链一体化的综合物流服务。
        </p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="行业研究" name="study" class="tab">
      <div style="display:inline-block;overflow: hidden;box-sizing: border-box;margin:10px 10px 10px 30px;">
        <img :src="require('../assets/img/study1.jpg')" class="image" alt="" />
      </div>
      <div style="display: inline-block;overflow: auto;width: 300px;height: 400px;margin-left: 30px;color:#d3dce6">
        <p>
          广州交通集团物流有限公司，简称“广交物流”。
          成立于1985年，前身是“广州市国营集装箱运输公司”。
          位于广州市黄埔区，毗邻黄埔港，公司旁边就是广深沿江高速，交通便利。
          公司经营近20万平方米的仓储和堆场，300多台各类型运输车辆和装卸机械，营运网点覆盖全国30多个大中城市。
          为客户提供集物流策划，仓储，包装，分拨，装卸，运输，报关，多式联运等供应链一体化的综合物流服务。
        </p>
      </div>
      <div style="display:inline-block;overflow: hidden;box-sizing: border-box;margin:10px 10px 10px 30px">
        <img :src="require('../assets/img/study2.jpg')" class="image" alt="" />
      </div>
      <div style="display: inline-block;overflow: auto;width: 300px;height: 400px;margin-left: 30px;color:#d3dce6">
        <p>
          广州交通集团物流有限公司，简称“广交物流”。
          成立于1985年，前身是“广州市国营集装箱运输公司”。
          位于广州市黄埔区，毗邻黄埔港，公司旁边就是广深沿江高速，交通便利。
          公司经营近20万平方米的仓储和堆场，300多台各类型运输车辆和装卸机械，营运网点覆盖全国30多个大中城市。
          为客户提供集物流策划，仓储，包装，分拨，装卸，运输，报关，多式联运等供应链一体化的综合物流服务。
        </p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="社会责任" name="duty" class="tab">
      <div style="display:inline-block;overflow: hidden;box-sizing: border-box;margin:10px 10px 10px 30px;">
        <img :src="require('../assets/img/duty1.jpg')" class="image" alt="" />
      </div>
      <div style="display: inline-block;overflow: auto;width: 300px;height: 400px;margin-left: 30px;color:#d3dce6">
        <p>
          广州交通集团物流有限公司，简称“广交物流”。
          成立于1985年，前身是“广州市国营集装箱运输公司”。
          位于广州市黄埔区，毗邻黄埔港，公司旁边就是广深沿江高速，交通便利。
          公司经营近20万平方米的仓储和堆场，300多台各类型运输车辆和装卸机械，营运网点覆盖全国30多个大中城市。
          为客户提供集物流策划，仓储，包装，分拨，装卸，运输，报关，多式联运等供应链一体化的综合物流服务。
        </p>
      </div>
      <div style="display:inline-block;overflow: hidden;box-sizing: border-box;margin:10px 10px 10px 30px">
        <img :src="require('../assets/img/duty2.jpg')" class="image" alt="" />
      </div>
      <div style="display: inline-block;overflow: auto;width: 300px;height: 400px;margin-left: 30px;color:#d3dce6">
        <p>
          广州交通集团物流有限公司，简称“广交物流”。
          成立于1985年，前身是“广州市国营集装箱运输公司”。
          位于广州市黄埔区，毗邻黄埔港，公司旁边就是广深沿江高速，交通便利。
          公司经营近20万平方米的仓储和堆场，300多台各类型运输车辆和装卸机械，营运网点覆盖全国30多个大中城市。
          为客户提供集物流策划，仓储，包装，分拨，装卸，运输，报关，多式联运等供应链一体化的综合物流服务。
        </p>
      </div>
    </el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
export default {
  name: "Tabs",
  data(){
    return{
      activeName: 'intro',
    }
  },
  methods:{
    handleClick(tab, event) {
      console.log(tab, event)
    },
  }
}
</script>

<style scoped>
.image {
  width: 350px;
  height: 400px;
  display: block;
}
#tabs{
}
.tab{
  background-color: #323742
}
</style>