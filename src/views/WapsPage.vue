<template>
  <div class="waps-page container">
      <h1>WAPS</h1>
    <WapList :waps="waps" />
  </div>
</template>
<script>
import WapList from "../components/wixer_cmps/WapList";
export default {
  computed: {
    waps() {
      return this.$store.getters.wapsToShow;
    }
  },
  components: {
    WapList
  }
};
</script>