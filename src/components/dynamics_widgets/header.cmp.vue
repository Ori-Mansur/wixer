<template>
  <section class="header-container" :style="{backgroundImage:`url(${data.img})`, height: data.style.height+'px'}">
    <div class="flex column align-center justify-center">
      <h1 v-if="data.title" :style="{color: data.style.txtTitleColor}">{{data.title}}</h1>
      <h3 v-if="data.subtitle" :style="{color: data.style.txtSubtitleColor}">{{data.subtitle}}</h3>
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