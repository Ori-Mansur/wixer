<template>
  <section v-if="data" class="text-container" @click="selectedTxt">
    
    <div @keyup="saveText">
      <p
        v-if="data.style"
        class="text"
        v-html="content"
        :contenteditable="isEdit"
        :style="{fontSize: data.style.fontSize + 'px',
      fontWeight: data.style.fontWeight, 
      fontFamily: data.style.fontFamily, 
      color: data.style.color, 
      fontStyle: data.style.fontStyle, 
      textAlign: data.style.txtAlign }"
      ></p>
    </div>
    <TextEditor @edit="edit" :data="data" />
  </section>
</template>

<script>
import TextEditor from "../wixer_cmps/TextEditor";

export default {
  props: {
    data: Object,
    pos: Object
  },
  data() {
    return {
      isEdit: false,
      content: JSON.parse(JSON.stringify(this.data.text)),
      isActive: false,
      selectedText: ""
    };
  },
  methods: {
    removeWidget(id) {
      this.$emit('remove', id);
    },
    saveText(ev) {
      const txt = ev.target.innerText;
      this.$emit("saveText", {txt,id:this.data._id});
    },
    edit(type) {
      console.log(type);
      
      this.$emit("edit",{dataId:this.data._id,style: type});
    },
    selectedTxt() {
      this.$store.commit({ type: "setTxtId", id: this.data._id });
    }
  },
  created() {
    const param = this.$route.path;
    if (param.includes('editor')) this.isEdit = true;
    else this.isEdit = false;
    console.log(this.data);
  },
  watch: {
    $route(to) {
      console.log("$r", to);

      if (to.includes("editor")) this.isEdit = true;
      else this.isEdit = false;
    }
  },
  components: {
    TextEditor
  }
};
</script>


