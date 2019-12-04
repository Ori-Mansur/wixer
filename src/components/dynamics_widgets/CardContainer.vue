<template>
  <section
    @mouseup="getSelectedText"

    class="card-container flex column"
    @click="isEdit = !isEdit"
    @mouseout="isEdit=false"
    :style="{
      backgroundColor: data.style.bcgColor,
      border: isBorder
    }"
  >
    <image-element @click.prevent :styleData="data.style"></image-element>
    <div v-for="(data, index) in data.data"
      :key="index"
      :isEdit="isEdit">
    <text-element
      :data="data"
      @mouseup="getSelectedText"
      :style="{ maxWidth: 'width' }"
    ></text-element>
    <text-editor :widget="data" class="widget-editor-container" @remove="removeWidget"></text-editor>
    </div>

    <widget-editor
      v-if="isEdit"
      :widget="data"
      :index="index"
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
    data: Object,
    index: Number
  },
  created() {
  },
  data() {
    return {
      isEdit: false,
      selectedEl:null
    };
  },
  computed: {
    isBorder() {
      if (this.isEdit) return "1px solid blue";
      else return "";
    },
    selectedText(){
      if(this.selectedEl===this.value._id) return true
      else return false
    }
  },
  methods: {
    removeWidget(id) {
      this.$emit("remove", id);
    },
    getSelectedText(ev){
      // console.log(ev.target)
      const text = window.getSelection().toString()
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
