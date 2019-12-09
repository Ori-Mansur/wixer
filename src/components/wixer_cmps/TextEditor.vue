<template>
  <section v-if="isEdit && data&&data._id===txtId" class="text-editor-icons-container">
    <select @change="change('fontFamily')" v-model="font" 
    title="Font Family"
    class="icon-txt-edit select-txt-edit">
      <option>Montserrat</option>
      <option>Roboto</option>
      <option>Arial</option>
      <option>Italianno</option>
      <option>Playfair</option>
      <option>Cabin</option>
      <option>DancingScript</option>
      <option>JosefinSans</option>
      <option>Lobster</option>
      <option>Pacifico</option>
      <option>Solway</option>
      <option>SulphurPoint</option>
    </select>
    <label @click.stop="change('italicize')" title="Italic">
      <unicon name="italic" fill="white" class="icon-txt-edit" />
    </label>
    <label @click.stop="change('plus')" >
      <unicon name="plus" fill="white" class="icon-txt-edit" />
    </label>
    <label @click.stop="change('minus')">
      <unicon name="minus" fill="white" class="icon-txt-edit" />
    </label>
    <label @click.stop="change('bold')">
      <unicon name="bold" fill="white" class="icon-txt-edit" />
    </label>
    <label @click.stop="palateColor=!palateColor">
      <unicon name="palette" fill="white" class="icon-txt-edit" />
    </label>
    <color-picker @changeColor="changeFontColor" v-if="palateColor"></color-picker>
  </section>
</template>

<script>
import ColorPicker from "../wixer_cmps/ColorPicker";

export default {
  props: {
    data: Object,
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
    txtId(){
      return this.$store.getters.txtId
    }
  },
  components: {
    ColorPicker
  }
};
</script>
<style lang="scss" >
.text-editor-icons-container {
  cursor:pointer;
  // background-color: white;
  // padding: 5px;
  // width: 10px;
  width: fit-content;
  // height: 24px;
  display: flex;
  // flex-direction: column-reverse;
  position:absolute;
  
  
 
  // left:0;
  .icon-txt-edit{
    background-color: black;
    padding: 3px;
    cursor: pointer;
    margin: 0.5px;
  }
  .select-txt-edit{
    width: 24px;
    height: 24px;
    color: white
  }
}
</style>
