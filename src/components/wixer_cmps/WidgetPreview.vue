<template>
  <section>
    <draggable class="dragArea list-group" v-model="myList"  group="people">
      <div class="list-group-item" v-for="(element,idx) in myList" :key="idx">
        <component
          :isEdit="isEdit"
          :key="idx"
          :is="element.type"
          :section="element"
          @saveMapData="saveMapData"
          @addEl="addEl"
          @setImg="setImg"
          @setCardImg="setCardImg"
          @changeStyle="changeStyle"
          @saveText="saveText"
          @save="saveSection"
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
import HeaderBig from "../dynamics_widgets/HeaderBig";
import Img from "../dynamics_widgets/Img";
import Map from "../dynamics_widgets/Map";
import Txt from "../dynamics_widgets/Txt";
import Video from "../dynamics_widgets/Video";
import Form from "../dynamics_widgets/Form";
import FormInline from "../dynamics_widgets/FormInline";
import About from "../dynamics_widgets/About";
import FrameSurfe from "../dynamics_widgets/surfes_web/FrameFacebook";
import SectionContainer from "../dynamics_widgets/SectionContainer";
import SectionHorizental from "../dynamics_widgets/SectionHorizental";
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
    saveMapData(newData){
      this.$store.commit({type: "saveSectionData", newData });

    },
    addEl(sectionToEdit){
            this.$store.commit({type:"addElement", sectionToEdit})

    },
    showChange(added){
      console.log(added)
    },
    setImg(data) {
      this.$store.dispatch({ type: "setBcgImg", data });
    },
    setCardImg(data) {
      this.$store.dispatch({ type: "setCardImg", data });
    },
    saveText(data) {
      console.log("pre", data);
      this.$store.commit({ type: "updateTxt", data });
    },
    changeStyle(data) {
      this.$store.commit({ type: "updateStyle", data });
    },
    setSection(){
console.log('rrrr');

this.$store.commit({type:'print',data:'hhhhhh'})
    },
   
  },
  created() {
    const param = this.$route.path;
    if (param.includes("editor")) this.isEdit = true;
    else this.isEdit = false;
  },
  components: {
    draggable,
    VideoAndTxt,
    TxtAndMap,
    NavBar,
    Container1,
    Container3,
    HeaderBig,
    Img,
    Map,
    Txt,
    Video,
    Form,
    FormInline,
    About,
    FrameSurfe,
    SectionContainer,
    SectionHorizental,
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