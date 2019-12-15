<template>
  <section>
    <draggable
      class="dragArea list-group"
      v-model="sectionsList"
      group="people"
      @change="add($event)"
    >
      <div
        class="list-group-item"
        v-for="(section, idx) in sections"
        :key="section._id"
      >
        <component
          :isEdit="isEdit"
          :key="section._id"
          :idx="idx"
          :is="section.type"
          :section="section"
          @changePos="changePos"
          @removeSection="removeSection"
          @save="saveSection"
          @saveMapData="saveMapData"
          @addElement="addEl"
          @setCardImg="setCardImg"
          @changeStyle="changeStyle"
          @saveText="saveText"
          class="widget-container"
        ></component>
      </div>
      <div class="placeholder-widget">
        <unicon name="plus" fill="gray" class="icon" />
        <h1>Drag And Drop In Here!</h1>
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
    sections: Array
  },
  created() {
    const param = this.$route.path;
    if (param.includes("editor")) this.isEdit = true;
    else this.isEdit = false;
    this.listToEdit();
  },
  data() {
    return {
      isEdit: false,
      newIdx: "",
      sectionsList:null
    };
  },
  computed: {
    // sections() {
    //   return this.$store.getters.currWapSections;
    // },
    // myList: {
    //   get() {
    //     return this.$store.getters.currWapSections;
    //   },
    //   set() {}
    // }
  },
  methods: {
    changePos(diff, sectionToMove){
      this.$store.commit({type: "changePos" ,moveBy: diff, sectionToMove})
    },
    listToEdit(){
      this.sectionsList = JSON.parse(JSON.stringify(this.sections))
    },
    removeSection(id) {
      this.$store.commit({ type: "removeSection", sectionId: id });
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
      // this.$store.commit({ type: "updateTxt", data });
      console.log(data)
    },
    changeStyle(data) {
      this.$store.commit({ type: "updateStyle", data });
    },
    add(evt) {
      console.log(evt)
      this.$store.commit("addSection", evt.added);
    },
    addEl(newElement, sectionId) {
      console.log(newElement,sectionId)
      this.$store.commit({type:"addElement", newElement, sectionId});
    }
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
