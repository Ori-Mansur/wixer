<template>
  <div class="wap-editor">
    <ToolBar @add="add" :widgets="widgets" />
    <drop class="drop" @drop="handleDrop" :class="classNames">
      <unicon v-if="!wap.widgets[0]" name="plus" fill="gray" class="icon" />
      <WidgetPreview v-else :widgets="wap.widgets" />
    </drop>
  </div>
</template>
<script>
import ToolBar from "../components/wixer_cmps/ToolBar.vue";
import WidgetPreview from "../components/wixer_cmps/WidgetPreview.vue";
import { Drop } from "vue-drag-drop";
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
    classNames() {
      return {
        "edit-template": true,
        "placeholder-widget": this.wap.widgets.length === 0,
        nimrod: this.wap.widgets.length > 0
      };
    },
    widgets() {
      return this.$store.getters.widgets;
    }
  },
  methods: {
    handleDrop(data, event) {
      this.wap.widgets.push(data.widget);
      this.save();

      // window.console.log('SSSSSS', data);
      // alert(`You dropped with data: ${JSON.stringify(data)}`);
    },
    add(widget) {
      this.wap.widgets.push(widget);
      this.save();
      console.log(this.wap.widgets);
    },
    updateWidget(widget) {
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
    async setWap() {
      const id = this.$route.params.id;
      if (id) {
        const wap = await this.$store.dispatch({ type: "wapById", id });
        this.wap = wap;
      }
    }
  },
  created() {
    this.setWap();
  },
  components: {
    Drop,
    ToolBar,
    WidgetPreview
  }
};
</script>
