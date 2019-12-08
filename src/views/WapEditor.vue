<template>
  <div class="wap-editor">
    <ToolBar
      @setName="setName"
    @save="saveWap"
      :widgets="widgetsToAdd"
      :elements="elements"
    />
    <WidgetPreview class="edit-template"   />  
  </div>
</template>

<script>
import ToolBar from "../components/wixer_cmps/ToolBar.vue";
import WidgetPreview from "../components/wixer_cmps/WidgetPreview.vue";

export default {
  created() {
    this.setWap();
    this.loadElements();
  },
  data() {
    return {
      isSection: false,
      over: false,
      wap: {
        name: "Funky Monks",
        style: {
          font: "Arial",
          txtColor: "black",
          bcgColor: "white",
          fontSize: 16,
          bcgImage: "none"
        },
        sections: []
      }
    };
  },
  computed: {
    currWap() {
      return this.$store.getters.currWap;
    },
    widgetsToAdd() {
      return this.$store.getters.widgetsToAdd;
    },
    elements() {
      return  this.$store.getters.loadElements;
    }
  },
  methods: {
    loadElements() {
      this.$store.dispatch({ type: "loadElements" });
    },
    async handleDrop(data) {
      this.isSection = true;
      const widget = JSON.parse(JSON.stringify(data.widget));
      const modifyWidget = await this.$store.dispatch({
        type: "addId",
        widget
      });
      console.log(modifyWidget);
      this.$store.dispatch({ type: "addSection", section: modifyWidget });
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
    edit(widget) {
      console.log("saved widget", widget);
      var idx = this.wap.widgets.findIndex(
        currWidget => currWidget._id === widget._id
      );
      this.wap.widgets.splice(idx, 1, widget);
    },
    async saveWap() {
      console.log('kkkk');
      
      const wap= await this.$store.dispatch({ type: "saveWap"});
      this.wap=JSON.parse(JSON.stringify(wap)) 
    },
    async setWap() {
      const id = this.$route.params.id;
      if (id) {
         await this.$store.dispatch({ type: "wapById", id });
      } else {
        const newWap = await this.$store.dispatch({ type: "addNewWap" });
        this.$router.push(`/editor/${newWap._id}`);
      }
    }
  },
  watch: {
    "wap.sections"(to) {
      console.log(to);
    }
  },
  components: {
    ToolBar,
    WidgetPreview,   
  }
};
</script>
