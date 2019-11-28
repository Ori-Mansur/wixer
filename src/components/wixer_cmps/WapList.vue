<template>
  <ul class="card-grid">
    <li>
      <button @click="edit">EDIT</button>
      <button>P</button>
    </li>
    <WapPreview v-for="wap in waps" :key="wap.id" :wap="wap" @select="edit" />
  </ul>
</template>
<script>
import WapPreview from "./WapPreview.vue";
export default {
  props: {
    waps: Array
  },
  methods: {
    edit(wapId) {
      if(typeof wapId !=='string')this.$router.push(`/editor`)
      else this.$router.push(`/editor/${wapId}`);
    }
  },
  created() {},
  components: {
    WapPreview
  }
};
</script>