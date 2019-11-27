<template>
  <li>
      <button @click="edit(templae._id)">E</button>
      <button>P</button>
  </li>
</template>
<script>
export default {
  props: {
    templates: Array
  },
  methods: {
      
  },
};
</script>