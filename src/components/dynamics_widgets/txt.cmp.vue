<template>
  <section
    class="txt-container flex column align-center"
    @click="isFocus=!isFocus"
    @mouseover="isFocus=true"
    @mouseout="isFocus=false"
    @keyup="saveText"
  >
    <h3 v-if="value.data.title" @click="isFocus=!isFocus" :contenteditable="true"></h3>
    <p class="text" :contenteditable="true" @click="isFocus=!isFocus" v-html="content.text"></p>
    <widget-editor :widget="value" class="widget-editor-container" @remove="removeWidget"></widget-editor>
  </section>
</template>

<script>
import WidgetEditor from "../wixer_cmps/WidgetEditor";

export default {
  props: {
    edit: Boolean,
    value: Object
  },
  created() {},
  data() {
    return {
      isFocus: false,
      content: { text: this.value.data.txt }
    };
  },
  methods: {
    removeWidget(id) {
      this.$emit("remove", id);
    },
    saveText(ev) {
      this.value.data.txt = ev.target.innerText;
      console.log("saved text", this.value.data.txt);
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