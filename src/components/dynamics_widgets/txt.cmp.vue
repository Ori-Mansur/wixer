<template>
  <div class="flex full">
    <p class="text" :contenteditable="true">
      {{content}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    edit: Boolean,
    content: String
  }
};
</script>

<style lang="scss" scoped>
.text {
  border-style: dotted;
}
</style>