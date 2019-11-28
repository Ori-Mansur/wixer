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
import { log } from 'util';
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
    add(widget) {
      this.wap.widgets.push(widget);
      // this.$store.commit({ type: "addWidget", wap: this.wap });
      this.save();
    },
    async save() {
      if (!this.wap.id)
        this.wap = await this.$store.dispatch({
          type: "addWap",
          wap: this.wap
        });
      else
        this.wap = await this.$store.dispatch({
          type: "updateWap",
          wap: this.wap
        });
    },
    async setWap() {
      const id = this.$route.params.id;
      console.log(id);
      
      if (id) {
        const wap = await this.$store.dispatch({ type: "wapById", id });
        console.log(wap);
        
        this.wap = wap;
      }
    }
  },
  created() {
    this.setWap()
  },
  components: {
    ToolBar,
    WidgetPreview
  }
};
</script>
