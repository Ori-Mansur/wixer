<template>
  <section class="text-container">
    <div @keyup="saveText">
      <p class="text" :contenteditable="true" v-html="content" :style="{fontSize: data.style.fontSize + 'px',fontWeight: data.style.fontWeight, fontFamily: data.style.fontFamily, color: data.style.color, fontStyle: data.style.fontStyle, textAlign: data.style.txtAlign }"></p>
    </div>
    <text-editor :widget="data" class="widget-editor-container" @remove="removeWidget" ></text-editor>
  </section>
</template>

<script>
import TextEditor from "../wixer_cmps/TextEditor";

export default {
  props: {
    isEdit: Boolean,
    data: Object,

  },
  created() {
    // console.log('selectedEl', this.selectedEl)

  },
  data() {
    return {
      content: this.data.text,
      isActive:false,
      selectedText:''
    };
  },
  methods: {
    removeWidget(id) {
      this.$emit("remove", id);
    },
    saveText(ev){
      this.data.text = ev.target.innerText;
    }
  },
  computed: {
  },
  components: {
    TextEditor
  }
};
</script>

<style lang="scss" scoped>
.text-container {
  position: relative;
}
.text-editor-container{
  z-index:5;
  position: absolute;
  top:0px;
  right:-260px;
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
