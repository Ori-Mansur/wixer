<template>
  <div v-if="wap" :style="{backgroundColor: wap.style.bcgColor, fontColor: wap.style.txtColor}">
    <component
      v-for="(widget, idx) in wap.sections"
      :key="idx"
      :isEdit="isEdit"
      :is="widget.type"
      :section="widget"
      :contenteditable="false"
    ></component>
  </div>
</template>
<script>
import VideoAndTxt from "../components/dynamics_widgets/premade_container/VidAndTxt";
import TxtAndMap from "../components/dynamics_widgets/premade_container/TxtAndMap";
import NavBar from "../components/dynamics_widgets/NavBarEdit";
import Container1 from "../components/dynamics_widgets/Container1";
import Container3 from "../components/dynamics_widgets/Container3";
import HeaderBig from "../components/dynamics_widgets/HeaderBig";
import Img from "../components/dynamics_widgets/Img";
import Txt from "../components/dynamics_widgets/Txt";
import Video from "../components/dynamics_widgets/Video";
import Form from "../components/dynamics_widgets/Form";
import FormInline from "../components/dynamics_widgets/FormInline";
import About from "../components/dynamics_widgets/About";
import FrameSurfe from "../components/dynamics_widgets/surfes_web/FrameFacebook";
import SectionContainer from "../components/dynamics_widgets/SectionContainer";

export default {
  data() {
    return {
      wap: null,
      isEdit: false
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
      console.log( this.wap);
      
    }
  },
  components: {
    SectionContainer,
    VideoAndTxt,
    TxtAndMap,
    NavBar,
    Container1,
    Container3,
    HeaderBig,
    Img,
    Txt,
    Video,
    Form,
    FormInline,
    About,
    FrameSurfe
  }
};
</script>