<template>
    <header class="header">
      <p>
        헤더임
      </p>
      <div>
        <div v-if="this.isLoggedIn" class="flex" @click="logout">
          <v-btn >
            로그아웃
          </v-btn>
          <v-btn >
            마이페이지
          </v-btn>
        </div>
        <div v-else class="flex" >
          <v-btn @click="loginPage">
            로그인
          </v-btn>
          <v-btn >
            회원가입
          </v-btn>
        </div>

      </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: this.$store.state.isLoggedIn,
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("loginUser");
      console.log(localStorage.getItem("loginUser"))
    },
    loginPage() {
      this.$router.push("/");
    },
  },
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
