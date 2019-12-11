<template>
  <section>
    <draggable class="dragArea list-group" v-model="myList" group="people" @change="add($event)">
      <div class="list-group-item" v-for="(element,idx) in sections" :key="idx">
        <component
          :isEdit="isEdit"
          :key="idx"
          :idx="idx"
          :is="element.type"
          :section="element"
          @removeSection="removeSection"
          @save="saveSection"
          @saveMapData="saveMapData"
          @addEl="addEl"
          @setCardImg="setCardImg"
          @changeStyle="changeStyle"
          @saveText="saveText"
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
import NavBar from "../dynamics_widgets/NavBarEdit";
import Paragraph from "../dynamics_widgets/Paragraph";
import Header from "../dynamics_widgets/Header";
import Map from "../dynamics_widgets/Map";
import Form from "../dynamics_widgets/Form";
import FormInline from "../dynamics_widgets/FormInline";
import FrameFacebook from "../elements/FrameFacebook";
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
      isEdit: false,
      newIdx: ""
    };
  },
  computed: {
    sections() {
      return this.$store.getters.currWapSections;
    },
    myList: {
      get() {
        return this.$store.getters.currWapSections;
      },
      set() {}
    }
  },
  methods: {
    removeSection(id){
      this.$store.commit({ type: "removeSection", sectionId:id });
    },
    saveMapData(newData) {
      this.$store.commit({ type: "saveSectionData", newData });
    },
    saveSection(section) {
      this.$store.commit({ type: "saveSection", section });
    },
    setCardImg(data) {
      this.$store.dispatch({ type: "setCardImg", data });
    },
    saveText(data) {
      this.$store.commit({ type: "updateTxt", data });
    },
    changeStyle(data) {
      this.$store.commit({ type: "updateStyle", data });
    },
    add(evt) {
      this.$store.commit("addSection", evt.added);
    },
    addEl(data) {
      this.$store.commit("addElement", data);
    }
  },
  created() {
    const param = this.$route.path;
    if (param.includes("editor")) this.isEdit = true;
    else this.isEdit = false;
  },
  components: {
    draggable,
    NavBar,
    Paragraph,
    Header,
    Map,
    Form,
    FormInline,
    FrameFacebook,
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
