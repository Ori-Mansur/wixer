<template>
  <section
    class="header-container flex column justify-center align-center background"
    :style="{
      backgroundImage: `url(${section.style.bcgImg})`,
      backgroundColor: section.style.bcgColor,
      height: 550 + 'px',
      border: isBorder
    }"
  >
    <widget-editor
      :data="section"
      @setImg="setImg"
      @remove="removeWidget"
    ></widget-editor>
    <TextEditor @edit="editStyle" />
    <text-element
      v-for="(data, idx) in section.data"
      class="header-inside"
      @saveText="saveText"
      @click.native="selectedText(idx)"
      :key="idx"
      :data="JSON.parse(JSON.stringify(data))"
    ></text-element>
  </section>
</template>
<script>
import WidgetEditor from "../wixer_cmps/WidgetEditor";
import TextElement from "../elements/TextElement";
import TextEditor from "../wixer_cmps/TextEditor";

export default {
  props: {
    section: Object
  },
  data() {
    return {
      pos: { x: "", y: "" },
      selectedTxt: 0,
      isEdit: false,
      isDown: false,
      modifySection: JSON.parse(JSON.stringify(this.section))
    };
  },

  computed: {
    isBorder() {
      if (this.isEdit) return "1px solid blue";
      else return "";
    },
    inside() {
      return "position: relative";
    }
  },
  methods: {
    setImg(event) {
      this.$emit("setImg", { event, sectionId: this.section._id });
    },

    setPos(ev){
      if(this.isDown){
this.pos.x=ev.offsetX
this.pos.y=ev.offsetY
        console.log(ev);
      }
    },
    removeWidget(id) {
      this.$emit("remove", id);
    },
    saveText(value) {

      this.modifySection.data[this.selectedTxt].text = value;
      console.log(this.modifySection.data[this.selectedTxt].text);
      this.saveSection();
      // this.$emit("saveText", { txt: value, sectionId: this.section._id });
    },
    saveSection() {
      console.log("sac", this.modifySection);

      this.$emit("save", this.modifySection);
    },
    selectedText(idx) {
      this.selectedTxt = idx;
    },
    editStyle(newStyle) {
      var style = this.modifySection.data[this.selectedTxt].style;
      if (newStyle.type === "bold") {
        style.fontWeight = style.fontWeight === "normal" ? "bold" : "normal";
      } else if (newStyle.type === "italicize") {
        style.fontStyle = style.fontStyle === "normal" ? "italic" : "normal";
      } else if (newStyle.type === "fontFamily")
        style.fontFamily = newStyle.font;
      else if (newStyle.type === "color") style.color = newStyle.color;
      else if (newStyle.type === "minus") style.fontSize += -2;
      else if (newStyle.type === "plus") style.fontSize += 2;
      this.$emit("changeStyle", {
        cardData: { style, idx: this.selectedTxt },
        sectionId: this.section._id
      });
    }
  },
  created() {
    if (this.$route.path.includes("editor")) this.isEdit = true;
    else this.isEdit = false;
  },
  watch: {
    $route() {
      if (this.$route.path.includes("editor")) this.isEdit = true;
      else this.isEdit = false;
    }
  },
  components: {
    WidgetEditor,
    TextEditor,
    TextElement
  }
};
</script>
<style lang="scss">
</style>
