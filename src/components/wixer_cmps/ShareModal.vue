<template>
  <el-dialog title="Share Your Website" 
  :visible="isShare" 
  :show-close="false" 
   width=400px
  :destroy-on-close="true">
    <SocialSharing />
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">Close</el-button>
    </span>
  </el-dialog>
</template>
<script>
import SocialSharing from "./SocialSharing.vue";
export default {
  props: {
    isShare: Boolean
  },
  data() {
    return {
      isClose:'',
    };
  },
  methods: {
    close() {
      this.$emit("close");
    }
  },
  computed: {
    open() {
      if(this.isShare) return this.isClose
      else return this.isShare;
    }
  },
  components: {
    SocialSharing
  }
};
</script>
<style lang="scss" scoped>
.el-dialog{
  width: 200px;
}

</style>