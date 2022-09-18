<template>
  <div :style="conTop">
    <div style="margin: 20px auto;width: 500px;height: 500px;background: rgba(255,255,255,0.6)">
      <div style="margin: 20px auto;text-align: center">
        <div style="text-align: center;color: #242730;padding-top: 10px">
          <h2>个人信息</h2>
        </div>
        <el-form ref="form" :model="form" label-width="80px" style="width: 80%;padding-top: 20px;">
          <el-form-item label="用户名">
            <el-input v-model="form.username" disabled></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="form.age"></el-input>
          </el-form-item>
          <el-form-item label="性别" style="text-align: left">
            <!--           <el-input v-model="form.sex"></el-input>-->
            <el-dropdown>
              <el-button type="primary" style="width: 100%;background-color: white;color: black">
                {{form.sex}}
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="this.form.sex='男'">男</el-dropdown-item>
                  <el-dropdown-item @click="this.form.sex='女'">女</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-form-item>
        </el-form>
        <div style="text-align: center">
          <el-button type="primary" @click="update">保存</el-button>
        </div>
      </div>

    </div>




  </div>
</template>

<script>
import request from "@/utils/request";

export default {
  name: "PostPerson",
  data() {
    return {
      form: {},
      conTop: {
        backgroundImage: "url(" + require("../assets/img/prague.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },

    }
  },
  created() {
    this.load();
    //let str = sessionStorage.getItem("user") || "{}" //by Q
    //this.form = JSON.parse(str)  //by Q
  },
  methods: {

    load(){
      request.get('/info').then(res => {//res是从后台返回的数据
        this.form=res.data;
        console.log(res)
      })
    },
    handleAvatarSuccess(res) {
      this.form.avatar = res.data
      this.$message.success("上传成功")
      // this.update()
    },
    update() {
      request.put("/info", this.form).then(res => {
        console.log(res)
        if (res.code === '0') {
          this.$message({
            type: "success",
            message: "更新成功"
          })
          this.load();
          //sessionStorage.setItem("user", JSON.stringify(this.form)) //by Q
          // 触发Layout更新用户信息  //by Q
          //this.$emit("userInfo") //by Q
        } else {
          this.$message({
            type: "error",
            message: res.msg
          })
        }
      })
    },

  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
