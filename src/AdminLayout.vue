<template>
<div>
  <div>
    <AdminHeader></AdminHeader>
  </div>
  <div style="display: flex">
    <AdminAside></AdminAside>
    <router-view style="flex: 1"></router-view>
  </div>
</div>
</template>

<script>
import AdminHeader from "@/components/AdminHeader";
import AdminAside from "@/components/AdminAside";
export default {
  name: "AdminLayout",
  components: {AdminHeader,AdminAside}
}
</script>

<style scoped>

</style>