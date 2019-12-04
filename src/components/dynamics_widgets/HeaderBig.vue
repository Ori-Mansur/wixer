<template>
  <section @click="isEdit=!isEdit"
    class="header-container flex column justify-center align-center background"
    :style="{backgroundImage: `url(${value.style.bcgImg})`,backgroundColor: value.style.bcgColor,
    height: value.style.height + 'px', border: isBorder}">

    <widget-editor 
      :widget="value"
      class="widget-editor-container" @remove="removeWidget" @edit="editWidget" @newImage="newImage"></widget-editor>

    <text-element v-for="(data, index) in value.data" :key="index" :data="data" :isEdit="isEdit"></text-element>
  </section>
</template>
<script>
import WidgetEditor from "../wixer_cmps/WidgetEditor";
// import TextEditor from "../wixer_cmps/TextEditor";
import TextElement from "../elements/TextElement";

export default {
  props: {
    edit: Boolean,
    value: Object
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
    },
    editWidget() {
      this.$emit("edit", this.widgetToEdit);
    },
    newImage(imgUrl) {
      this.widgetToEdit.data.style.bcgImg = imgUrl;
      this.$emit("edit", this.widgetToEdit);
    },  
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

