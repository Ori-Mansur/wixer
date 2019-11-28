<template>
  <div class="nav-bar-daynamic" >
    <div class="logo" style="padding: 30px;">LOGO</div>
    <nav class="nav-bar" style="padding: 30px;">
      <router-link to="#" style="margin-left: 10px" :contenteditable="edit">{{links.first}}</router-link>
      <router-link to="#" style="margin-left: 10px" :contenteditable="edit">{{links.sec}}</router-link>
      <router-link to="#" style="margin-left: 10px" :contenteditable="edit">{{links.third}}</router-link>
    </nav>
  </div>
</template>
<script>
export default {
  props: {
    edit: Boolean
  },
  data() {
    return {
      links: {
        first: "Home",
        sec: "About",
        third: "Contact"
      }
    };
  }
};
</script>
<style lang="scss" scoped>

</style>