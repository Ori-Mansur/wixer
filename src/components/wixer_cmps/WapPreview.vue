<template>
  <div>
    <!-- <pre>{{wap}}f</pre> -->
    <component
      v-for="(widget, idx) in wap.widgets"
      :key="idx"
      :is="widget.type"
      :data="widget.data"
      :contenteditable="false"
    ></component>

    <button @click="edit(wap._id)">E</button>
    <button>P</button>
  </div>
</template>
<script>
import NavBar from "../dynamics_widgets/NavBarEdit";
// import Container1 from "../dynamics_widgets/container1.cmp";
import Container3 from "../dynamics_widgets/container3.cmp";
import Container2 from "../dynamics_widgets/container2.cmp";
import MapAndTxt from "../dynamics_widgets/premade_container/mapAndTxt.cmp";
import Empty from "../dynamics_widgets/empty.cmp";
import Header from "../dynamics_widgets/header.cmp";
import Img from "../dynamics_widgets/img.cmp";
import Txt from "../dynamics_widgets/txt.cmp";
import Video from "../dynamics_widgets/video.cmp";
import Map from "../dynamics_widgets/map.cmp";

export default {
  props: {
    wap: Object
  },
  created() {
    console.log(this.wap);
  },
  methods: {},
  components: {
    NavBar,
    // Container1,
    Container3,
    Empty,
    Header,
    Img,
    Txt,
    Video,
    Map,
    MapAndTxt,
    Container2
  }
};
</script>