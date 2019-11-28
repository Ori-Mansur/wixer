<template>
  <li>
    <pre>{{wap}}</pre>
    <button @click="edit(wap._id)">E</button>
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
  methods: {},
  components: {}
};
</script>