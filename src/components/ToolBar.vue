<template>
  <div class="tool-bar">
    <button @click="add({type:'txt'})">ADD SECTION</button>
    <button>ADD CMP</button>
    <button>ADD ELEMENT</button>
  </div>
</template>
<script>
export default {
  methods: {
    add(config) {
      this.$emit("add", config);
    }
  }
};
</script>