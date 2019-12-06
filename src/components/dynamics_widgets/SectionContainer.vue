<template>
  <div
    class="section-container flex column"
    :style="{backgroundColor: section.style.bcgColor,
     backgroundImage: `url(${section.style.bcgImg})`}"
  >
    <WidgetEditor @setImg="setImg" :data="section" />
    <draggable class="dragArea list-group" :list="section.data" group="group" :sort="isEdit">
      <div class="list-group-item" v-for="(element,idx) in section.data" :key="idx">
        <component :key="idx" 
        @saveMapData="saveMapData"
        :is="element.type" 
        :data="element" >
        </component>
      </div>
      <div v-if="isEdit && !section.data[0]" class="placeholder">
        <unicon name="plus" fill="gray" class="icon" />
      </div>
    </draggable>
  </div>
</template>
<script>
import WidgetEditor from "../wixer_cmps/WidgetEditor";
import draggable from "vuedraggable";
import Txt from "./Txt.vue";
import TextEl from "../elements/TextElement";
import Img from "./Img";
import Video from "./Video";
import Map from "./Map";
export default {
  props: {
    section: Object,
    isEdit: Boolean
  },
  methods: {
    setImg(event) {
      this.$emit("setImg", { event, sectionId: this.section._id });
    },
    saveMapData(newData){
      this.$store.commit({type: "saveSectionData", newData, sectionId: this.section._id });

    }
  },
  components: {
    draggable,
    WidgetEditor,
    TextEl,
    Txt,
    Img,
    Video,
    Map
  }
};
</script>
<style lang="scss" scoped>
.section-container {
  position: relative;
  padding: 10px;
  min-height: 200px;
  border: 1px dotted black;

  .placeholder {
    padding: 50px;
    margin: auto auto;
    background-color: gainsboro;
    text-align: center;
  }
  .list-group-item {
    height: 100%;
  }
}
</style>