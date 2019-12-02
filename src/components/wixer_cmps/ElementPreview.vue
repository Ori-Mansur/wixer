<template>
  <section class="element-preview-container">
    <component
      v-for="(element,idx) in elements"
      :key="idx"
      :is="element.type"
      :value="element"
      class="element-container"
      @remove="removeElement"
      @edit="editElement"
    ></component>
  </section>
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
import About from "../dynamics_widgets/About";

export default {
  props: {
    elements: Array
  },
  data() {
    return {
      isEdit: false
    };
  },
  methods: {
    removeElement(id) {
      this.$emit("remove", id);
    },
    editElement(element) {
      console.log(element);
      this.$emit("edit", element);
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
    About
  }
};
</script>
