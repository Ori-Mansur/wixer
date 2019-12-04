<template>
  <div class="waps-page container">
      <h1 class="waps-page-header">Build beautiful websites in minutes
</h1>
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
  created(){
this.$store.dispatch({type:'loadWaps'})
  },
  components: {
    WapList
  }
};
</script>