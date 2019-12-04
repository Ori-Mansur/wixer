<template>
  <section class="widget-editor-container" v-if="isEdit">
    <label @click="chooseColor = !chooseColor">
      <unicon name="palette" fill="black" class="icon-edit" />
    </label>
    <label @click="removeWidget" title="remove this widget">
      <unicon name="trash-alt" fill="black" class="icon-edit" />
    </label>
    <label @click="savePos(+1)">
      <unicon name="sort-amount-down" fill="black" class="icon-edit" />
    </label>
    <label @click="savePos(-1)">
      <unicon name="sort-amount-up" fill="black" class="icon-edit" />
    </label>

    <label :for="fileUpload" @change="setImg">
      <input :id="fileUpload" type="file" />
      <unicon name="image-plus" fill="black" class="icon-edit" />
    </label>
    <color-picker @changeColor="updateBackground" v-if="chooseColor"></color-picker>
  </section>
</template>

<script>
import ColorPicker from "../wixer_cmps/ColorPicker";

export default {
  props: {
    data: Object
  },
  created() {
    // console.log("newWidget", this.widget);
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
    imageUrlRef() {
      return this.data.style.bcgImg;
    },
    fileUpload() {
      return `file-upload-${this.data._id}`;
    }
  },
  methods: {
    editWidget() {
      this.$emit("edit", this.data);
    },
    removeWidget() {
      this.$emit("remove", this.widget._id);
      console.log(this.data._id, "remove");
    },
    updateBackground(color) {
      this.data.style.bcgColor = color;
      this.editWidget();
      // console.log(this.widget.data.style)
    },
    setImg(event){
this.$emit('setImg',event)
    },
    
  },
  watch: {
    "this.$route.path"(curr) {
      if (curr.includes("editor")) this.isEdit = true;
      else this.isEdit = false;
    }
    // widget: {
    //   handler(){
    //     console.log('changing data...')
    //     this.$emit("edit", this.widget);
    //   },
    // deep: true
    // },
  },
  components: {
    ColorPicker
  }
};
</script>
<style lang="scss">
.widget-editor-container {
  // position: fixed;
  position: absolute;
  top: 0px;
  right: 0px;
  // z-index: 100;

  padding: 5px;
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
