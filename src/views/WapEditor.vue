<template>
  <div class="wap-editor">
    <ToolBar @save="saveWap" :widgets="loadSections" :elements="elements" />
    <SectionList
      class="edit-template"
      v-if="currWap"
      :sections="currWap.sections"
      :style="{backgroundColor: currWap.style.bcgColor, color: currWap.style.txtColor}"
    />
  </div>
</template>

<script>
import ToolBar from "../components/wixer_cmps/ToolBar.vue";
import SectionList from "../components/wixer_cmps/SectionList.vue";

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
      return this.$store.getters.loadElements;
    }
  },
  methods: {
    loadElements() {
      this.$store.dispatch({ type: "loadElements" });
    },
    async saveWap() {
      const wap = await this.$store.dispatch({ type: "saveWap" });
      this.wap = JSON.parse(JSON.stringify(wap));
    },
    async setWap() {
      const id = this.$route.params.id;
      if (id) {
        await this.$store.dispatch({ type: "loadWap", id });
      } else {
        const newWap = await this.$store.dispatch({ type: "addNewWap" });
        this.$router.push(`/editor/${newWap._id}`);
      }
    }
  },
  components: {
    ToolBar,
    SectionList
  }
};
</script>
