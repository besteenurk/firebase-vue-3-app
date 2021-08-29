<template>
  <MainPage></MainPage>
</template>

<script>
import MainPage from "../components/MainPage";
import getUser from "../composables/GetUser";
import { watch } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    MainPage,
  },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Home" });
      }
    });
  },
};
</script>

<style></style>
