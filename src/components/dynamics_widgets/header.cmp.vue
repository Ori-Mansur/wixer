<template>
  <section class="header-container flex row">
    <img :src="data.logo" alt="">
    <div class="flex column">
      <h1>{{data.title}}</h1>
      <h3>{{data.subtitle}}</h3>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    edit: Boolean,
    data: Object
  },
  created() {
    const param = this.$route.path;
    if (param.includes("editor")) this.isEditer = true;
    else this.isEditer = false;
  }
};
</script>
<style lang="scss">
  .header-container img{
    width:100px;
    height: auto;
  }
</style>