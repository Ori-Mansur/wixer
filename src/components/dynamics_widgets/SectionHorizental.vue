<template>
  <div
    class="section-container container"
    :class="{'border-edit': over}"
    :style="{backgroundColor: section.style.bcgColor,
     backgroundImage: `url(${section.style.bcgImg})`}"
  >
    <WidgetEditor @setImg="setImg" :data="section" />
    <draggable
      class="dragArea list-group-h"
      :list="section.data"
      :group="{ name: 'group', pull:false , put: true}"
      :sort="isEdit"
    >
      <div class="list-group-item-h" v-for="(element,idx) in section.data" :key="idx">
        <component
          :key="idx"
          @saveMapData="saveMapData(section._id)"
          :is="element.type"
          :data="element"
        ></component>
      </div>
      <div v-if="isEdit && !section.data[0] " class="placeholder">
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
import FormV from "./FormV";
export default {
  props: {
    section: Object,
    isEdit: Boolean
  },
  data() {
    return {
      over: false
    };
  },
  computed: {
    sectionList: {
      get() {
        return this.$store.getters.currSectionData;
      },
      set(value) {
        this.$store.commit("addElement", value);
      }
    }
  },
  methods: {
    setImg(event) {
      this.$emit("setImg", { event, sectionId: this.section._id });
    },

    async addEl(data) {
      console.log("bbbbbbb", data);
      this.over = false;
      await this.$store.dispatch({
        type: "addWidget",
        data: { el: data.widget, sectionId: this.section._id }
      });
    },
    saveMapData({ newData, sectionId }) {
      this.$store.commit({ type: "saveSectionData", newData, sectionId });
    }
  },
  components: {
    draggable,
    WidgetEditor,
    TextEl,
    Txt,
    Img,
    Video,
    Map,
    FormV
  }
};
</script>
<style lang="scss" scoped>
.section-container {
  position: relative;
  padding: 10px;
  min-height: 200px;

  .placeholder {
    padding: 50px;
    margin: auto auto;
    background-color: gainsboro;
    text-align: center;
  }
  .list-group-item-h {
    height: 100%;
    flex-grow: 1;
  }
  .list-group-h {
    height: 100%;
    display: flex;
  }
}
</style>