<template>
  <section
    class="section-container flex row container"
    :class="{'border-edit': isEdit}"
    :style="{backgroundColor: section.style.bcgColor,
     backgroundImage: `url(${section.style.bcgImg})`}"
  >
    <WidgetEditor @setImg="setImg" :data="section" @changePos="changePos" @removeSection="removeSection"/>
    <draggable
      class="dragArea list-group flex row"
      :list="modifySection.data"
      group="element"
      :sort="isEdit"
    >
      <div v-if="isEdit && !modifySection.data[0]" class="placeholder">
        <unicon name="plus" fill="gray" class="icon" />
      </div>
      <div class="list-group-item" v-for="(element,idx) in modifySection.data" :key="idx">
        <component
          :key="idx"
          :idx="idx"
          @edit="editStyle"
          @save="saveCard"
          @saveText="saveText"
          :is="element.type"
          :data="element"
        ></component>
      </div>
    </draggable>
  </section>
</template>
<script>
// import utils from "../../services/UtilsService.js";
import WidgetEditor from "../wixer_cmps/WidgetEditor";
import draggable from "vuedraggable";
import Txt from "../elements/Txt";
import TextEl from "../elements/TextElement";
import Img from "../elements/ImageElement";
import Video from "../elements/Video";
import Card from "../elements/Card";
export default {
  props: {
    section: Object,
    isEdit: Boolean,
    idx: Number
  },
  data() {
    return {
      modifySection: JSON.parse(JSON.stringify(this.section))
    };
  },
  methods: {
    removeSection(id) {
      this.$emit("removeSection", id);
    },
    changePos(diff){
      this.$emit('changePos', diff, this.modifySection)
    },
    async setImg(event) {
      const img = await this.$store.dispatch({
        type: "setBcgImg",
        data: {
          event,
          sectionId: this.section._id
        }
      });
      this.modifySection.style.bcgImg = img;
      this.saveSection();
    },
    saveText(value) {
      const idx = this.modifySection.data.findIndex(
        data => data._id === value.id
      );
      this.modifySection.data[idx].text = value.txt;
      this.saveSection();
    },
    saveSection() {
      this.$emit("save", JSON.parse(JSON.stringify(this.modifySection)));
    },
    editStyle(newStyle) {
      const txtStyle = this.modifySection.data.find(
        el => el._id === newStyle.dataId
      ).style;
      var style = txtStyle;

      if (newStyle.style.type === "bold") {
        style.fontWeight = style.fontWeight === "normal" ? "bold" : "normal";
      } else if (newStyle.style.type === "italicize") {
        style.fontStyle = style.fontStyle === "normal" ? "italic" : "normal";
      } else if (newStyle.style.type === "fontFamily")
        style.fontFamily = newStyle.style.font;
      else if (newStyle.style.type === "color")
        style.color = newStyle.style.color;
      else if (newStyle.style.type === "minus") style.fontSize += -2;
      else if (newStyle.style.type === "plus") style.fontSize += 2;
      else if (newStyle.style.type === "center") style.txtAlign = "center";
      else if (newStyle.style.type === "left") style.txtAlign = "left";
      else if (newStyle.style.type === "right") style.txtAlign = "right";
      newStyle.style = style;
      this.saveSection();
    },
    saveCard(card) {
      console.log(card);
      this.modifySection.data.splice(card.idx, 1, card.data);
      this.saveSection();
    }
  },
  components: {
    draggable,
    WidgetEditor,
    TextEl,
    Txt,
    Img,
    Video,
    Card
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
    flex-grow: 1;
    height: 100%;
  }
}
</style>