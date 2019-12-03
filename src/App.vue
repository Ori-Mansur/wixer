<template>
  <div id="app">
    <NavBar v-if="path!=='/'" />
    <router-view />
  </div>
</template>
<script>
import NavBar from "@/components/wixer_cmps/NavBar.vue";

export default {
  name: "APP",
  components: {
    NavBar
  },

  created() {
    this.$store.dispatch({ type: "loadWaps" });
    this.$store.dispatch({ type: "loadWidgets" });
  },
  computed: {
    path() {
      return this.$route.path;
    }
  }
  // watch: {
  //   $route() {
  //     if (this.$route.path.includes("home") || this.$route.path.includes("/")) {
  //       this.isHome = true;
  //     } else this.isHome = false;
  //   }
  // }
};
</script>

