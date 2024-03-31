<template>
  <div class="appAside">
    <div class="asideContainer">

    </div>
  </div>
</template>

<script>
export default {
  name: "AppAsideBar",
}
</script>

<style scoped>
.appAside {
  width: 300px;
  background-color: red;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 50;
  /* 기본 페딩 20px씩 (헤더 80px) */
  padding: 100px 20px 20px;
}
.asideContainer {
  background-color: blue;
  width: 100%;
  height: 100%;
}
</style>