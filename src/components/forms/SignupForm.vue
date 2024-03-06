
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
    <div>
      <label for="nickname">Nick Name: </label>
      <input id="nickname" type="text" v-model="nickname">
    </div>
    <button type="submit">Signup</button>
    <div>{{ logMessage }}</div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMessage: '',
    }
  },
  methods: {
    submitForm() {
      const users = JSON.parse(localStorage.getItem('users'));

      if (users.some(userData => userData.username === this.username)) {
        return alert('이미 가입된 회원입니다.');
      }
      setTimeout(() => {
        users.push({
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        });
        localStorage.setItem('users', JSON.stringify(users));
        console.log("이건 뭘까나",localStorage.getItem('users'));
        this.resetForm();
      }, 1000);
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