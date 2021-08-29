<template>
  <div class="home-page">
    <div class="login-container">
      <SignInUp></SignInUp>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SignInUp from "@/components/sign-in-up/SignInUp.vue";

export default {
  name: "Home",
  components: {
    SignInUp,
  },
};
</script>
<style>
.home-page {
  text-align: center;
  padding: 20px 0;
}
</style>
