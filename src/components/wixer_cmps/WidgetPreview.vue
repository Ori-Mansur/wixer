<template>
  <div>
    <component
      :isEdit="isEdit"
      v-for="(widget,idx) in widgets"
      :key="idx"
      :is="widget.type"
      :value="widget"
      class="widget-container"
      @remove="removeWidget"
      @edit="editWidget"
    ></component>
  </div>
</template>
<script>
import VideoAndTxt from "../dynamics_widgets/premade_container/VidAndTxt";
import TxtAndMap from "../dynamics_widgets/premade_container/TxtAndMap";
import NavBar from "../dynamics_widgets/NavBarEdit";
import Container1 from "../dynamics_widgets/Container1";
import Container3 from "../dynamics_widgets/Container3";
import Empty from "../dynamics_widgets/Empty";
import HeaderBig from "../dynamics_widgets/HeaderBig";
import HeaderSmall from "../dynamics_widgets/HeaderSmall";
import Img from "../dynamics_widgets/Img";
import Txt from "../dynamics_widgets/Txt";
import Video from "../dynamics_widgets/Video";
import Form from "../dynamics_widgets/Form";
import FormInline from "../dynamics_widgets/FormInline";
import About from "../dynamics_widgets/About";
import HeaderSurfe from "../dynamics_widgets/surfes_web/HeaderSurfe";
import MainCardSurfe from "../dynamics_widgets/surfes_web/MainCardSurfe";
import AboutUsSurfe from "../dynamics_widgets/surfes_web/AboutUsSurfe";
import OurTeamSurfe from "../dynamics_widgets/surfes_web/OurTeamSurfe";
import FrameSurfe from "../dynamics_widgets/surfes_web/FrameSurfe";
import SectionContainer from "../dynamics_widgets/SectionContainer";
import Card1 from "../dynamics_widgets/Card1";
import CardsContainer from "../dynamics_widgets/Cards-Container";

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
    // },
    removeWidget(id) {
      this.$emit("remove", id);
    },
    editWidget(widget) {
      console.log(widget);
      this.$emit("edit", widget);
    }
  },

  created() {
    const param = this.$route.path;
    if (param.includes("editor")) this.isEdit = true;
    else this.isEdit = false;
  },
  components: {
    VideoAndTxt,
    TxtAndMap,
    NavBar,
    Container1,
    Container3,
    Empty,
    HeaderBig,
    HeaderSmall,
    Img,
    Txt,
    Video,
    Form,
    FormInline,
    About,
    HeaderSurfe,
    MainCardSurfe,
    AboutUsSurfe,
    OurTeamSurfe,
    FrameSurfe,
    SectionContainer,
    Card1,
    CardsContainer
  }
};
</script>
<style lang="scss" scope>
.widget-container {
  width: 100%;
}
</style>