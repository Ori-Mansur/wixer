<template>
  <div id="app">
    <NavBar v-if="isHome" />
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
  data() {
    return {
      // isHome: false
    };
  },
  created() {
    console.log(this.$route.path);
    this.$store.dispatch({ type: "loadWaps" });
    this.$store.dispatch({ type: "loadWidgets" });
    // this.$route();
  },
  computed: {
    isHome() {
      if (this.$route.path.includes("home") || this.$route.path.includes("/")) {
        return true;
      } else return false;
    }
  }
};
</script>

