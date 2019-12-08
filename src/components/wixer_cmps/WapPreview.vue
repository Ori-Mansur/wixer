<template>
  <div class="container-card wap-preview">
    <h3 class="main-title">{{wap.name}}</h3>
    <div class="content">
        <div class="content-overlay"></div>
                <img class="content-image" :src="wap.thumbnail">
        <div class="content-details fadeIn-top">
           <label @click="preview(wap._id)">
      <unicon name="eye" fill="white" class="icon-edit-prev" />
    </label>
           <label @click="edit(wap._id)">
      <unicon name="edit-alt" fill="white" class="icon-edit-prev" />
    </label>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    wap: Object
  },
  methods: {
    edit(wapId) {
      this.$emit("select", wapId);
    },
    preview(wapId) {
      this.$emit("preview", wapId);
    }
  }
};
</script>

