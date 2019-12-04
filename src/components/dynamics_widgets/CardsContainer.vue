<template>
  <section class="container-threeCol flex row" :style="{backgroundColor: value.style.bcgColor, border: isBorder}">

    <card-container v-for="(data, index) in value.data" :key="index" :index="index" :data="data" :isEdit="isEdit" :style="{maxWidth: 'width'}"></card-container>
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
import CardContainer from '../dynamics_widgets/CardContainer';

export default {
  props: {
    edit: Boolean,
    value: Object
  },
  created() {
    console.log(this.value)
  },
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
    TextElement,
    CardContainer
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