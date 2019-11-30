<template>
  <div class="wap-editor">
    <div class="placeholder-widget" v-if="!wap.widgets[0]" title="Add Widget">
      <unicon name="plus" fill="gray" class="icon" />
      </div>
    <ToolBar @add="add" :widgets="widgets" />
    <WidgetPreview :widgets="wap.widgets" @remove="remove"/>
  </div>
</template>
<script>
import ToolBar from "../components/wixer_cmps/ToolBar.vue";
import WidgetPreview from "../components/wixer_cmps/WidgetPreview.vue";
// import { log } from 'util';
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
      this.save();
      console.log(this.wap.widgets)
    },
    updateWidget(widget){
      console.log(widget);
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
    remove(id){
      console.log('widget to remove', id)
      // var idx = this.wap.widgets.findIndex(widget=>widget.id=id)
      // this.wap.widgets.splice(idx, 1)
      // this.wap = await this.$store.dispatch({
      //     type: "removeWidget",
      //     widgetId: id
      //   });
    },
    async setWap() {
      const id = this.$route.params.id;
      if (id) {
        const wap = await this.$store.dispatch({ type: "wapById", id });
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
