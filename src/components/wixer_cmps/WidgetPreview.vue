<template>
  <section>
    <draggable class="dragArea list-group" v-model="myList" group="people">
      <div class="list-group-item" v-for="(element,idx) in myList" :key="idx">
        <component
          :key="idx"
          :is="element.type"
          :section="element"
          @setImg="setImg"
          @click.native="setSection(element)"
          class="widget-container"
        ></component>
      </div>
      <div class="placeholder-widget">
        <unicon name="plus" fill="gray" class="icon" />
      </div>
    </draggable>
  </section>
</template>
<script>
import draggable from "vuedraggable";
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
import CardContainer from "../dynamics_widgets/CardContainer";
import CardsContainer from "../dynamics_widgets/CardsContainer";

export default {
  props: {
    widgets: Array
  },
  data() {
    return {
      isEdit: false
    };
  },
  computed: {
    myList: {
      get() {
        return this.$store.getters.currWapSections;
      },
      set(value) {
        this.$store.commit("addSection", value);
      }
    }
  },
  methods: {
    setImg(data) {
      this.$store.dispatch({ type: "setBcgImg", data });
    },
    setSection(section) {
      this.$store.commit({ type: "setSection", section });
    }
  },
  created() {
    const param = this.$route.path;
    if (param.includes("editor")) this.isEdit = true;
    else this.isEdit = false;
    // console.log(this.widgets)
  },
  components: {
    draggable,
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
    CardContainer,
    CardsContainer
  }
};
</script>
<style lang="scss" scope>
.widget-container {
  width: 100%;
}
</style>