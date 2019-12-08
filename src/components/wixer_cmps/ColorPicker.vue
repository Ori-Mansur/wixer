<template>
  <section class="color-palette-container">
    <div class="colors-tab-container flex row">
      <div
        v-for="(color, index) in colorChoices"
        :key="index"
        :color="color[index]"
        @click.stop="setColor(colorChoices[index])"
        class="color-tab"
        :ref="colorChoices[index]"
        :style="{ 'background-color': colorChoices[index] }"
      ></div>
    </div>
  </section>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      color: null,
      colorChoices: [
        "#F28B82",
        "#E6C9A8",
        "#FBBC04",
        "#A7FFEB",
        "#AECBFA",
        "#D7AEFB",
        "#CBF0F8",
        "#CCFF90",
        "#FDCFE8",
        "#EA4335",
        "#4285F4",
        "#35495E",
        "#000000",
        "#FFFFFF",
        "#41B883",
        "#F0F4F7"
      ]
    };
  },
  methods: {
    setColor(color) {
      console.log(color);
      this.$emit("changeColor", color);
    }
  }
};
</script>

<style lang="scss">
</style>
