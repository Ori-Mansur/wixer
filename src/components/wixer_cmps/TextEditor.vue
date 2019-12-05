<template>
  <section v-if="isEdit" class="text-editor-icons-container">
    <select @change="change('fontFamily')" v-model="font" class="icon-txt-edit select-txt-edit">
      <option>Montserrat</option>
      <option>Roboto</option>
      <option>Arial</option>
      <option>Italianno</option>
    </select>
   
    <label @click.stop="change('italicize')">
      <unicon name="italic" fill="black" class="icon-txt-edit" />
    </label>
    <label @click.stop="change('plus')">
      <unicon name="plus" fill="black" class="icon-txt-edit" />
    </label>
    <label @click.stop="change('minus')">
      <unicon name="minus" fill="black" class="icon-txt-edit" />
    </label>
    <label @click.stop="change('bold')">
      <unicon name="bold" fill="black" class="icon-txt-edit" />
    </label>
    <label @click.stop="palateColor=!palateColor">
      <unicon name="palette" fill="black" class="icon-txt-edit" />
    </label>
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
<style lang="scss" >
.text-editor-icons-container {
  cursor:pointer;
  background-color: rgba(71, 71, 71, 0.568);
  padding: 5px;
  width: 10px;
  width: fit-content;
  display: flex;
  flex-direction: column-reverse;
  position:absolute;
 
  left: 0;
  .icon-txt-edit{
    background-color: #fff;
    padding: 3px;
    cursor: pointer;
    // border: 1px solid black;
    margin: 0.5px;
    // border-radius: 7px;
  }
  .select-txt-edit{
    width: 24px
  }
 
}
</style>
