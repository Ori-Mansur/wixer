<template>
  <section
    v-if="data"
    class="txt-container flex column align-center"
  >
  <TextEditor @edit="editStyle"/>
    <p
     :contenteditable="true"
    @keyup="saveText"
    v-if="data"
      class="text"
      v-html="content"
    ></p>
  </section>
</template>

<script>
import TextEditor from "../wixer_cmps/TextEditor";
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

    created() {
    const param = this.$route.path;
    if (param.includes("editor")) this.isEdit = true;
    else this.isEdit = false;
    console.log(this.isEdit)
  },
   
  },
  components: {
    TextEditor,
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
