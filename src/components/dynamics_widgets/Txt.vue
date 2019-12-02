<template>
  <section
    v-if="value"
    @click="getPos"
    class="txt-container flex column align-center"
    @mouseover="isIn=true"
    @mouseleave="isIn=false"
    @blur="saveText"
    :style="{
      backgroundImage: `url(${widgetToEdit.data.style.bcgImg})`, backgroundColor: widgetToEdit.data.style.bcgColor, width: width+'%'}"
  >
    <widget-editor
      :widget="widgetToEdit"
      class="widget-editor-container"
      @remove="removeWidget"
      @newImage="newImage"
    ></widget-editor>
    <p
      class="text"
      :contenteditable="true"
      @click="setPos"
      v-html="content"
      :style="{fontSize: widgetToEdit.data.style.fontSize + 'px',fontWeight: widgetToEdit.data.style.fontWeight, fontFamily: widgetToEdit.data.style.fontFamily, color: widgetToEdit.data.style.color, fontStyle: widgetToEdit.data.style.fontStyle }"
    ></p>
    <text-editor :widget="value" :pos="pos"></text-editor>
  </section>
</template>

<script>
import TextEditor from "../wixer_cmps/TextEditor";
import WidgetEditor from "../wixer_cmps/WidgetEditor";

export default {
  props: {
    edit: Boolean,
    value: Object,
    width: Number
  },
  created() {
    this.getWidget();
  },
  data() {
    return {
      pos: { x: 0, y: 0 },
      widgetToEdit: null
    };
  },
  methods: {
    removeWidget(id) {
      this.$emit("remove", id);
    },
    saveText(ev) {
      console.log(ev);
      // this.value.data.txt = ev.target.innerText;
      // console.log(this.value.data.txt);
    },
    getPos(ev) {
      this.pos.x = ev.pageX - 20;
      this.pos.y = ev.pageY + 20;
      console.log(ev);
    },
    getWidget() {
      this.widgetToEdit = JSON.parse(JSON.stringify(this.value));
    },
    newImage(imgUrl) {
      this.widgetToEdit.data.style.bcgImg = imgUrl;
    }
  },
  computed: {
    isEdit() {
      if (this.isFocus) return "dotted";
      else return "none";
    },
    content() {
      return this.widgetToEdit.data.txt;
    }
  },
  components: {
    TextEditor,
    WidgetEditor
  }
};
</script>

<style lang="scss" scoped>
.txt-container {
  position: relative;
}
h3 {
  margin: 5px;
}
p {
  margin: 0;
}
.text {
  padding: 10px;
  width: 90%;
}
</style>
