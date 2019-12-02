<template>
  <section class="container-threeCol" :contenteditable="edit">
    <h1 class="text-header">Hello main title</h1>
    <div class="flex row full space-between">
      <component
        v-for="(widget,idx) in data"
        :key="idx"
        :is="widget.type"
        :data="widget.data"
        :contenteditable="true"
      ></component>
    </div>
  </section>
</template>

<script>
import NavBar from "../dynamics_widgets/NavBarEdit";
import Container1 from "../dynamics_widgets/Container1";
import Container3 from "../dynamics_widgets/Container3";
import Empty from "../dynamics_widgets/Empty";
import HeaderBig from "../dynamics_widgets/HeaderBig";
import Img from "../dynamics_widgets/Img";
import Txt from "../dynamics_widgets/Txt";
import Video from "../dynamics_widgets/Video";
import Map from "../dynamics_widgets/Map";

export default {
  props: {
    edit: Boolean,
    data: Array
  },
  created() {},
  components: {
    NavBar,
    Container1,
    Container3,
    Empty,
    HeaderBig,
    Img,
    Txt,
    Video,
    Map
  }
};
</script>
<style scoped>
.container-threeCol {
  border-style: dotted;
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