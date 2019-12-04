<template>
  <section class="container-twoCol" @click="isEdit=!isEdit" :style="{backgroundImage: `url(${value.style.bcgImg})`,    backgroundColor: value.style.bcgColor, height: value.style.height + 'px', border: isBorder}">

    <text-element v-for="(data, index) in value.data" :key="index" :data="data" :isEdit="isEdit"></text-element>

    <widget-editor :widget="value" class="widget-editor-container" @remove="removeWidget"></widget-editor>
  </section>
</template>

<script>
import WidgetEditor from "../wixer_cmps/WidgetEditor";
import TextEditor from "../wixer_cmps/TextEditor";
import TextElement from "../elements/TextElement";


export default {
  props: {
    edit: Boolean,
    value: Object
  },
  created(){
    console.log(this.value)
  },
  data(){
    return{
      isEdit: false
    }
  },
  computed:{
    isBorder(){
      if (this.isEdit) return '1px solid blue'
      else return ''
    }
  },
  methods:{
    removeWidget(id) {
      this.$emit("remove", id);
    },
  },
  components:{
    WidgetEditor,
    TextEditor,
    TextElement
  }
};
</script>a
<style scoped>
.container-twoCol {
  position: relative;
}
.text-header,
.text-center {
  display: flex;
  justify-content: center;
}
.column {
  float: left;
  width: 50%;
  padding: 10px;
  height: 300px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>