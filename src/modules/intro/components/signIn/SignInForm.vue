<template>
  <!-- @submit 에 [.prevent] 를 추가하여 서브밋 새로고침을 막을 수 있다.(SPA 방식) -->
  <div class="signInWrapper">
    <form
        class="loginForm"
        @submit.prevent="submitForm({ username, password, resetForm })"
    >
      <h1 class="loginFormTitle">
        Z-Schedule
      </h1>

      <v-text-field
          :rules="rules"
          label="ID"
          v-model="username"
      />

      <v-text-field
          label="password"
          v-model="password"
      />

      <div class="signInButtons">
        <v-btn class="loginButton" width="100%" height="54" type="submit">login</v-btn>
        <button class="signupButton" type="button" @click="this.$router.push('/signup')">SIGNUP</button>
      </div>


      <div>{{ logMessage }}</div>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
      rules: [
          value => !!value || "아이디를 입력해주세요.",
          value => (value && value.length >= 3) || '최소 3자 이상 입력해주세요',
      ]
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
.signInWrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.loginForm {
  width: 440px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 20px;
}
.loginFormTitle {
  text-align: center;
  font-size: 46px;
  margin-bottom: 20px;
}
.loginButton {
  font-size: 20px;
  font-weight: 600;
}
.signupButton {
  transition: .2s ease-in-out;
  font-size: 18px;
  font-weight: 400;
  padding: 2px 8px;
  border-bottom: solid 3px #c5c5c5;
  margin-top: 16px;
  float: right;
}
.signupButton:hover {
  opacity: .3;
}
.signInButtons {
  position: relative;
  width: 100%;
}
</style>