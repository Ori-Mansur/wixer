<template>
  <div class="wap-editor" >
    <ToolBar
      @setName="setName"
    @save="saveWap"
      :widgets="loadSections"
      :elements="elements"
    />
   
    <WidgetPreview class="edit-template" :style="{backgroundColor: currWap.style.bcgColor, fontColor: currWap.style.txtColor}"  />
    
  
    <!-- <ElementPreview :elements="wap.elements" /> -->
  </div>
</template>
<script>
import ToolBar from "../components/wixer_cmps/ToolBar.vue";
import WidgetPreview from "../components/wixer_cmps/WidgetPreview.vue";
// import ElementPreview from "../components/wixer_cmps/ElementPreview";

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
    loadSections() {
      return this.$store.getters.loadSections;
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
    setName(name) {
      this.wap.name = name;
      this.save();
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
        // this.wap =JSON.parse(JSON.stringify(wap));
      } else {
        const newWap = await this.$store.dispatch({ type: "addNewWap" });
        this.$router.push(`/editor/${newWap._id}`);
        // this.wap =JSON.parse(JSON.stringify(newWap)) ;
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
    // ElementPreview,
   
  }
};
</script>
