<template>
  <!-- @submit 에 [.prevent] 를 추가하여 서브밋 새로고침을 막을 수 있다.(SPA 방식) -->
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">ID: </label>
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">PW: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">Login</button>
    <div>{{ logMessage }}</div>
  </form>
</template>

<script>

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    }
  },
  methods: {
    submitForm() {
      const users = JSON.parse(localStorage.getItem('users'));
      const isExistUser = users.find(userData => userData.username === this.username);

      if (!isExistUser) return alert('가입되지 않은 회원입니다.');

      if (isExistUser.password === this.password) {
        this.resetForm();
        const { username, password } = isExistUser
        localStorage.setItem("loginUser", JSON.stringify({username, password}));
        alert(`${isExistUser.nickname}님 어서오세요!`);
        this.$router.push("/main");
      }
      else alert("비밀번호가 일치하지 않습니다.");
    },

    resetForm() {
      this.nickname = '';
      this.username = '';
      this.password = '';
    }
  },
  created() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([]));
    }
  }
};
</script>

<style>

</style>