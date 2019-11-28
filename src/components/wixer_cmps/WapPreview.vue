<template>
  <li class="wap-preview">
    <button @click="edit(wap.id)">EDIT</button>
    <button @click="preview(wap.id)">P</button>
    <pre>{{wap}}</pre>
  </li>
</template>
<script>
export default {
  props: {
    wap: Object
  },
  created() {
    console.log(this.wap);
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