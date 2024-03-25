<template>
    <header class="header">
      <p>
        헤더임
      </p>
      <div>
        <v-btn v-if="this.isLoggedIn">
          로그인
        </v-btn>
        <v-btn>
          로그인
        </v-btn>
      </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
    }
  },

  created() {
    if (localStorage.getItem('users')) console.log("야호")
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #cecece;
  padding: 0 30px;
}
</style>
