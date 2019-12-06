<template>
  <section v-if="data" class="text-container" >
    {{pos}}
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
    pos:Object

  },
 

  data() {
    return {
      isEdit:false,
      content:JSON.parse(JSON.stringify( this.data.text)),
      isActive:false,
      selectedText:''
    };
  },
  methods: {
    removeWidget(id) {
      this.$emit("remove", id);
    },
    saveText(ev){
      const txt = ev.target.innerText;
      this.$emit('saveText',txt)
    },
  },
   created() {
    const param = this.$route.path;
    if (param.includes("editor")) this.isEdit = true;
    else this.isEdit = false;
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

.text-editor-container{
  z-index:5;
  position: relative;
  // top:0px;
  // right:-260px;
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
