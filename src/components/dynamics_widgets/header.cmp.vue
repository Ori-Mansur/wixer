<template>
  <section class="header-container">
    <div class="flex column">
      <h1 v-if="data.title">{{data.title}}</h1>
      <h3 v-if="data.subtitle">{{data.subtitle}}</h3>
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