<template>
  <div>
    <AppHeader/>
    <AppAsideBar/>
    <div class="appMain">
      메인
    </div>
  </div>
</template>

<script>
import AppAsideBar from "@/modules/common/components/AppAsideBar.vue";
import AppHeader from "@/modules/common/components/AppHeader.vue";

export default {
  name: "MainPage",
  components: {
    AppHeader,
    AppAsideBar,
  },
  created() {
  }
}

</script>

<style scoped>
.appMain {
  background-color: skyblue;
  /* 기본페딩 20px (헤더: 80px, 사이드바: 300px) */
  padding: 100px 20px 20px 320px;
}
</style>