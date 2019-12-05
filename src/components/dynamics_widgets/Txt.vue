<template>
  <section
    v-if="data"
    class="txt-container flex column align-center"
    
  >
  <WidgetEditor/>
    <p
     :contenteditable="isEdit"
    @keyup="saveText"
    v-if="data"
      class="text"
      v-html="content"
    ></p>
  </section>
</template>

<script>
// import TextEditor from "../wixer_cmps/TextEditor";
import WidgetEditor from "../wixer_cmps/WidgetEditor";

export default {
  props: {
    data: Object,
  },
  data() {
    return {
      pos: { x: 0, y: 0 },
      isEdit: false,
      content:this.data.data.txt
    };
  },
  methods: {
    removeWidget(id) {
      this.$emit("remove", id);
    },
    saveText(ev){
      this.data.text = ev.target.innerText;
      this.$emit('saveText',this.data)
    },
    getPos(ev) {
      // this.pos.x = ev.pageX - 20;
      // this.pos.y = ev.pageY + 20;
      console.log(ev);
    },
    created() {
    const param = this.$route.path;
    if (param.includes("editor")) this.isEdit = true;
    else this.isEdit = false;
  },
   
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
