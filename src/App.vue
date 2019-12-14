<template>
  <div id="app">
    <NavBar v-if="path!=='/'" />
    <!-- <LoginRegister/> -->
   
    <router-view />

    <FooterApp v-if="path!=='/editor'"></FooterApp>
  </div>
</template>
<script>
import NavBar from "@/components/wixer_cmps/NavBar.vue";
import LoginRegister from "@/components/wixer_cmps/LoginRegister.vue";
import FooterApp from "@/components/wixer_cmps/FooterApp.vue";

export default {
  name: "APP",
  components: {
    NavBar,
    LoginRegister,
    FooterApp
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
};
</script>

