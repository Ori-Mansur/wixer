<template>
  <div class="wap-editor">
    <ToolBar @save="saveWap" :widgets="loadSections" :elements="elements" />
    <WidgetPreview
      class="edit-template"
      v-if="currWap"
      :style="{backgroundColor: currWap.style.bcgColor, color: currWap.style.txtColor}"
    />
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
    WidgetPreview
  }
};
</script>
