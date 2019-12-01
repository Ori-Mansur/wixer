<template>
  <section class="color-palette-container">
    <div class="colors-tab-container flex row">
      <div
        v-for="(color, index) in colorChoices"
        :key="index"
        :color="color[index]"
        @click="setColor(colorChoices[index])"
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
        "#41B883"
      ]
    };
  },
  methods: {
    setColor(color) {
        console.log(color)
        this.$emit("changeColor", color);
    }
  }
};
</script>
<style lang="scss">
.color-palette-container {
  position: relative;
  .colors-tab-container {
    width: 140px;
    flex-wrap: wrap;
    position: absolute;
    top: -2px;
    background-color: white;
    border: 1px solid rgba(2, 2, 2, 0.2);
    padding: 5px;
    .color-tab {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid rgba(2, 2, 2, 0.2);
      margin-right: 5px;
      margin-bottom: 5px;
      cursor: pointer;
    }
  }
}
</style>
