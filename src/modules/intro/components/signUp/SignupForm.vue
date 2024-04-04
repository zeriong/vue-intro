
<template>
  <div class="formWrapper">
    <!-- @submit 에 [.prevent] 를 추가하여 서브밋 새로고침을 막을 수 있다.(SPA 방식) -->
    <form
        class="form"
        @submit.prevent="submitForm"
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

      <v-text-field
          label="Nick Name"
          v-model="nickname"
      />

      <div class="formInButtons">
        <v-btn class="submitButton" width="100%" height="54" type="submit">SIGNUP</v-btn>
        <button class="changeSignModeButton" type="button" @click="this.$router.push('/login')">LOGIN</button>
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
      isShowPassword: false,
      nickname: '',
      logMessage: '',
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
      const users = JSON.parse(localStorage.getItem('users'));

      if (users.some(userData => userData.username === this.username)) {
        return alert('이미 가입된 회원입니다.');
      } else {
        setTimeout(() => {
          users.push({
            username: this.username,
            password: this.password,
            nickname: this.nickname,
          });
          localStorage.setItem('users', JSON.stringify(users));
          this.resetForm();
          alert('회원가입이 되었습니다!');
          this.$router.push("/");
        }, 1000);
      }
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
@import "../style.css";
</style>