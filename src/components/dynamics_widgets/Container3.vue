<template>
  <section class="container-threeCol flex row" @click="isEdit=!isEdit" :style="{backgroundImage: `url(${value.style.bcgImg})`,    backgroundColor: value.style.bcgColor, height: value.style.height + 'px', border: isBorder}">

    <text-element v-for="(data, index) in value.data" :key="index" :data="data" :isEdit="isEdit" :style="{maxWidth: 'width'}"></text-element>

    <widget-editor :widget="value" class="widget-editor-container" @remove="removeWidget"></widget-editor>

  </section>
</template>

<script>
import WidgetEditor from "../wixer_cmps/WidgetEditor";
// import TextEditor from "../wixer_cmps/TextEditor";
import TextElement from "../elements/TextElement";



export default {
  props: {
    edit: Boolean,
    value: Object
  },
  created() {},
  components: {
    WidgetEditor,
    // TextEditor,
    TextElement
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
    },
    width(){
      var width = 100/this.value.data.length+'%'
      return width
    }
  },
  methods:{
    removeWidget(id) {
      this.$emit("remove", id);
    },
  },
};
</script>
<style scoped>
.container-threeCol {
  position: relative;

}
.text-header,
.text-center {
  display: flex;
  justify-content: center;
}
.column {
  float: left;
  width: 33.33%;
  padding: 10px;
  min-height: 300px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>