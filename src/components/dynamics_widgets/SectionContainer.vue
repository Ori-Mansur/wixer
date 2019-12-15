<template>
  <section
    class="section-container flex column container"
    :class="{'border-edit': isEdit}"
    :style="{backgroundColor: section.style.bcgColor,
     backgroundImage: `url(${section.style.bcgImg})`}"
  >
    <WidgetEditor
      @setImg="setImg"
      :data="section"
      @changePos="changePos"
      @removeSection="removeSection"
    />
    <draggable
      class="dragArea list-group"
      :list="modifySection.data"
      group="element"
      :sort="isEdit"
      @add="add"
    >
      <div v-if="isEdit && !modifySection.data[0]" class="placeholder">
        <unicon name="plus" fill="gray" class="icon" />
      </div>
      <div class="list-group-item" v-for="(element,idx) in modifySection.data" :key="idx">
        <component
          :key="idx"
          @updateElement="updateElement"
          @edit="editStyle"
          @saveText="saveText"
          @remove="remove(idx)"
          :is="element.type"
          :data="element"
        ></component>
      </div>
    </draggable>
  </section>
</template>
<script>
import WidgetEditor from "../wixer_cmps/WidgetEditor";
import draggable from "vuedraggable";
import Txt from "../elements/Txt";
import TextEl from "../elements/TextElement";
import Img from "../elements/ImageElement";
import Video from "../elements/Video";
import Card from "../elements/Card";
import CardHorizontal from "../elements/CardHorizontal";

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
    updateElement() {
      this.saveSection();
    },
    add(evt) {
      const newElement = evt.item._underlying_vm_;
      this.$emit("addElement", newElement, this.section._id);
    },
    removeSection(id) {
      this.$emit("removeSection", id);
    },
    remove(idx) {
      this.modifySection.data.splice(idx, 1);
      this.saveSection();
    },
    changePos(diff) {
      this.$emit("changePos", diff, this.modifySection);
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
    }
  },
  components: {
    draggable,
    WidgetEditor,
    TextEl,
    Txt,
    Img,
    Video,
    Card,
    CardHorizontal
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