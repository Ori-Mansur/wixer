<template>
  <section
    v-if="data"
    class="txt-container flex column align-center"
  >
  <WidgetEditor/>
    <p
    v-if="data"
      class="text"
      :contenteditable="true"
      v-html="content"
    ></p>
  </section>
</template>

<script>
// import TextEditor from "../wixer_cmps/TextEditor";
import WidgetEditor from "../wixer_cmps/WidgetEditor";

export default {
  props: {
    edit: Boolean,
    data: Object,
    width: Number
  },
  data() {
    return {
      pos: { x: 0, y: 0 },
      widgetToEdit: null,
      content:this.data.txt
    };
  },
  methods: {
    removeWidget(id) {
      this.$emit("remove", id);
    },
    saveText(ev) {
      console.log(ev.target);

      // this.value.data.txt = ev.target.innerText;
    },
    getPos(ev) {
      // this.pos.x = ev.pageX - 20;
      // this.pos.y = ev.pageY + 20;
      console.log(ev);
    },
   
  },
  computed: {
    isEdit() {
      if (this.isFocus) return "dotted";
      else return "none";
    }
  },
  components: {
    // TextEditor,
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
