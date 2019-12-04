<template>
  <div
    class="section-container"
    :style="{backgroundColor: section.style.bcgColor, backgroundImage: `url(${section.style.bcgImg})`}"
  >
    <WidgetEditor @setImg="setImg" :data="section" />
    {{sectionList}}
    <draggable class="dragArea list-group" v-model='sectionList' group="element">
      <div class="list-group-item" v-for="(element,idx) in sectionList" :key="idx">
        <component :key="idx" :is="element.type" :data="element.data" :contenteditable="true"></component>
      </div>
      <div>
        <unicon name="plus" fill="gray" class="icon" />
      </div>
    </draggable>
  </div>
</template>
<script>
import Txt from "./Txt.vue";
import WidgetEditor from "../wixer_cmps/WidgetEditor";
import draggable from "vuedraggable";
export default {
  props: {
    section: Object
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
    }
  },
  methods: {
    setImg(event) {
      this.$emit("setImg", { event, sectionId: this.section._id });
    },
    setSection() {
      this.$emit("setSection", this.section);
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
    Txt
  }
};
</script>
<style lang="scss" scoped>
.section-container {
  position: relative;
  min-height: 300px;
  border: 1px dotted black;
}
</style>