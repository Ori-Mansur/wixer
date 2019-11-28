<template>
  <li>
    <pre>{{wap}}</pre>
    <button @click="edit(wap.id)">EDIT</button>
    <button>P</button>
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
    }
  }
};
</script>