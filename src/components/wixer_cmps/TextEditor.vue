<template>
  <section class="text-editor-container">
    <select @change="changeFont" v-model="font" @click.stop>
      <option>Montserrat</option>
      <option>Roboto</option>
      <option>Arial</option>
      <option>Italianno</option>
    </select>
    <button @click.stop="italicize">I</button>

    <button @click.stop="changeSize(+2)">
      <unicon name="plus" fill="gray" />
    </button>
    <button @click.stop="changeSize(-2)">
      <unicon name="minus" fill="gray" />
    </button>
    <button @click.stop="makeBold">B</button>
    <img
      src="../../assets/icons/palette.svg"
      class="inactive"
      @click.stop="chooseColor=!chooseColor"
    />
    <color-picker @changeColor="changeFontColor" v-if="chooseColor"></color-picker>
  </section>
</template>

<script>
import ColorPicker from "../wixer_cmps/ColorPicker";

export default {
  props: {
    widget: Object,
    pos: Object
  },
  created() {
  },
  data() {
    return {
      chooseColor: false,
      font: "Arial"
    };
  },
  methods: {
    editWidget() {
      this.$emit("edit", this.widget);
    },
    makeBold() {
      this.widget.style.fontWeight =
        this.widget.style.fontWeight === "normal" ? "bold" : "normal";
    },
    changeSize(diff) {
      this.widget.style.fontSize += diff;
    },
    changeFont() {
      this.widget.style.fontFamily = this.font;
    },
    changeFontColor(color) {
      this.widget.style.color = color;
    },
    italicize() {
      this.widget.style.fontStyle =
        this.widget.style.fontStyle === "normal" ? "italic" : "normal";
    }
  },
  computed: {
  },
  components: {
    ColorPicker
  }
};
</script>
<style lang="scss">
.text-editor-container {
  background-color: rgba(255, 255, 255, 0.568);
  padding: 5px;
  position:absolute;
  top:-100px;
  right: 0px;
  img {
    width: 30px;
    height: 30px;
    padding: 3px;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 7px;
    margin-top: 5px;
    margin-right: 5px;
  }
}
</style>
