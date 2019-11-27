<template>
  <section class="header-container" v-if="!isEditer">
      <img :src="logo"/>
      <h1>{{data.title}}</h1>
      <h3>{{data.subtitle}}</h3>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isEditer: false,
      data:{title: 'this is the title'},
            subtitle:'subtitle',
            logo: 'https://www.buythelogo.com/wp-content/uploads/2019/03/Leaf-tree-abstract-forest-logo-vector.jpg'

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