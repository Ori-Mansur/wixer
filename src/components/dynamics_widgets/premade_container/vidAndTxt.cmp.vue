<template>
  <section class="container-twoCol" :contenteditable="edit">
    <div class="flex row full space-between">
      <component v-for="(widget,idx) in data" :key="idx" :is="widget.type" :data="widget.data" :contenteditable="true"></component>
    </div>
  </section>
</template>

<script>
import Video from "../video.cmp";
import Txt from "../txt.cmp";


export default {
  components: {
    Video,
    Txt
  },
  props: {
    edit: Boolean,
    widget: Object
  },
  data(){
    return{
    }
  },
  methods:{
    updateValue(value){
      this.$emit('input', value)
    }
  }
};
</script>


<style scoped>
.container-twoCol {
  border-style: dotted;
}
.text-header,
.text-center {
  display: flex;
  justify-content: center;
}
.column {
  float: left;
  width: 50%;
  padding: 10px;
  min-height: 300px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>