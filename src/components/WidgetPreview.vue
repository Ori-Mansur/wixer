<template>
  <div>
    <component v-for="(widget,idx) in widgets" :key="idx" :is="widget" @click="updateNote"></component>
  </div>
</template>
<script>
import NavBar from "./dynamic_cmps/NavBarEdit.vue";
export default {
  props: {
    widgets: Array
  },
  methods: {
    updateNote() {
      console.log("hi");
    }
  },
  components: {
    NavBar
  }
};
</script>