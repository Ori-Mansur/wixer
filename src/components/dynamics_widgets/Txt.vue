<template>
  <section
    class="txt-container flex column align-center"
    @mouseover="isFocus = true"
    @mouseout="isFocus = false"
    @blur="saveText"
    :style="{
      backgroundImage: `url(${value.data.style.bcgImg})`, backgroundColor: value.data.style.bcgColor, width: width+'%'}"
  >
    <widget-editor :widget="value" class="widget-editor-container" @remove="removeWidget"></widget-editor>
    <p
      class="text"
      :contenteditable="true"
      @click="setPos"
      v-html="content"
      :style="{fontSize: value.data.style.fontSize + 'px',fontWeight: value.data.style.fontWeight, fontFamily: value.data.style.fontFamily, color: value.data.style.color, fontStyle: value.data.style.fontStyle }"
    ></p>
    <text-editor :widget="value" ></text-editor>
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
    console.log(this.value);
  },
  data() {
    return {
      pos: 0,
    };
  },
  methods: {
    removeWidget(id) {
      this.$emit("remove", id);
    },
    saveText(ev) {
      console.log(ev)
      // this.value.data.txt = ev.target.innerText;
      // console.log(this.value.data.txt);
    },
    setPos(ev){
      console.log(ev)
      this.pos={y:ev.screenY, x: ev.screenY}
    }
  },
  computed: {
    isEdit() {
      if (this.isFocus) return "dotted";
      else return "none";
    },
    content() {
      return this.value.data.txt;
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
