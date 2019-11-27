<template>
  <li>
    <pre>{{wap}}f</pre>
    <button @click="edit(wap._id)">E</button>
    <button>P</button>
  </li>
</template>
<script>
export default {
  props: {
    wap: Object
  },
  methods: {}
};
</script>