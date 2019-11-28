<template>
  <div>
    <component
      :edit="isEdit"
      v-for="(widget,idx) in widgets"
      :key="idx"
      :is="widget.type"
      :value="widget"
    ></component>
  </div>
</template>
<script>
import NavBar from "../dynamics_widgets/NavBarEdit";
import Container1 from "../dynamics_widgets/container1.cmp";
import Container2 from "../dynamics_widgets/container2.cmp";
import Container3 from "../dynamics_widgets/container3.cmp";
import VideoAndTxt from "../dynamics_widgets/premade_container/vidAndTxt.cmp";
import Empty from "../dynamics_widgets/empty.cmp";
import Header from "../dynamics_widgets/header.cmp";
import Img from "../dynamics_widgets/img.cmp";
import Txt from "../dynamics_widgets/txt.cmp";
import Video from "../dynamics_widgets/video.cmp";
import Form from "../dynamics_widgets/form.cmp";

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
    // update(value) {
    //   console.log("value");
    // }
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
    Container3,
    VideoAndTxt,
    Empty,
    Header,
    Img,
    Txt,
    Video,
    Form
  }
};
</script>