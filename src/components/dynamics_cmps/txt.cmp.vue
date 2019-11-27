<template>
  <div>
    <p class="text" :contenteditable="isEditMode" v-html="content"></p>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    isEditMode: {
      type: Boolean
    }
  },
  data() {
    return {
      content: this.data.text
    };
  }
};
</script>

<style lang="scss" scoped>
</style>