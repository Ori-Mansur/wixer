<template>
  <ul class="card-grid">
    <WapPreview v-for="wap in waps" :key="wap._id" :wap="wap" />
  </ul>
</template>
<script>
import WapPreview from "./WapPreview.vue";
export default {
  props: {
    waps: Array
  },
  created(){
    console.log(this.waps)
  },
  components: {
    WapPreview
  }
};
</script>