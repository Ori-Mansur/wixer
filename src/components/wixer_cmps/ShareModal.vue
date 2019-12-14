<template>
  <el-dialog title="Shipping address" :visible="isShare" :show-close="false" :destroy-on-close="true">
    <SocialSharing />
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">Cancel</el-button>
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
  created() {
  console.log(this.$route.params);
  },
  watch: {
    $route() {
      console.log(this.$route.params);
    }
  },
  components: {
    SocialSharing
  }
};
</script>