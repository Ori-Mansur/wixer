<template>
  <ul class="edit-options">
    <li class="edit-option">
      <drag class="drag" :transfer-data="{ widget }">
        <h4>{{widget.name}}</h4>
      </drag>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    widget: Object
  },
  methods: {
    add(widget) {
      this.$emit("select", widget);
    }
  }
};
</script>