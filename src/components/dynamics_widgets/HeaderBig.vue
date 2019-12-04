<template>
  <section @click="isEdit=!isEdit"
    class="header-container flex column justify-center align-center background"
    :style="{backgroundImage: `url(${section.style.bcgImg})`,backgroundColor: section.style.bcgColor,
    height: section.style.height + 'px', border: isBorder}">

    <widget-editor 
      :widget="section"
      class="widget-editor-container" @remove="removeWidget" ></widget-editor>

    <text-element v-for="(data, index) in section.data" :key="index" :data="data" :isEdit="isEdit"></text-element>
  </section>
</template>
<script>
import WidgetEditor from "../wixer_cmps/WidgetEditor";
// import TextEditor from "../wixer_cmps/TextEditor";
import TextElement from "../elements/TextElement";

export default {
  props: {
    edit: Boolean,
    section: Object
  },
  data() {
    return {
      pos: { x: 0, y: 0 },
      isEdit: false,
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

