<template>
  <div class="wap-editor">
    <ToolBar @add="add" @addElement="addElement" :widgets="widgets" :elements="elements"/>
    <drop class="drop" @drop="handleDrop" :class="classNames">
      <unicon v-if="!wap.widgets[0]" name="plus" fill="gray" class="icon" />
      <WidgetPreview v-else :widgets="wap.widgets" @remove="remove" @edit="edit"/>
    </drop>
      <ElementPreview :elements="wap.elements"/>
  </div>
</template>
<script>
import ToolBar from "../components/wixer_cmps/ToolBar.vue";
import WidgetPreview from "../components/wixer_cmps/WidgetPreview.vue";
import ElementPreview from "../components/wixer_cmps/ElementPreview"
import { Drop } from "vue-drag-drop";
export default {
  created() {
    this.setWap();
    this.loadElements()
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
    elements(){
      return this.$store.getters.loadElements;
    }
  },
  methods: {
    loadElements(){
       this.$store.dispatch({type: "loadElements"});
    },
    handleDrop(data, event) {
      console.log(event)
      this.wap.widgets.push(data.widget);
      this.save();

      // window.console.log('SSSSSS', data);
      // alert(`You dropped with data: ${JSON.stringify(data)}`);
    },
    addElement(element){
      console.log(element)
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
    remove(id){
      console.log('widget to remove', id)
      // var idx = this.wap.widgets.findIndex(widget=>widget.id=id)
      // this.wap.widgets.splice(idx, 1)
      // this.wap = await this.$store.dispatch({
      //     type: "removeWidget",
      //     widgetId: id
      //   });
    },
    edit(widget){
      var idx = this.wap.widgets.findIndex(widget=>widget.id=id)
      this.wap.widgets.splice(idx, 1, widget)
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
