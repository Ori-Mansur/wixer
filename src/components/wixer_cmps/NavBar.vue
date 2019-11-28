<template>
  <div class="nav-bar-container" v-if="!isEditer">
    <div class="logo">LOGO</div>
    <nav class="nav-bar">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/wap">Waps</router-link>
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
    if (this.$route.path.includes("editor")) this.isEditer = true;
    else this.isEditer = false;
  },
  watch: {
    $route(next, prev) {
      if (next.path.includes("editor")) this.isEditer = true;
      else this.isEditer = false;
    }
  }
};
</script>