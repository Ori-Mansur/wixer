<template>
  <section
    class="txt-container flex column align-center"
    @click="isFocus = !isFocus"
    @mouseover="isFocus = true"
    @mouseout="isFocus = false"
    @keyup="saveText"
  >
    <p
      class="text"
      :contenteditable="true"
      @click="isFocus = !isFocus"
      v-html="content"
      :style="{fontSize: 16 + 'px',fontWeight: value.data.style.fontWeight}"
    ></p>
    <text-editor :widget="value"></text-editor>
    <!-- <widget-editor :widget="value" class="widget-editor-container" @remove="removeWidget"></widget-editor> -->
  </section>
</template>

<script>
import TextEditor from "../wixer_cmps/TextEditor";

export default {
  props: {
    edit: Boolean
    // value: Object
  },
  created() {
    console.log(this.value);
  },
  data() {
    return {
      isFocus: false,
      value: {
        id: "1111",
        type: "text",
        data: {
          style: {
            fontFamily: "Arial",
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: "normal",
            color: "black"
          },
          txt: "This is the first text element"
        }
      }
      // content: { text: this.text }
    };
  },
  methods: {
    removeWidget(id) {
      this.$emit("remove", id);
    },
    saveText(ev) {
      console.log("saved text", ev.target.innerText);

      this.value.data.txt = ev.target.innerText;
      console.log("saved text", this.value.data.txt);
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
