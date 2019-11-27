<template>
  <div style="display:flex;justify-content: space-between;">
    <div class="logo" style="padding: 30px;">LOGO</div>
    <nav class="nav-bar" style="padding: 30px;">
      <router-link to="#" style="margin-left: 10px" >
        {{links.first}}
        <input type="text" v-model="links.first"  />
      </router-link>
      <router-link to="#" style="margin-left: 10px">{{links.sec}}
        <input type="text" v-model="links.sec" />
      </router-link>
      <router-link to="#" style="margin-left: 10px">{{links.third}}
        <input type="text" v-model="links.third" />
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {
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
input{
  position: relative;
z-index: -30;

}

</style>