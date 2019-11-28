<template>
  <div class="wap-editor">
    <div class="placeholder-widget" v-if="!wap.widgets[0]">ADD WIDGET</div>
    <ToolBar @add="add" :widgets="widgets" />
    <WidgetPreview :widgets="wap.widgets" />
  </div>
</template>
<script>
import ToolBar from "../components/wixer_cmps/ToolBar.vue";
import WidgetPreview from "../components/wixer_cmps/WidgetPreview.vue";
export default {
  data() {
    return {
      wap: {
        name: "Funky Monks",
        style: {
          font: "Arial",
          txtColor: "black",
          bcgColor: "white",
          fontSize: 16,
          bcgImage: "none"
        },
        widgets: []
      }
    };
  },
  computed: {
    widgets() {
      return this.$store.getters.widgets;
    }
  },
  methods: {
    add(config) {
      this.wap.widgets.push(config)
      // this.$store.commit({ type: "addWidget", config });
    }
  },
  components: {
    ToolBar,
    WidgetPreview
  }
};
</script>
