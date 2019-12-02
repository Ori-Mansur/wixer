<template>
  <section
    v-if="value"
    @click="getPos"
    class="header-container flex align-center justify-center background"
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
    <text-editor :widget="value" :pos="pos"></text-editor>

    <div class="flex column" :contenteditable="true">
      <p
        v-if="value.data.title"
        :style="{ color: value.data.style.color , fontSize: value.data.style.fontSize + 'px',fontWeight: value.data.style.fontWeight, fontFamily: value.data.style.fontFamily, color: value.data.style.color, fontStyle: value.data.style.fontStyle }"
      >{{ value.data.title }}</p>
    </div>
  </section>
</template>
<script>
import WidgetEditor from "../wixer_cmps/WidgetEditor";
import TextEditor from "../wixer_cmps/TextEditor";

export default {
  props: {
    edit: Boolean,
    value: Object
  },
  data() {
    return {
      pos: { x: 0, y: 0 }
    };
  },
  created() {
    const param = this.$route.path;
    if (param.includes("editor")) this.isEditer = true;
    else this.isEditer = false;
    console.log(this.value.data.style, "data style");
  },
  methods: {
    removeWidget(id) {
      this.$emit("remove", id);
    },
    editWidget(widget) {
      this.$emit("edit", widget);
    },
    getPos(ev) {
      this.pos.x = ev.pageX - 20;
      this.pos.y = ev.pageY + 20;
      console.log(ev);
    }
  },
  components: {
    WidgetEditor,
    TextEditor
  }
};
</script>
<style lang="scss">
.header-container {
  margin-bottom: 10px;
}

img {
  width: 100px;
  height: auto;
}
.background {
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
