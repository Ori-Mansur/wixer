<template>
  <section class="widget-editor-container" v-if="isEdit && data">
    <label @click="chooseColor = !chooseColor">
      <unicon name="palette" fill="black" class="icon-edit" />
    </label>
    <label @click="removeWidget" title="remove this widget">
      <unicon name="trash-alt" fill="black" class="icon-edit" />
    </label>
    <label @click="changePos(+1)">
      <unicon name="sort-amount-down" fill="black" class="icon-edit" />
    </label>
    <label @click="changePos(-1)">
      <unicon name="sort-amount-up" fill="black" class="icon-edit" />
    </label>
    <label :for="fileUpload" @change="setImg">
      <input :id="fileUpload" type="file" />
      <unicon name="image-plus" fill="black" class="icon-edit" />
    </label>
    <color-picker
      @changeColor="updateBackground"
      v-if="chooseColor"
    ></color-picker>
  </section>
</template>

<script>
import ColorPicker from "../wixer_cmps/ColorPicker";

export default {
  props: {
    data: Object
  },
  created() {
    const param = this.$route.path;
    if (param.includes("editor")) this.isEdit = true;
    else this.isEdit = false;
  },
  data() {
    return {
      chooseColor: false,
      imageChange: false,
      isEdit: false
    };
  },
  computed: {
    fileUpload() {
      return `file-upload-${this.data._id}`;
    }
  },
  methods: {
    changePos(diff){
      this.$emit('changePos', diff)
    },
    editWidget() {
      this.$emit("edit", this.data);
    },
    removeWidget() {
      this.$emit("removeWidget", this.data._id);
    },
    updateBackground(color) {
      this.data.style.bcgColor = color;
      this.editWidget();
    },
    setImg(event) {
      this.$emit("setImg", event);
    }
  },
  components: {
    ColorPicker
  }
};
</script>
<style lang="scss">
.widget-editor-container {
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  z-index: 1;

  .icon-edit {
    background-color: #fff;
    padding: 3px;
    cursor: pointer;
    border: 1px solid black;
    margin: 0.5px;
    border-radius: 7px;
  }
}
input[type="file"] {
  display: none;
}
</style>
