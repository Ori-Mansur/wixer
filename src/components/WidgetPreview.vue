<template>
  <div>
    <component :edit="isEdit" v-for="(widget,idx) in widgets" :key="idx" :is="widget" @click="updateNote"></component>
  </div>
</template>
<script>
import NavBar from "./dynamics_cmps/NavBarEdit.vue";
import Container from "./dynamics_cmps/container.cmp";
import Empty from "./dynamics_cmps/empty.cmp";
import Header from "./dynamics_cmps/header.cmp";
import Img from "./dynamics_cmps/img.cmp";
import Txt from "./dynamics_cmps/txt.cmp";
import Video from "./dynamics_cmps/video.cmp";
export default {
  props: {
    widgets: Array
  },
  data() {
    return {
      isEdit: false
    };
  },
  methods: {
    updateNote() {
      console.log("hi");
    }
  },
  created() {
    const param = this.$route.path;
    if (param.includes("editor")) this.isEdit = true;
    else this.isEdit = false;
  },
  components: {
    NavBar,
    Container,
    Empty,
    Header,
    Img,
    Txt,
    Video
  }
};
</script>