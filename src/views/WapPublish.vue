<template>
  <div v-if="wap" :style="{backgroundColor: wap.style.bcgColor, fontColor: wap.style.txtColor}">
    <component
      v-for="(widget, idx) in wap.widgets"
      :key="idx"
      :is="widget.type"
      :value="widget"
      :contenteditable="false"
    ></component>
  </div>
</template>
<script>
import NavBar from "../components/dynamics_widgets/NavBarEdit";
import Container1 from "../components/dynamics_widgets/container1.cmp";
import Container2 from "../components/dynamics_widgets/container2.cmp";
import Container3 from "../components/dynamics_widgets/container3.cmp";
import Empty from "../components/dynamics_widgets/empty.cmp";
import Header from "../components/dynamics_widgets/header.cmp";
import Img from "../components/dynamics_widgets/img.cmp";
import Txt from "../components/dynamics_widgets/txt.cmp";
import Video from "../components/dynamics_widgets/video.cmp";
import VideoAndTxt from "../components/dynamics_widgets/premade_container/vidAndTxt.cmp";
import Form from "../components/dynamics_widgets/form.cmp";

export default {
  data() {
    return {
      wap: null
    };
  },
  methods: {
    async setWap() {
      const id = this.$route.params.id;
      if (id) {
        const wap = await this.$store.dispatch({ type: "wapById", id });
        this.wap = wap;
      }
    }
  },
  async created() {
    const id = this.$route.params.id;
    if (id) {
      const wap = await this.$store.dispatch({ type: "wapById", id });
      this.wap = wap;
    }
  },
  components: {
    NavBar,
    Container1,
    Container2,
    Container3,
    Empty,
    Header,
    Img,
    Txt,
    Video,
    VideoAndTxt,
    Form
  }
};
</script>