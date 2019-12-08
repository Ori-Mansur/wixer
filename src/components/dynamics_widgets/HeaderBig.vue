<template>
  <section
    class="header-container flex column justify-center align-center background"
    :class="{'border-edit': isEdit}"
    :style="{backgroundImage: `url(${section.style.bcgImg})`,
    backgroundColor: section.style.bcgColor,
    height: section.style.height + 'vh'}"
  >
    <widget-editor :data="section" @setImg="setImg" @remove="removeWidget"></widget-editor>
    <text-element
      v-for="(data, idx) in modifySection.data"
      @saveText="saveText"
      @click.native="selectedText(idx)"
      @edit="editStyle"
      :key="idx"
      :data="data"
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
      this.modifySection.data[this.selectedTxt].text=value.txt
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
      console.log('kkk');
      console.log(newStyle);
      var txtStyle= this.modifySection.data[this.selectedTxt].style 
      var style=txtStyle
       if (newStyle.style.type === "bold") {
        style.fontWeight = style.fontWeight === "normal" ? "bold" : "normal";
      } else if (newStyle.style.type === "italicize") {
        style.fontStyle = style.fontStyle === "normal" ? "italic" : "normal";
      } else if (newStyle.style.type === "fontFamily")
        style.fontFamily = newStyle.style.font;
      else if (newStyle.style.type === "color") style.color = newStyle.style.color;
      else if (newStyle.style.type === "minus") style.fontSize += -2;
      else if (newStyle.style.type === "plus") style.fontSize += 2;
      newStyle.style=style
      this.$emit("changeStyle", {
        cardData: newStyle,  
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
