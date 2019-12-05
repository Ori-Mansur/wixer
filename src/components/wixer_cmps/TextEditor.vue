<template>
  <section v-if="isEdit" class="text-editor-container">
    <select @change="change('fontFamily')" v-model="font" @click.stop>
      <option>Montserrat</option>
      <option>Roboto</option>
      <option>Arial</option>
      <option>Italianno</option>
    </select>
    <button @click.stop="change('italicize')">I</button>

    <button @click.stop="changeSize(+2)">
      <unicon name="plus" fill="gray" />
    </button>
    <button @click.stop="changeSize(-2)">
      <unicon name="minus" fill="gray" />
    </button>
    <button @click.stop="change('bold')">B</button>
    <img
      src="../../assets/icons/palette.svg"
      class="inactive"
      @click.stop="palateColor=!palateColor"
    />
    <color-picker @changeColor="changeFontColor" v-if="palateColor"></color-picker>
  </section>
</template>

<script>
import ColorPicker from "../wixer_cmps/ColorPicker";

export default {
  props: {
    widget: Object,
    pos: Object,
  },
  created() {
    const param = this.$route.path;
    if (param.includes("editor")) this.isEdit = true;
    else this.isEdit = false;
  },
  data() {
    return {
      palateColor: false,
      fontColor:'',
      font: "Arial",
      isEdit:false
    };
  },
  methods: {
    change(type){
      if(type === 'fontFamily')this.$emit('edit',{type,font:this.font})
      else if(type === 'color')this.$emit('edit',{type,color:this.fontColor})
else this.$emit('edit',{type})
    },
    editWidget() {
      this.$emit("edit", this.widget);
    },
    changeSize(diff) {
      this.widget.style.fontSize += diff;
    },
    changeFontColor(color) {
      this.fontColor = color;
      this.change('color')
    },
  
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
  cursor:pointer;
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
