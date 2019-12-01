<template>
  <section class="text-editor-container">
    <button>Font Family</button>
    <button>FontUp</button>
    <button>FontDown</button>
    <button @click="makeBold">Bold</button>
  </section>
</template>

<script>
export default {
  props: {
    widget: Object
  },
  created() {},
  data() {
    return {
      chooseColor: false,
      imageChange: false
    };
  },
  methods: {
    editWidget() {
      this.$emit("edit", this.widget);
    },
    makeBold() {
      this.widget.data.style.fontWeight = "bold";
      console.log(this.widget.data.style.fontWeight);
    }
  },
  components: {}
};
</script>
<style lang="scss"></style>
