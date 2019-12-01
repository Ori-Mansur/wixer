<template>
  <li class="wap-preview">
    <button @click="edit(wap._id)">EDIT</button>
    <button @click="preview(wap._id)">P</button>
    <h3>{{wap.name}}</h3>
    <div>
      <img src="@/assets/card2.png" />
    </div>
    <!-- <pre>{{wap.name}}</pre> -->
  </li>
</template>
<script>
export default {
  props: {
    wap: Object
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
