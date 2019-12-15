<template>
  <section
    class="card-container flex column align-center"
    :style="{
      backgroundColor: data.style.bcgColor,
      border: isBorder
    }"
  >
    <image-element @click.prevent :styleData="data.style" class="ratio-16-9"></image-element>
    <text-element
      v-for="(data, idx) in data.data"
      :key="idx"
      :isEdit="isEdit"
      :data="data"
      @click.native="selectedText(idx)"
    ></text-element>
    <text-editor class="widget-editor-container" 
    :widget="data.data[selectedTxt]"
    @edit="editStyle" @remove="removeWidget"></text-editor>

  </section>
</template>

<script>
// import WidgetEditor from "../wixer_cmps/WidgetEditor";
import TextEditor from "../wixer_cmps/TextEditor";
import TextElement from "../elements/TextElement";
import ImageElement from "../elements/ImageElement";

export default {
  props: {
    edit: Boolean,
    data: Object,
    index: Number
  },
  created() {},
  data() {
    return {
      isEdit: false,
      selectedTxt: 0
    };
  },
  computed: {
    isBorder() {
      if (this.isEdit) return "1px solid blue";
      else return "";
    }
  },
  methods: {
    editStyle(newStyle) {
      var style = JSON.parse(
        JSON.stringify(this.data.data[this.selectedTxt].style)
      );
      if (newStyle.type === "bold") {
        style.fontWeight = style.fontWeight === "normal" ? "bold" : "normal";
      } else if (newStyle.type === "italicize") {
        style.fontStyle = style.fontStyle === "normal" ? "italic" : "normal";
      } else if (newStyle.type === "fontFamily") style.fontFamily = newStyle.font;
      else if(newStyle.type === 'color')style.color=newStyle.color
      else if(newStyle.type=== 'minus')style.fontSize+=-2
      else if(newStyle.type=== 'plus')style.fontSize+=2
      this.$emit("changeStyle",{style,idx:this.selectedTxt,id:this.data._id});
    },
     setImg(event) {
      this.$emit("setImg", { event,idx:this.index})
    },
    // removeWidget(id) {
    //   // this.$emit("removeWidget", this.data._id);
    // },
    selectedText(idx) {
      this.selectedTxt = idx;
    }
  },
  components: {
    TextEditor,
    TextElement,
    ImageElement
  }
};
</script>
<style lang="scss">
</style>
