<template>
  <div>
    <ToolBar @add="add" />
    <WidgetPreview :widgets="widgets" />
  </div>
</template>
<script>
import ToolBar from "../components/wixer_cmps/ToolBar.vue";
import WidgetPreview from "../components/wixer_cmps/WidgetPreview.vue";
export default {
  computed: {
    widgets() {
      return this.$store.getters.widgets;
    }
  },
  methods: {
    add(config){
      this.$store.commit({type:'addWidget',config})
    }
  },
  components: {
    ToolBar,
    WidgetPreview
  }
};
</script>