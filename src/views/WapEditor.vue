<template>
  <div class="wap-editor">
    <ToolBar
      @setName="setName"
      @save="save"
      @addElement="addElement"
      :widgets="widgets"
      :elements="elements"
      :nav="nav"
    />
    <drop class="drop" @drop="handleDrop" :class="classNames">
      <unicon v-if="!wap.widgets[0]" name="plus" fill="gray" class="icon" />
      <WidgetPreview :widgets="wap.widgets" @remove="remove" @edit="edit" />
    </drop>
    <ElementPreview :elements="wap.elements" />
  </div>
</template>
<script>
import ToolBar from "../components/wixer_cmps/ToolBar.vue";
import WidgetPreview from "../components/wixer_cmps/WidgetPreview.vue";
import ElementPreview from "../components/wixer_cmps/ElementPreview";
import { Drop } from "vue-drag-drop";
export default {
  created() {
    this.setWap();
    this.loadElements();
  },
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
    },
    elements() {
      return this.$store.getters.loadElements;
    },
    nav() {
      const nav = this.wap.widgets.find(widget => widget.type === "NavBar");
      return nav;
    }
  },
  methods: {
    loadElements() {
      this.$store.dispatch({ type: "loadElements" });
    },
    handleDrop(data) {
      const widget = JSON.parse(JSON.stringify(data.widget));
      this.wap.widgets.push(widget);
      this.save();
    },
    addElement(element) {
      console.log(element);
    },
    setName(name) {
      this.wap.name = name;
      this.save();
    },
    updateWidget(widget) {
      console.log(widget);
    },
    async save() {
      if (!this.wap._id) {
        this.wap = await this.$store.dispatch({
          type: "addWap",
          wap: this.wap
        });
        this.$route.push(`/editor/${this.wap._id}`)
      } else {
        this.wap = await this.$store.dispatch({
          type: "updateWap",
          wap: this.wap
        });
      }
    },
    remove(id) {
      console.log("widget to remove", id);
      // var idx = this.wap.widgets.findIndex(widget=>widget.id=id)
      // this.wap.widgets.splice(idx, 1)
      // this.wap = this.$store.dispatch({
      //   type: "removeWidget",
      //   widgetId: _id
      // });
    },
    edit(widget) {
      var idx = this.wap.widgets.findIndex(
        currWidget => currWidget._id === widget._id
      );
      this.wap.widgets.splice(idx, 1, widget);
    },
    async setWap() {
      const id = this.$route.params.id;
      if (id) {
        const wap = await this.$store.dispatch({ type: "wapById", id });
        this.wap = wap;
      }
    }
  },
  components: {
    Drop,
    ToolBar,
    WidgetPreview,
    ElementPreview
  }
};
</script>
