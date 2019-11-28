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
import Container1 from "../dynamics_widgets/container1.cmp";
import Container3 from "../dynamics_widgets/container3.cmp";
import Empty from "../dynamics_widgets/empty.cmp";
import Header from "../dynamics_widgets/header.cmp";
import Img from "../dynamics_widgets/img.cmp";
import Txt from "../dynamics_widgets/txt.cmp";
import Video from "../dynamics_widgets/video.cmp";
import Map from "../dynamics_widgets/map.cmp";

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
    Header,
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