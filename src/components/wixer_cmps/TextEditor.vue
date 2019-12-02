<template>
  <section class="text-editor-container" v-if="pos&&pos.x>0"  :style="{top:y,left:x}">
    <select @change="changeFont" v-model="font">
      <option>Montserrat</option>
      <option>Roboto</option>
      <option>Arial</option>
    </select>
    <button @click.stop="italicize">I</button>
    
    <button @click.stop="changeSize(+2)"><unicon name="plus" fill="gray" /></button>
    <button @click.stop="changeSize(-2)"><unicon name="minus" fill="gray" /></button>
    <button @click.stop="makeBold">B</button>
    <img src="../../assets/icons/palette.svg" class="inactive" @click.stop="chooseColor=!chooseColor" />
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
    // console.log(this.widget);
  },
  data() {
    return {
      chooseColor: false,
      font: "Arial",
    };
  },
  methods: {
    editWidget() {
      this.$emit("edit", this.widget);
    },
    makeBold() {
      this.widget.data.style.fontWeight =
        this.widget.data.style.fontWeight === "normal" ? "bold" : "normal";
    },
    changeSize(diff) {
      this.widget.data.style.fontSize += diff;
      console.log(this.widget.data.style.fontSize, "size");
    },
    changeFont() {
      this.widget.data.style.fontFamily = this.font;
    },
    changeFontColor(color) {
      this.widget.data.style.color = color;
    },
    italicize() {
      this.widget.data.style.fontStyle =
        this.widget.data.style.fontStyle === "normal" ? "italic" : "normal";
    }
  },
  computed:{
y(){
  return this.pos.y+'px'
},
x(){
  return this.pos.x+'px'
}
  },
  components: {
    ColorPicker
  }
};
</script>
<style lang="scss">
.text-editor-container {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.568);
  padding: 5px;
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
