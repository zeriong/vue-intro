<template>
  <div>
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "@/modules/intro/components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  }
};
</script>

<style></style>
