<template>
  <form @submit.prevent="handleSubmit" class="content">
    <h1>Left Div</h1>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button class="btn-signin">Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import Login from "../../composables/Login";

export default {
  setup(props, context) {
    const email = ref("");
    const password = ref("");

    const { error, login } = Login();

    const handleSubmit = async () => {
      await login(email.value, password.value);

      if (!error.value) {
        context.emit("login");
      }
    };
    return {
      email,
      password,
      handleSubmit,
      error,
    };
  },
};
</script>

<style></style>
