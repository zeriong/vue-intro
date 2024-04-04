<template>
  <!-- @submit 에 [.prevent] 를 추가하여 서브밋 새로고침을 막을 수 있다.(SPA 방식) -->
  <div class="formWrapper">
    <form
        class="form"
        @submit.prevent="submitForm({ username, password, resetForm })"
    >
      <h1 class="formTitle">
        Z-Schedule
      </h1>

      <v-text-field
          :rules="rules"
          label="ID"
          v-model="username"
      />

      <div class="passwordInputWrapper">
        <v-text-field
            :type="isShowPassword ? 'text' : 'password'"
            label="password"
            v-model="password"
            class="passwordInput"
        />
        <div @click="isShowPassword = !isShowPassword">
          <img v-if="isShowPassword" class="showPasswordIcon" :src="visibilityIcon" alt="비밀번호 보일 때 아이콘"/>
          <img v-else class="showPasswordIcon" :src="visibilityOffIcon" alt="비밀번호 보이지 않을 때 아이콘"/>
        </div>
      </div>

      <div class="formInButtons">
        <v-btn class="submitButton" width="100%" height="54" type="submit">login</v-btn>
        <button class="changeSignModeButton" type="button" @click="this.$router.push('/signup')">SIGNUP</button>
      </div>
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
      isShowPassword: false,
      rules: [
          value => !!value || "아이디를 입력해주세요.",
          value => (value && value.length >= 3) || '최소 3자 이상 입력해주세요',
      ],
      visibilityIcon: require("@/assets/visibilityIcon.svg"),
      visibilityOffIcon: require("@/assets/visibilityOffIcon.svg"),
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
@import "../style.css";
</style>