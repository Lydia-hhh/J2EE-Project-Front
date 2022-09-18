<template>
<div>
  <div>
    <PostHeader></PostHeader>
  </div>
  <div style="display: flex">
    <PostAside></PostAside>
    <router-view style="flex: 1"></router-view>
  </div>
</div>
</template>

<script>
import PostHeader from "@/components/PostHeader";
import PostAside from "@/components/PostAside";
export default {
  name: "PostLayout",
  components: {PostAside, PostHeader}
}
</script>

<style scoped>

</style>