<template>
  <section class="container-twoCol flex row justify-center align-center" :contenteditable="edit">
    <component
      v-for="(widget,idx) in data"
      :key="idx"
      :is="widget.type"
      :data="widget.data"
      :contenteditable="true"
    ></component>
  </section>
</template>

<script>
import Video from "../video.cmp";
import Txt from "../txt.cmp";

export default {
  components: {
    Video,
    Txt
  },
  props: {
    edit: Boolean
    // widget: Object
  },
  data() {
    return {
      data: [
        {
          type: "Video",
          data: { url: "https://www.youtube.com/embed/tgbNymZ7vqY" }
        },
        {
          type: "Txt",
          data: {
            title: "Imagine",
            Txt:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laboriosam aliquam, porro harum libero assumenda modi illum placeat iusto, sed quidem ut dolore iure corrupti expedita. Enim, velit necessitatibus! Mollitia! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laboriosam aliquam, porro harum libero assumenda modi illum placeat iusto, sed quidem ut dolore iure corrupti expedita. Enim, velit necessitatibus! Mollitia!"
          }
        }
      ]
    };
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    }
  }
};
</script>


<style scoped>
.container-twoCol {
  border-style: dotted;
}
.text-header,
.text-center {
  display: flex;
  justify-content: center;
}
.column {
  float: left;
  width: 50%;
  padding: 10px;
  min-height: 300px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>