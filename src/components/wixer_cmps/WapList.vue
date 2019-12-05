<template>
  <ul class="card-grid">
    <li>
      <!-- <button @click="edit" class="empty-wap">+</button>
                  <li @click="el=!el"  class="li-bar section-add"> -->
                    
<i class="fa fa-plus fa-3x empty-wap" @click="edit"></i>
      <!-- <button>P</button> -->
    </li>
    <WapPreview v-for="wap in waps" :key="wap._id" :wap="wap" @select="edit" @preview="preview" />
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
      if (typeof wapId !== "string") this.$router.push(`/editor`);
      else this.$router.push(`/editor/${wapId}`);
    },
    preview(wapId) {
      console.log(wapId);

      if (typeof wapId !== "string") return;
      else this.$router.push(`/publish/${wapId}`);
    }
  },
  created() {},
  components: {
    WapPreview
  }
};
</script>