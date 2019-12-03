<template>
  <section class="txt-box">
    <p class="text" :contenteditable="true">
    </p>
    <text-editor
      :widget="value"
      class="widget-editor-container"
      @remove="removeWidget"
    ></text-editor>
  </section>
</template>

<script>
import TextEditor from "../wixer_cmps/TextEditor";

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
    TextEditor
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
