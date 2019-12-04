<template>
  <section 
    class="header-container flex column justify-center align-center background"
    :style="{backgroundImage: `url(${section.style.bcgImg})`,backgroundColor: section.style.bcgColor,
    height: section.style.height + 'px', border: isBorder}">
    <widget-editor 
      :data="section"
      class="widget-editor-container" @remove="removeWidget" ></widget-editor>

    <text-element v-for="(data, idx) in section.data" 
    @saveText="saveText"
    :key="idx" 
    :data="JSON.parse(JSON.stringify(data))"
    ></text-element>
  </section>
</template>
<script>
import WidgetEditor from "../wixer_cmps/WidgetEditor";
// import TextEditor from "../wixer_cmps/TextEditor";
import TextElement from "../elements/TextElement";

export default {
  props: {
    // edit: Boolean,
    section: Object
  },
  data() {
    return {
      pos: { x: 0, y: 0 },
      // isEdit: false,
    };
  },
  created() {
    const param = this.$route.path;
    if (param.includes("editor")) this.isEditer = true;
    else this.isEditer = false;
  },
  computed:{
    isBorder(){
      if (this.isEdit) return '1px solid blue'
      else return ''
    }
  },
  methods: {
    removeWidget(id) {
      this.$emit("remove", id);
    },
    saveText(value){
      // console.log('jjhjjj',value);
      this.$emit('saveText',{txt:value,sectionId:this.section._id})
      

    }
  },
  components: {
    WidgetEditor,
    // TextEditor,
    TextElement
  }
};
</script>
<style lang="scss">
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

