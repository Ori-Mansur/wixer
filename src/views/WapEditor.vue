<template>
  <div class="wap-editor">
    <i class="fa fa-edit fa-3x editor-view" v-if="!isPreviewMode" @click.stop="preview"></i>
    <ToolBar
      @preview="preview"
      @save="saveWap"
      :widgets="loadSections"
      :elements="elements"
      :class="[isPreviewMode ? 'tool-bar' : 'isPreview']"
    />
    <SectionList
      class="edit-template"
      v-if="currWap"
      :sections="currWap.sections"
      :style="{backgroundColor: currWap.style.bcgColor, color: currWap.style.txtColor}"
      :class="[isPreviewMode ? 'edit-template' : 'edit-template-prev']"
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
      isPreviewMode: true
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
    },
    preview() {
      if (this.isPreviewMode) {
        this.isPreviewMode = false;
      } else {
        this.isPreviewMode = true;
      }
    }
  },
  components: {
    ToolBar,
    SectionList
  }
};
</script>
