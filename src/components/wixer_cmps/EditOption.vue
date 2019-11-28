<template>
<ul class="edit-options">
  <li class="edit-option"  @click="add(option)"><h4>{{option.type}}</h4></li>
</ul>
</template>

<script>
export default {
  props: {
    option: Object
  },
  methods: {
    add(widget) {
      this.$emit("select", widget);
    }
  }
};
</script>