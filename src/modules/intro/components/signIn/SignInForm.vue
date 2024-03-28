<template>
  <!-- @submit 에 [.prevent] 를 추가하여 서브밋 새로고침을 막을 수 있다.(SPA 방식) -->
  <form
      @submit.prevent="submitForm({
        username, password, resetForm
      })"
  >
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
      const userData = {
        username: this.username,
        password: this.password,
        resetForm: this.resetForm
      }
      this.$store.dispatch("login", userData);

    },
    resetForm() {
      this.nickname = '';
      this.username = '';
      this.password = '';
    }
  },
};
</script>

<style>

</style>