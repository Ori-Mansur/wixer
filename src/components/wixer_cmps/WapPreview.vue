<template>
  <el-badge :value="newTemplate" class="item">
    <div class="container-card wap-preview">
      <h3 class="main-title">{{wap.name}}</h3>
      <div class="content">
        <div class="content-overlay"></div>
        <img class="content-image" :src="wap.thumbnail" />
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
  </el-badge>
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
  },
  computed:{
    newTemplate(){
      if(+this.wap.createdAt.substring(8,10)>new Date().getDate()-3)return 'new'
    }
  }
};
</script>
<style lang="scss" scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}

</style>

