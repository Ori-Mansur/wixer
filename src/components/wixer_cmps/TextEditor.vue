<template>
  <section class="text-editor-container">
    <select @change="changeFont" v-model="font">
        <option>Montserrat</option>
        <option>Roboto</option>
        <option>Arial</option>
    </select>
    <button @click="italicize">I</button>
    <button @click="changeSize(+2)">FontUp</button>
    <button @click="changeSize(-2)">FontDown</button>
    <button @click="makeBold">B</button>
    <img src="../../assets/icons/palette.svg" class="inactive" @click="chooseColor=!chooseColor">
    <color-picker @changeColor="changeFontColor" v-if="chooseColor"></color-picker>
  </section>
</template>

<script>
import ColorPicker from '../wixer_cmps/ColorPicker'

export default {
  props: {
    widget: Object
  },
  created() {
      console.log(this.widget)
  },
  data() {
    return {
      chooseColor: false,
      font: 'Arial'
    };
  },
  methods: {
    editWidget() {
      this.$emit("edit", this.widget);
    },
    makeBold() {
      this.widget.data.style.fontWeight =(this.widget.data.style.fontWeight=== 'normal')? 'bold':'normal'
    },
    changeSize(diff){
        this.widget.data.style.fontSize+=diff
    },
    changeFont(){
      console.log(this.widget.data.txt)
        this.widget.data.style.fontFamily = this.font
    },
    changeFontColor(color){
        this.widget.data.style.color = color
    },
    italicize(){
        this.widget.data.style.fontStyle = (this.widget.data.style.fontStyle==='normal')? 'italic':'normal'
    }
  },
  components: {
      ColorPicker
  }
};
</script>
<style lang="scss">
  .text-editor-container{
      position:absolute;
      right: 25px;
      top: 40px;
      z-index: 100;
      background-color: #fff;
      padding: 5px;
    img{
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
