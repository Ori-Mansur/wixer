<template>
  <!-- <ul class="card-grid"> -->
    <div>
    <WapPreview v-for="wap in waps" :key="wap._id" :wap="wap" />
    </div>
  <!-- </ul> -->
</template>
<script>
import WapPreview from "./WapPreview.vue";
export default {
  props: {
    waps: Array
  },
  created(){
  },
  components: {
    WapPreview
  }
};
</script>