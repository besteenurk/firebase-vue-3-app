<template>
  <nav v-if="user">
    <div>
      <p>HG {{ user.displayName }}</p>
      <p class="email">email: {{ user.email }}</p>
    </div>
    <button @click="handleClick">log out</button>
  </nav>
</template>

<script>
import LogOut from "../composables/Logout";
import GetUser from "../composables/GetUser";

export default {
  setup() {
    const { error, logout } = LogOut();
    const { user } = GetUser();

    const handleClick = async () => {
      await logout();
      if (!error.value) {
        console.log("user logout");
      }
    };

    return {
      handleClick,
      user,
    };
  },
};
</script>

<style></style>
