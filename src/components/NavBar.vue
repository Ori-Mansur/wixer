<template>
  <div class="nav-bar-container" v-if="!isEditer">
    <div class="logo">LOGO</div>
    <nav class="nav-bar">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/template">Template</router-link>
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
    const param = this.$route.path;
    if (param.includes("editor")) this.isEditer = true;
    else this.isEditer = false;
    console.log(param);
  }
};
</script>