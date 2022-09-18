<template>
<div>
  <div>
    <UserHeader></UserHeader>
  </div>
  <div style="display: flex">
    <UserAside></UserAside>
    <router-view style="flex: 1"></router-view>
  </div>

</div>
</template>
<script>
import UserHeader from "@/components/UserHeader";
import UserAside from "@/components/UserAside";
export default {
  name: "UserLayout",
  components: {UserAside, UserHeader}
}
</script>

<style scoped>

</style>