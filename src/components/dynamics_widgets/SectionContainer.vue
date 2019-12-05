<template>
  <div
    class="section-container"
    :style="{backgroundColor: section.style.bcgColor,
     backgroundImage: `url(${section.style.bcgImg})`}"
  >
    <WidgetEditor @setImg="setImg" :data="section" />
    <draggable class="dragArea list-group" :list="section.data"  group="group" :sort="isEdit" >
      <div class="list-group-item" v-for="(element,idx) in section.data" :key="idx">
        <component :key="idx" 
        :is="element.type" 
        :data="element" 
       >
        </component>
      </div>
      <div v-if="isEdit" class="placeholder">
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
    isEdit:Boolean
  },
  data() {
    return {
      over: false
    };
  },
  computed: {
    sectionList: {
      get() {
        return this.$store.getters.currSectionData
      },
      set(value) {
        this.$store.commit('addElement', value)
      }
    },
    
  },
  methods: {
    setImg(event) {
      this.$emit("setImg", { event, sectionId: this.section._id });
    },
    print(){
console.log('pppppp');

    },
    async addEl(data) {
      console.log("bbbbbbb", data);
      this.over = false;
      await this.$store.dispatch({
        type: "addWidget",
        data: { el: data.widget, sectionId: this.section._id }
      });
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
  min-height: 300px;
  border: 1px dotted black;
 
  .placeholder{
    padding: 50px;
    margin: auto auto;
    background-color: gainsboro;
    text-align: center;
  }
  .list-group-item{
    height: 100%;
  }
}
</style>