<template>
  <section class="twoCol-container flex row justify-content align-center" :contenteditable="edit">
    <component
      v-for="(widget,idx) in value.data"
      :key="idx"
      :is="widget.type"
      :value="widget"
      :contenteditable="true"
      @remove="removeWidget"
    ></component>

    <widget-editor :widget="value" class="widget-editor-container" @remove="removeWidget"></widget-editor>
  </section>
</template>

<script>
import Txt from "../dynamics_widgets/txt.cmp";
import Map from "../dynamics_widgets/map.cmp";
import WidgetEditor from "../wixer_cmps/WidgetEditor";

export default {
  props: {
    edit: Boolean,
    value: Object
  },
  created() {},
  components: {
    Txt,
    Map,
    WidgetEditor
  },
  methods: {
    removeWidget(id) {
      this.$emit("remove", id);
    },
    handleDrop(data) {
      console.log(event);
      console.log(event.toElement);
      // console.log(dragElement)
    }
  }
};
</script>
<style scoped>
.twoCol-container {
  border-style: dotted;
  position: relative;
}
.text-center {
  display: flex;
  justify-content: center;
}
.column {
  float: left;
  width: 33.33%;
  padding: 10px;
  min-height: 300px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>