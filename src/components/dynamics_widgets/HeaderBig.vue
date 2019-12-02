<template>
  <section
    v-if="value"
    class="header-container flex align-center justify-center"
    :style="{
      backgroundImage: `url(${widgetToEdit.data.style.bcgImg})`,backgroundColor: widgetToEdit.data.style.bcgColor,
      height: widgetToEdit.data.style.height + 'px'
    }"
  >
    <widget-editor
      :widget="widgetToEdit"
      class="widget-editor-container"
      @remove="removeWidget"
      @edit="editWidget"
      @newImage="newImage"
    ></widget-editor>
    <text-editor :widget="widgetToEdit"></text-editor>

    <div class="flex column">
      <h1 :contenteditable="true"
        v-if="widgetToEdit.data.title"
        :style="{fontSize: widgetToEdit.data.style.fontSize + 'px',fontWeight: widgetToEdit.data.style.fontWeight, fontFamily: widgetToEdit.data.style.fontFamily, color: widgetToEdit.data.style.color, fontStyle: widgetToEdit.data.style.fontStyle }"
      >{{ widgetToEdit.data.title }}</h1>
      <h3 :contenteditable="true"
        v-if="widgetToEdit.data.subtitle"
        :style="{ color: widgetToEdit.data.style.txtSubtitleColor }"
      >{{ widgetToEdit.data.subtitle }}</h3>
    </div>
  </section>
</template>
<script>
import WidgetEditor from "../wixer_cmps/WidgetEditor";
import TextEditor from "../wixer_cmps/TextEditor";

export default {
  props: {
    edit: Boolean,
    value: Object
  },
  created() {
    const param = this.$route.path;
    if (param.includes("editor")) this.isEditer = true;
    else this.isEditer = false;
    this.getWidget()
  },
  data(){
    return{
      widgetToEdit: null
    }
  },
  methods: {
    removeWidget(id) {
      this.$emit("remove", id);
    },
    editWidget(widget) {
      this.$emit("edit", this.widgetToEdit);
    },
    getWidget(){
      this.widgetToEdit = JSON.parse(JSON.stringify(this.value))
      console.log(this.widgetToEdit)
    },
    newImage(imgUrl){
      this.widgetToEdit.data.style.bcgImg=imgUrl
    }
  },
  components: {
    WidgetEditor,
    TextEditor
  }
};
</script>
<style lang="scss">
.header-container {
  margin-bottom: 10px;
}

img {
  width: 100px;
  height: auto;
}
</style>
