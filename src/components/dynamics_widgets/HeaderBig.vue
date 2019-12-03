<template>
  <section
    v-if="value"
    @click="getPos"
    class="header-container flex column justify-center align-center background"
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
      @input="saveTxt"
    ></widget-editor>
    <text-editor :widget="value" :pos="pos"></text-editor>

    <div class="flex column">
      <h1
        :contenteditable="true"
        
        v-html="content"
        v-if="widgetToEdit.data.title"
        :style="{fontSize: widgetToEdit.data.style.fontSize + 'px',fontWeight: widgetToEdit.data.style.fontWeight, fontFamily: widgetToEdit.data.style.fontFamily, color: widgetToEdit.data.style.color, fontStyle: widgetToEdit.data.style.fontStyle }"
      >hhh</h1>
      <h3
        :contenteditable="true"
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
  data() {
    return {
      pos: { x: 0, y: 0 },
      widgetToEdit: null,
      content:this.value.data.title
    };
  },
  created() {
    const param = this.$route.path;
    if (param.includes("editor")) this.isEditer = true;
    else this.isEditer = false;
    this.getWidget();
  },
  methods: {
    removeWidget(id) {
      this.$emit("remove", id);
    },
    editWidget() {
      this.$emit("edit", this.widgetToEdit);
    },
    getWidget() {
      this.widgetToEdit = JSON.parse(JSON.stringify(this.value));
      console.log(this.widgetToEdit);
    },
    newImage(imgUrl) {
      this.widgetToEdit.data.style.bcgImg = imgUrl;
      this.$emit("edit", this.widgetToEdit);
    },
    getPos(ev) {
      this.pos.x = ev.pageX - 20;
      this.pos.y = ev.pageY + 20;
      console.log(ev);
    },
    saveTxt(ev){
      // this.$emit('input',{txt:ev.target.value,id})
      // console.log(ev);
      
      // this.widgetToEdit.data.title=ev.target.innerText
      this.value.data.title=ev.target.innerText
      console.log(this.widgetToEdit.data.title);
      
      
    }
  
  },
  components: {
    WidgetEditor,
    TextEditor
  }
};
</script>
<style lang="scss">
.widget-editor-container{
  z-index:5;
}
.header-container {
  margin-bottom: 10px;
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

