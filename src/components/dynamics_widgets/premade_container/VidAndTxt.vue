<template>
  <section
    class="vidAndTxt-container flex column"
    :contenteditable="edit"
    :style="{
      backgroundImage: `url(${value.style.bcgImg})`, backgroundColor: value.style.bcgColor, border: 1+'px solid black'}"
    @click="toggleActive"
  >
    <widget-editor
      :isEdit="isEdit"
      :widget="value"
      class="widget-editor-container flex row justify-end"
      @remove="removeWidget"
      @edit="editWidget"
    ></widget-editor>

    <div class="component-container flex row">
      <component
        v-for="(widget,idx) in value.data"
        :key="idx"
        :is="widget.type"
        :value="widget"
        :contenteditable="true"
        :width="cmpWidth"
        @remove="removeWidget"
      ></component>
    </div>
  </section>
</template>

<script>
import Video from "../Video";
import Txt from "../Txt";
import WidgetEditor from "../../wixer_cmps/WidgetEditor";

export default {
  components: {
    Video,
    Txt,
    WidgetEditor
  },
  props: {
    isEdit: Boolean,
    value: Object
  },
  data() {
    return {
      edit: false,
      cmpWidth: 50
    };
  },
  created() {
    console.log(this.value);
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
    removeWidget(id) {
      this.$emit("remove", id);
    },
    editWidget(widget) {
      this.$emit("edit", widget);
    },
    toggleActive() {
      this.isEdit = !this.isEdit;
    }
  }
};
</script>


<style scoped>
.vidAndTxt-container {
  margin-bottom: 10px;
  padding: 2rem;
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