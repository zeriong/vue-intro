<template>
  <header class="appHeader">
    <p>
      헤더임
    </p>
    <div>

      <div v-if="isLoggedIn" class="buttons">
        <v-btn @click="this.$store.commit('setLogout')">
          로그아웃
        </v-btn>
        <v-btn >
          마이페이지
        </v-btn>
      </div>
      <div v-else class="buttons" >
        <v-btn @click="this.$router.push('/login')">
          로그인
        </v-btn>
        <v-btn @click="this.$router.push('/signup')">
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
      isLogin: false,
    }
  },
  methods: {},
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    }
  }
};
</script>

<style scoped>
.appHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #cecece;
  padding: 0 30px;
  position: fixed;
  z-index: 100;
  background-color: white;
}
.buttons {
  display: flex;
  gap: 16px;
}
</style>
