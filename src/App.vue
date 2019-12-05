<template>
  <div id="app">
    <NavBar v-if="path!=='/'" />
    <router-view />
    <FooterApp v-if="path!=='/editor'"></FooterApp>
  </div>
</template>
<script>
import NavBar from "@/components/wixer_cmps/NavBar.vue";
import FooterApp from "@/components/wixer_cmps/FooterApp.vue";

export default {
  name: "APP",
  components: {
    NavBar,
    FooterApp
  },

  created() {
    this.$store.dispatch({ type: "loadWaps" });
    this.$store.dispatch({ type: "loadWidgets" });
  },
  computed: {
    path() {
      console.log('this.$route.path', this.$route.path)
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

