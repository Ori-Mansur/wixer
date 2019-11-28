<template>
  <section class="container-twoCol" :contenteditable="edit">
    <h1 class="text-header">Vid and Text</h1>
    <div class="row">
      <div class="column" :style="{}">
        <h2 class="text-center">Column 1</h2>
        <div class="article">
          <p >
            <!-- {{widget.text}} -->
          </p>
        </div>
      </div>
      <div class="column" :style="{}">
        <h2 class="text-center">Column 2</h2>
        <div class="vid">
          <Video></Video>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Video from "../video.cmp";

export default {
  components: {
    Video
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