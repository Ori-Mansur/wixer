<template>
  <div class="nav-bar-daynamic">
    <widget-editor
      :widget="value"
      class="widget-editor-container"
      @remove="removeWidget"
      @edit="editWidget"
    ></widget-editor>
    <div class="logo" style="padding: 30px;">LOGO</div>
    <nav class="nav-bar" style="padding: 30px;">
      <router-link to="#" style="margin-left: 10px" :contenteditable="edit">{{links.first}}</router-link>
      <router-link to="#" style="margin-left: 10px" :contenteditable="edit">{{links.sec}}</router-link>
      <router-link to="#" style="margin-left: 10px" :contenteditable="edit">{{links.third}}</router-link>
    </nav>
  </div>
</template>
<script>
import widgetEditor from "../wixer_cmps/WidgetEditor";
export default {
  props: {
    edit: Boolean,
    value:Object
  },
  data() {
    return {
      links: {
        first: "Home",
        sec: "About",
        third: "Contact"
      }
    };
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
    widgetEditor
  }
};
</script>
<style lang="scss" scoped>
</style>