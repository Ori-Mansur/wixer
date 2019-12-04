<template>
  <section class="container-threeCol flex row" @click="isEdit=!isEdit" :style="{backgroundColor: value.style.bcgColor, border: isBorder}">

    <Card1 v-for="(data, index) in value.data" :key="index" :data="data" :isEdit="isEdit" :style="{maxWidth: 'width'}"></Card1>
    
    <widget-editor :widget="value" class="widget-editor-container" @remove="removeWidget"></widget-editor>

  </section>
</template>

<script>
import WidgetEditor from "../wixer_cmps/WidgetEditor";
import TextEditor from "../wixer_cmps/TextEditor";
import TextElement from "../elements/TextElement";

import NavBar from "../dynamics_widgets/NavBarEdit";
import Container1 from "../dynamics_widgets/Container1";
import Empty from "../dynamics_widgets/Empty";
import HeaderBig from "../dynamics_widgets/HeaderBig";
import Img from "../dynamics_widgets/Img";
import Txt from "../dynamics_widgets/Txt";
import Video from "../dynamics_widgets/Video";
import Map from "../dynamics_widgets/Map";
import Card1 from '../dynamics_widgets/Card1';

export default {
  props: {
    edit: Boolean,
    value: Object
  },
  created() {},
  components: {
    NavBar,
    Container1,
    Empty,
    HeaderBig,
    Img,
    Txt,
    Video,
    Map,
    WidgetEditor,
    TextEditor,
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