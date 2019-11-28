<template>
  <section class="container-twoCol flex row justify-content align-center" :contenteditable="edit">
    <component
      v-for="(widget,idx) in data"
      :key="idx"
      :is="widget.type"
      :data="widget.data"
      :contenteditable="true"
    ></component>
  </section>
</template>

<script>
import Txt from "../dynamics_widgets/txt.cmp";
import Map from "../dynamics_widgets/map.cmp";

export default {
  props: {
    edit: Boolean,
    data: Array
  },
  created() {},
  components: {
    Txt,
    Map
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
  width: 33.33%;
  padding: 10px;
  min-height: 300px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>