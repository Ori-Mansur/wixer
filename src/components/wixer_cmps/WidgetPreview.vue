<template>
  <div>
    <component
      :edit="isEdit"
      v-for="(widget,idx) in widgets"
      :key="idx"
      :is="widget"
      @click.native="update"
    ></component>
  </div>
</template>
<script>
import NavBar from "../dynamics_widgets/NavBarEdit";
import Container1 from "../dynamics_widgets/container1.cmp";
import Container2 from "../dynamics_widgets/container2.cmp";
import Empty from "../dynamics_widgets/empty.cmp";
import Header from "../dynamics_widgets/header.cmp";
import Img from "../dynamics_widgets/img.cmp";
import Txt from "../dynamics_widgets/txt.cmp";
import Video from "../dynamics_widgets/video.cmp";
export default {
  props: {
    widgets: Array
  },
  data() {
    return {
      isEdit: false
    };
  },
  methods: {
    update() {
      console.log("hi");
    }
  },
  created() {
    const param = this.$route.path;
    if (param.includes("editor")) this.isEdit = true;
    else this.isEdit = false;
  },
  components: {
    NavBar,
    Container1,
    Container2,
    Empty,
    Header,
    Img,
    Txt,
    Video
  }
};
</script>