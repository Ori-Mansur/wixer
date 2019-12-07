<template>
  <section v-if="data" class="text-container">
    <div @keyup="saveText"  >
      <p v-if="data.style" class="text"  v-html="content" 
      :contenteditable="isEdit"
      :style="{fontSize: data.style.fontSize + 'px',
      fontWeight: data.style.fontWeight, 
      fontFamily: data.style.fontFamily, 
      color: data.style.color, 
      fontStyle: data.style.fontStyle, 
      textAlign: data.style.txtAlign }"></p>
    </div>
   
  </section>
</template>

<script>
// import TextEditor from "../wixer_cmps/TextEditor";

export default {
  props: {
    // isEdit: Boolean,
    data: Object,

  },
 

  data() {
    return {
      isEdit:false,
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
      this.$emit('saveText',this.data)
    },
  },
   created() {
    const param = this.$route.path;
    if (param.includes("editor")) this.isEdit = true;
    else this.isEdit = false;
    console.log(this.data)
  },
  watch:{
$route(to){
  console.log('$r',to);
  
  if (to.includes("editor")) this.isEdit = true;
    else this.isEdit = false;
}
  },
  components: {
    // TextEditor
  }
};
</script>

<style lang="scss" scoped>
</style>
