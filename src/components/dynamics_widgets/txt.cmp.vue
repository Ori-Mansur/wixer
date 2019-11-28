<template>
  <div class="flex full">
    <p class="text" :contenteditable="true">
      {{data.Txt}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    edit: Boolean,
    data: Object
  }
};
</script>

<style lang="scss" scoped>
.text {
  border-style: dotted;
}
</style>