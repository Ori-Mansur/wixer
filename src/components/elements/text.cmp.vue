<template>
  <section
    class="txt-container"
    :style="{
      borderStyle: isEdit
    }"
    @click="isFocus = !isFocus"
    @mouseover="isFocus = true"
    @mouseout="isFocus = false">
    
    <p class="text" :contenteditable="true" @click="isFocus = !isFocus">
      {{ value.data.txt }}
    </p>
    <widget-editor
      :widget="value"
      class="widget-editor-container"
      @remove="removeWidget"
    ></widget-editor>
  </section>
</template>

<script>
import WidgetEditor from "../wixer_cmps/WidgetEditor";

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
      isFocus: false
    };
  },
  methods: {
    removeWidget(id) {
      this.$emit("remove", id);
    }
  },
  computed: {
    isEdit() {
      if (this.isFocus) return "dotted";
      else return "none";
    }
  },
  components: {
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
}
</style>
