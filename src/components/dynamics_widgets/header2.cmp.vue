<template>
  <section
    v-if="value"
    class="header-container flex align-center justify-center"
    :style="{
      backgroundImage: `url(${value.data.style.bcgImg})`,backgroundColor: value.data.style.bcgColor,
      height: value.data.style.height + 'px'
    }"
  >
    <widget-editor
      :widget="value"
      class="widget-editor-container"
      @remove="removeWidget"
      @edit="editWidget"
    ></widget-editor>

    <div class="flex column">
      <h1
        v-if="value.data.title"
        :style="{ color: value.data.style.txtTitleColor }"
      >{{ value.data.title }}</h1>
      <h3
        v-if="value.data.subtitle"
        :style="{ color: value.data.style.txtSubtitleColor }"
      >{{ value.data.subtitle }}</h3>
    </div>
  </section>
</template>
<script>
import WidgetEditor from "../wixer_cmps/WidgetEditor";

export default {
  props: {
    edit: Boolean,
    value: Object
  },
  created() {
    const param = this.$route.path;
    if (param.includes("editor")) this.isEditer = true;
    else this.isEditer = false;
    console.log(this.value);
  },
  methods: {
    removeWidget(id) {
      this.$emit("remove", id);
    },
    editWidget(widget) {
      this.$emit("edit", widget);
    }
  },
  components: {
    WidgetEditor
  }
};
</script>
<style lang="scss">
.header-container {
  margin-bottom: 10px;
  position: relative;
}

img {
  width: 100px;
  height: auto;
}
</style>
