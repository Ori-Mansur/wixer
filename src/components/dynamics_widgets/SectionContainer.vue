<template>
  <div
    class="section-container flex column container"
    @click="setGroup(section._id)"
    :class="{'border-edit': isEdit}"
    :style="{backgroundColor: section.style.bcgColor,
     backgroundImage: `url(${section.style.bcgImg})`}"
  >
    {{section._id}}
    <WidgetEditor @setImg="setImg" :data="section" />
    <draggable class="dragArea list-group" v-model="List" :group="section._id" 
    @change="add($event)"
    :sort="isEdit">
      <div v-if="isEdit && !section.data[0]" class="placeholder">
        <unicon name="plus" fill="gray" class="icon" />
      </div>
    </draggable>
    <div class="list-group-item" v-for="(element,idx) in section.data" :key="idx">
      <component :key="idx"
       @saveMapData="saveMapData" 
       @edit="editStyle"
      :is="element.type" 
      :data="element"></component>
    </div>
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
    isEdit: Boolean,
    idx: Number
  },
  computed: {
    List: {
      get() {
        if (this.isEdit) {
          return this.$store.state.WapStore.currWap.sections[this.idx].data;
        }
      },
      set(value) {
        // this.$store.commit("addElement", { value, idx: this.idx });
      }
    },
    group() {
      const group = this.$store.getters.group;
    }
  },
  methods: {
    setImg(event) {
      this.$emit("setImg", { event, sectionId: this.section._id });
    },
    saveMapData(newData) {
      this.$store.commit({
        type: "saveSectionData",
        newData,
        sectionId: this.section._id
      });
    },
    setGroup(sectionId) {
      this.$store.commit({ type: "setGroup", group: sectionId });
    },
    add(evt) {
      this.$emit("addEl",{sectionIdx:this.idx,data: evt.added});
    },
    editStyle(newStyle) {
      console.log('kkk',newStyle);
      console.log(this.section);
      
      const txtStyle = this.section.data.find(el=>el._id===newStyle.dataId).style 
      var style=JSON.parse(JSON.stringify(txtStyle))
      console.log(style);
      
      if (newStyle.style.type === "bold") {
        style.fontWeight = style.fontWeight === "normal" ? "bold" : "normal";
      } else if (newStyle.style.type === "italicize") {
        style.fontStyle = style.fontStyle === "normal" ? "italic" : "normal";
      } else if (newStyle.style.type === "fontFamily")
        style.fontFamily = newStyle.font;
      else if (newStyle.style.type === "color") style.color = newStyle.color;
      else if (newStyle.style.type === "minus") style.fontSize += -2;
      else if (newStyle.style.type === "plus") style.fontSize += 2;
      console.log('after',style);
      
      // this.$emit("changeStyle", {
      //   cardData: { style, idx: this.selectedTxt },
      //   sectionId: this.section._id
      // });
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