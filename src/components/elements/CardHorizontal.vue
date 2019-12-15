<template>
  <section
    class="flex row space-around container"
    :class="{'border-edit': isEdit}"
    :style="{backgroundColor: modifySection.style.bcgColor,
     backgroundImage: `url(${modifySection.style.bcgImg})`}"
  >
    <!-- <WidgetEditor @setImg="setImg" :data="data" /> -->
    <draggable
      class="dragArea list-group"
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
        @setImg="setImg"
        @edit="editStyle"
        @saveText="saveText"
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
export default {
  props: {
    data: Object,
    isEdit: Boolean,
    idx: Number
  },
  data() {
    return {
      modifySection: JSON.parse(JSON.stringify(this.data))
    };
  },
  methods: {
    async setImg(data) {
     const img= await this.$store.dispatch({ type: "setBcgImg",data });
     this.modifySection.data[data.idx].data.url=img
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
      this.$emit("save",{data:JSON.parse(JSON.stringify(this.modifySection)),idx:this.idx});
    },
    editStyle(newStyle) {
      const txtStyle = this.modifySection.data.find(el => el._id === newStyle.dataId)
        .style;
      var style =txtStyle;

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
      else if (newStyle.style.type === "center") style.txtAlign = 'center';
      else if (newStyle.style.type === "left") style.txtAlign = 'left';
      else if (newStyle.style.type === "right") style.txtAlign = 'right';
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
    Video
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