<template>
  <section
    class="section-container flex column align-center justify-center"
    :class="{'border-edit': isEdit}"
    :style="{backgroundColor: modifySection.style.bcgColor,
     backgroundImage: `url(${modifySection.style.bcgImg})`,
     height: modifySection.style.height + 'vh'}"
  >
    <WidgetEditor @setImg="setImg" :data="section" />
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
export default {
  props: {
    section: Object,
    isEdit: Boolean,
    idx: Number
  },
  created(){
  },
  data() {
    return {
      modifySection: JSON.parse(JSON.stringify(this.section))
    };
  },
  methods: {
    async setImg(event) {
     const img= await this.$store.dispatch({ type: "setBcgImg",data: {
        event,
        sectionId: this.section._id
      } });
     this.modifySection.style.bcgImg = img;
     this.saveSection();
    },
    saveText(value) {
      console.log('og section', this.section)
            console.log('og section', this.modifySection)


      const idx = this.modifySection.data.findIndex(
        data => data._id === value.id
      );
      this.modifySection.data[idx].text = value.txt;
            console.log(this.modifySection)


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
  watch: {
    section(to) {
      console.log('jjjj',to);
      
      this.modifySection = JSON.parse(JSON.stringify(to));
    }
  },
  components: {
    draggable,
    WidgetEditor,
    TextEl,
    Txt
  }
};
</script>
<style lang="scss" scoped>
.section-container {
  position: relative;
  padding: 10px;
  background-size: cover;

  .placeholder {
    padding: 50px;
    margin: auto auto;
    background-color: gainsboro;
    text-align: center;
  }
  // .list-group-item {
  //   height: 100%;
  // }
}
</style>