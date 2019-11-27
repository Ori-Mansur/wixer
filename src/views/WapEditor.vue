<template>
  <div>
      <ToolBar/>
      <WidgetPreview :widgets="widgets" />
  </div>
</template>
<script>
import ToolBar from "../components/ToolBar.vue";
import WidgetPreview from "../components/WidgetPreview.vue";
export default {
    computed: {
        widgets(){
            return this.$store.getters.widgets
        }
    },
  components: {
    ToolBar,
    WidgetPreview
  }
};
</script>