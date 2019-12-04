<template>
  <section
    class="card-container flex column"
    @click="isEdit = !isEdit"
    :style="{
      backgroundColor: value.style.bcgColor,
      border: isBorder
    }"
  >
    <image-element :styleData="value.style"></image-element>
    <text-element
      v-for="(data, index) in value.data"
      :key="index"
      :data="data"
      :isEdit="isEdit"
      :style="{ maxWidth: 'width' }"
    ></text-element>

    <widget-editor
      :widget="value"
      class="widget-editor-container"
      @remove="removeWidget"
    ></widget-editor>
  </section>
</template>

<script>
import WidgetEditor from "../wixer_cmps/WidgetEditor";
import TextEditor from "../wixer_cmps/TextEditor";
import TextElement from "../elements/TextElement";
import ImageElement from "../elements/ImageElement";

export default {
  props: {
    edit: Boolean,
    value: Object
  },
  created() {
    console.log(this.value);
  },
  data() {
    return {
      isEdit: false
    };
  },
  computed: {
    isBorder() {
      if (this.isEdit) return "1px solid blue";
      else return "";
    }
  },
  methods: {
    removeWidget(id) {
      this.$emit("remove", id);
    }
  },
  components: {
    WidgetEditor,
    TextEditor,
    TextElement,
    ImageElement
  }
};
</script>
<style lang="scss">
    .card-container{
        position: relative;
    }
</style>
