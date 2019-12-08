<template>
  <div class="nav-bar-daynamic">
    <WidgetEditor :data="section" />
    <div class="logo-edit" style="padding: 30px;">LOGO</div>
    <nav class="nav-bar-edit" style="padding: 30px;">
      <router-link to="#" style="margin-left: 10px" :contenteditable="edit">{{links.first}}</router-link>
      <router-link to="#" style="margin-left: 10px" :contenteditable="edit">{{links.sec}}</router-link>
      <router-link to="#" style="margin-left: 10px" :contenteditable="edit">{{links.third}}</router-link>
    </nav>
  </div>
</template>
<script>
import WidgetEditor from "../wixer_cmps/WidgetEditor";
export default {
  props: {
    edit: Boolean,
    section:Object
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
    WidgetEditor
  }
};
</script>
<style lang="scss" scoped>
</style>