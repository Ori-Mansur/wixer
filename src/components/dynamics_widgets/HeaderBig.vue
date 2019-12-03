<template>
  <section
    v-if="value"
    class="header-container flex column justify-center align-center background"
    :style="{
      backgroundImage: `url(${value.data.style.bcgImg})`,backgroundColor: value.data.style.bcgColor,
      height: value.data.style.height + 'px'
    }"
  >
    <widget-editor 
      :widget="widgetToEdit"
      class="widget-editor-container"
      @remove="removeWidget"
      @edit="editWidget"
      @newImage="newImage"
    ></widget-editor>
    <text-editor :widget="value" :pos="pos"></text-editor>

    <div class="flex column" @keyup="saveText">
      <text-element
        :contenteditable="true"
        v-html="content.title"
        v-if="value.data.title"
        :style="{fontSize: value.data.style.fontSize + 'px',fontWeight: value.data.style.fontWeight, fontFamily: value.data.style.fontFamily, color: value.data.style.color, fontStyle: value.data.style.fontStyle, textAlign: value.data.style.txtAlign }"
      ></text-element>
      </div>
      <div class="flex column" @keyup="saveText">
      <text-element
        :contenteditable="true"
        v-html="content.subtitle"
        v-if="value.data.subtitle"
        :style="{ color: value.data.style.txtSubtitleColor, textAlign: value.data.style.txtAlign, fontSize: value.data.style.fontSize-20 + 'px' }"
      ></text-element>
    </div>
  </section>
</template>
<script>
import WidgetEditor from "../wixer_cmps/WidgetEditor";
import TextEditor from "../wixer_cmps/TextEditor";
import TextElement from "../elements/TextElement.cmp";

export default {
  props: {
    edit: Boolean,
    value: Object
  },
  data() {
    return {
      pos: { x: 0, y: 0 },
      widgetToEdit: null,
      content:{title: this.value.data.title, subtitle: this.value.data.subtitle}
    };
  },
  created() {
    const param = this.$route.path;
    if (param.includes("editor")) this.isEditer = true;
    else this.isEditer = false;
    this.getWidget();
    console.log(this.value.data.style)
  },
  computed:{
    titleStyle(){
      console.log(this.value.data.style.fontSize)
      return "{fontSize: value.data.style.fontSize + 'px',fontWeight: value.data.style.fontWeight, fontFamily: value.data.style.fontFamily, color: value.data.style.color, fontStyle: value.data.style.fontStyle }"
    }
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
    // getPos(ev) {
    //   // this.pos.x = ev.pageX - 20;
    //   // this.pos.y = ev.pageY + 20;
    //   console.log(ev);
    // },
    saveText(ev){
      // this.$emit('input',{txt:ev.target.value,id})
      // console.log(ev);
      // this.widgetToEdit.data.title=ev.target.innerText
      this.value.data.title=ev.target.innerText
      console.log(this.widgetToEdit.data.title);
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
.widget-editor-container{
  z-index:5;
  position: relative;

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

