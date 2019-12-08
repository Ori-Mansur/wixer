<template>
  <section
    class="container-twoCol container"
    @click="isEdit=!isEdit"
    :style="{backgroundImage: `url(${section.style.bcgImg})`,    backgroundColor: section.style.bcgColor, border: isBorder}"
  >
    <text-element v-for="(data, index) in section.data" :key="index" :data="data" :isEdit="isEdit"></text-element>
    <TextEditor @edit="editStyle" />

    <widget-editor :data="section" class="widget-editor-container" @remove="removeWidget"></widget-editor>
  </section>
</template>

<script>
import WidgetEditor from "../wixer_cmps/WidgetEditor";
import TextEditor from "../wixer_cmps/TextEditor";
import TextElement from "../elements/TextElement";

export default {
  props: {
    edit: Boolean,
    section: Object
  },
  created() {},
  data() {
    return {
      isEdit: false
    };
  },
  computed: {
    isBorder() {
      if (this.isEdit) return "1px solid blue";
      else return "";
    }
  },
  methods: {
    removeWidget(id) {
      this.$emit("remove", id);
    },
    editStyle(newStyle) {
      var style = JSON.parse(JSON.stringify(this.section.data[0].style));
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
        cardData: { style, idx: 0 },
        sectionId: this.section._id
      });
    }
  },
  components: {
    WidgetEditor,
    TextEditor,
    TextElement
  }
};
</script>
