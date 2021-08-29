<template>
  <form @submit.prevent="handleSubmit" class="content">
    <h1>Right Div</h1>
    <input type="text" placeholder="Username" v-model="displayName" />
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button class="btn-signup">Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import SignUp from "../../composables/SignUp";

export default {
  setup(props, context) {
    const { error, signup } = SignUp();
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        context.emit("signup");
      }
    };
    return {
      displayName,
      email,
      password,
      handleSubmit,
      error,
    };
  },
};
</script>

<style></style>
