<template>
  <section
    v-if="value"
    class="txt-container flex column align-center"
    :style="{
      backgroundImage: `url(${value.data.style.bcgImg})`, backgroundColor: value.data.style.bcgColor, width: width+'%'}"
  >
    <widget-editor
      :widget="value"
      class="widget-editor-container"
      @remove="removeWidget"
      @newImage="newImage"
    ></widget-editor>
    <div @keyup="saveText">
    <p
      class="text"
      :contenteditable="true"
      v-html="content"
      :style="style"
    ></p>
    </div>
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
      widgetToEdit: null,
      content: this.value.data.txt
    }
  },
  methods: {
    removeWidget(id) {
      this.$emit("remove", id);
    },
    saveText(ev) {
      console.log(ev.target);

      // this.value.data.txt = ev.target.innerText;
    },
    getPos(ev) {
      // this.pos.x = ev.pageX - 20;
      // this.pos.y = ev.pageY + 20;
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
    style(){
      return 'fontSize: value.data.style.fontSize + "px",fontWeight: value.data.style.fontWeight, fontFamily: value.data.style.fontFamily, color: value.data.style.color, fontStyle: value.data.style.fontStyle'
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
