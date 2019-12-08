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
import NavBar from "../components/dynamics_widgets/NavBarEdit";
import Paragraph from "../components/dynamics_widgets/Paragraph";
import HeaderBig from "../components/dynamics_widgets/HeaderBig";
import Img from "../components/dynamics_widgets/Img";
import Map from "../components/dynamics_widgets/Map";
import Txt from "../components/dynamics_widgets/Txt";
import Video from "../components/dynamics_widgets/Video";
import Form from "../components/dynamics_widgets/Form";
import FormInline from "../components/dynamics_widgets/FormInline";
import FrameFacebook from "../components/elements/FrameFacebook";
import SectionContainer from "../components/dynamics_widgets/SectionContainer";
import SectionHorizental from "../components/dynamics_widgets/SectionHorizental";
import CardsContainer from "../components/dynamics_widgets/CardsContainer";

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
        const wap = await this.$store.dispatch({ type: "loadWap", id });
        this.wap = wap;
      }
    }
  },
  async created() {
    const id = this.$route.params.id;
    if (id) {
      const wap = await this.$store.dispatch({ type: "loadWap", id });
      this.wap = wap;
      console.log(this.wap);
    }
  },
  components: {
    SectionContainer,
    SectionHorizental,
    CardsContainer,
    NavBar,
    Paragraph,
    HeaderBig,
    Img,
    Map,
    Txt,
    Video,
    Form,
    FormInline,
    FrameFacebook
  }
};
</script>