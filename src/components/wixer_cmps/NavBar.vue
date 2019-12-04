<template>
  <div class="nav-bar-container" v-if="!isEditer">
    <div class="logo"> <img src="@/assets/wixer.png" alt=""></div>
    <nav class="nav-bar">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/wap">Templates</router-link>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isEditer: false
    };
  },
  created() {
    if (
      this.$route.path.includes("editor") ||
      this.$route.path.includes("publish")
    ) {
      this.isEditer = true;
    } else this.isEditer = false;
  },
  watch: {
    $route() {
      if (
        this.$route.path.includes("editor") ||
        this.$route.path.includes("publish")
      ) {
        this.isEditer = true;
      } else this.isEditer = false;
    }
  }
};
</script>