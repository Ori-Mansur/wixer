<template>
  <section 
    class="header-container flex column justify-center align-center background"
    :style="{backgroundImage: `url(${section.style.bcgImg})`,backgroundColor: section.style.bcgColor,
    height: section.style.height + 'px', border: isBorder}">
    <widget-editor 
      :data="section"
      @setImg="setImg"
       @remove="removeWidget" ></widget-editor>
<TextEditor @edit="editStyle"/>
    <text-element v-for="(data, idx) in section.data" 
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
      pos: { x: 0, y: 0 },
       selectedTxt: 0
    };
  },
  
  computed:{
    isBorder(){
      if (this.isEdit) return '1px solid blue'
      else return ''
    }
  },
  methods: {
    setImg(event) {
      this.$emit("setImg", { event, sectionId: this.section._id });
    },
    removeWidget(id) {
      this.$emit("remove", id);
    },
    saveText(value){
      // console.log('jjhjjj',value);
      this.$emit('saveText',{txt:value,sectionId:this.section._id})
    },
    selectedText(idx) {
      this.selectedTxt = idx;
      console.log(this.selectedTxt);
    },
    editStyle(newStyle) {
      var style = JSON.parse(
        JSON.stringify(this.section.data[this.selectedTxt].style)
      );
      if (newStyle.type === "bold") {
        style.fontWeight = style.fontWeight === "normal" ? "bold" : "normal";
      } else if (newStyle.type === "italicize") {
        style.fontStyle = style.fontStyle === "normal" ? "italic" : "normal";
      } else if (newStyle.type === "fontFamily") style.fontFamily = newStyle.font;
      else if(newStyle.type === 'color')style.color=newStyle.color
      else if(newStyle.type=== 'minus')style.fontSize+=-2
      else if(newStyle.type=== 'plus')style.fontSize+=2
      console.log(style);
      this.$emit("changeStyle",{cardData:{style,idx:this.selectedTxt},sectionId:this.section._id});
    },
  },
  components: {
    WidgetEditor,
    TextEditor,
    TextElement
  }
};
</script>
<style lang="scss" >
.header-container {
  margin-bottom: 10px;
  position:relative;
}

img {
  width: 100px;
  height: auto;
}
.background {
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

