<template>
    <section class="widget-editor-container">
        <img src="../../assets/icons/palette.svg" class="inactive" @click="chooseColor=!chooseColor">
        <img src="../../assets/icons/bin.svg" @click="removeWidget" title="remove this widget">
        <button>UP</button>
        <button>DOWN</button>
        <label for="file-upload" class="custom-file-upload"><input id="file-upload" type="file"><img src="../../assets/icons/imgup.svg"></label>
        <color-picker @changeColor="updateBackground" v-if="chooseColor"></color-picker>
    </section>
</template>

<script>
import ColorPicker from '../wixer_cmps/ColorPicker'

export default {
  props: {
    widget: Object
  },
  created(){
    
  },
  data(){
    return{
      chooseColor:false,
      imageChange: false
    }
  },
  methods: {
    editWidget() {
      this.$emit("edit", this.widget);
    },
    removeWidget() {
      this.$emit("remove", this.widget.id);
    },
    updateBackground(color){
      this.widget.data.style.bcgColor = color
      console.log(this.widget.data.style)
    },
    open(){
      console.log('hi')
    }
  },
  components:{
    ColorPicker
  }
};
</script>
<style lang="scss">
  .widget-editor-container{
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
input[type="file"] {
    display: none;
}
</style>
