<template>
  <section
    class="txt-container flex column align-center"
    @mouseover="isFocus = true"
    @mouseout="isFocus = false"
    @mouseleave.prevent="saveText"
  >
    <p class="text" :contenteditable="true" v-html="value.data.txt" :style="{fontSize: value.data.style.fontSize + 'px',fontWeight: value.data.style.fontWeight, fontFamily: value.data.style.fontFamily, color: value.data.style.color, fontStyle: value.data.style.fontStyle }">
    </p>
    <text-editor :widget="value"></text-editor>
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
      isFocus: false,
      // value: {
      //   id: "1111",
      //   type: "text",
      //   data: {
      //     style: {
      //       fontFamily: "Arial",
      //       fontSize: 16,
      //       fontStyle: "normal",
      //       fontWeight: 'normal',
      //       color: "black"
      //     },
      //     txt: "This is the first text element"
      //   }
      // },
      // content: { text: this.text }
    };
  },
  methods: {
    removeWidget(id) {
      this.$emit("remove", id);
    },
    saveText(ev) {
      console.log(ev)
      // this.value.data.txt = ev.target.innerText;
      // console.log(this.value.data.txt);
    }
  },
  computed: {
    isEdit() {
      if (this.isFocus) return "dotted";
      else return "none";
    },
    content(){
      return this.value.data.txt
    },
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
