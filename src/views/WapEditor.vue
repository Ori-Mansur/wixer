<template>
  <div class="wap-editor container">
    <ToolBar
      @setName="setName"
    
      :widgets="widgetsToAdd"
      :elements="elements"
    />
   
    <div>
    <WidgetPreview    />
    </div>
  
    <ElementPreview :elements="wap.elements" />
  </div>
</template>
<script>
import ToolBar from "../components/wixer_cmps/ToolBar.vue";
import WidgetPreview from "../components/wixer_cmps/WidgetPreview.vue";
import ElementPreview from "../components/wixer_cmps/ElementPreview";

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
     myList: {
        get() {
            return this.$store.getters.currWapSections
        },
        set(value) {
          console.log('editor',value);
          
            this.$store.commit('addSection', value)
        }
    },
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
      // this.wap.widgets.push(JSON.parse(JSON.stringify(modifyWidget)));

      // this.save(modifyWidget);
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
      const wap= await this.$store.dispatch({ type: "saveWap", wap: this.wap });
      this.wap=JSON.parse(JSON.stringify(wap)) 
    },
    async setWap() {
      const id = this.$route.params.id;
      if (id) {
        const wap = await this.$store.dispatch({ type: "wapById", id });
        this.wap =JSON.parse(JSON.stringify(wap));
      } else {
        const newWap = await this.$store.dispatch({ type: "addNewWap" });
        this.$router.push(`/editor/${newWap._id}`);
        this.wap =JSON.parse(JSON.stringify(newWap)) ;
      }
    }
  },
  watch: {
    "wap.sections"(to) {
      console.log(to);
      // this.saveWap()
    }
  },
  components: {
    ToolBar,
    WidgetPreview,
    ElementPreview,
   
  }
};
</script>
