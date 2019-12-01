<template>
  <section
    class="vidAndTxt-container flex row justify-center align-center"
    :contenteditable="edit"
    :style="{
      backgroundImage: `url(${value.style.bcgImg})`, backgroundColor: value.style.bcgColor}"
  >
    <component
      v-for="(widget,idx) in value.data"
      :key="idx"
      :is="widget.type"
      :value="widget"
      :contenteditable="true"
      @remove="removeWidget"
    ></component>
    <widget-editor
      :widget="value"
      class="widget-editor-container"
      @remove="removeWidget"
      @edit="editWidget"
    ></widget-editor>
  </section>
</template>

<script>
import Video from "../video.cmp";
import Txt from "../txt.cmp";
import WidgetEditor from "../../wixer_cmps/WidgetEditor";

export default {
  components: {
    Video,
    Txt,
    WidgetEditor
  },
  props: {
    edit: Boolean,
    value: Object
  },
  created() {
    console.log(this.value);
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
    removeWidget(id) {
      console.log(id);
      this.$emit("remove", id);
    },
    editWidget(widget) {
      this.$emit("edit", widget);
    }
  }
};
</script>


<style scoped>
.vidAndTxt-container {
  /* border-style: dotted; */
  margin-bottom: 10px;
  position: relative;
}

.text-center {
  display: flex;
  justify-content: center;
}
/* .column {
  float: left;
  width: 50%;
  padding: 10px;
  min-height: 300px;
  font-style: 
} */

.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>