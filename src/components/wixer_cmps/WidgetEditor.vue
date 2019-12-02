<template>
  <section class="widget-editor-container" v-if="isEdit">
    <img
      src="../../assets/icons/palette.svg"
      class="inactive"
      @click="chooseColor = !chooseColor"
    />
    <img
      src="../../assets/icons/bin.svg"
      @click="removeWidget"
      title="remove this widget"
    />
    <button @click="savePos(-1)">UP</button>
    <button @click="savePos(+1)">DOWN</button>
    <label :for="fileUpload" class="custom-file-upload" @change="uploadImg">
      <input :id="fileUpload" type="file" />
      <img src="../../assets/icons/imgup.svg" />
    </label>
    <color-picker
      @changeColor="updateBackground"
      v-if="chooseColor"
    ></color-picker>
  </section>
</template>

<script>
import ColorPicker from "../wixer_cmps/ColorPicker";
import CloudinaryService from "../../services/cloudinary.service.js";

export default {
  props: {
    widget: Object
  },
  created() {
    console.log('newWidget', this.widget);
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
  computed:{
    imageUrlRef(){
      return this.widget.data.style.bcgImg
    },
    fileUpload(){
      return `file-upload-${this.widget._id}`
    }
  },
  methods: {
    editWidget() {
      this.$emit("edit", this.widget);
    },
    removeWidget() {
      this.$emit("remove", this.widget._id);
      console.log(this.widget._id, "remove");
    },
    updateBackground(color) {
      this.widget.data.style.bcgColor = color;
      this.editWidget()
      // console.log(this.widget.data.style)
    },
    uploadImg(event) {
      console.log(event)
      CloudinaryService.uploadImg(event)
        .then(imgUrl => {
          console.log('widget of Imaage2',this.widget)
          // this.$emit("newImage", imgUrl);

          this.widget.data.style.bcgImg = imgUrl
        })
        .then(()=>this.editWidget())
    }
  },
  watch: {
    "this.$route.path"(curr) {
      if (curr.includes("editor")) this.isEdit = true;
      else this.isEdit = false;
    },
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
  // position: absolute;
  right: 25px;
  top: 160px;
  z-index: 100;
  background-color: #fff;
  padding: 5px;
  img {
    width: 30px;
    height: 30px;
    padding: 3px;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 7px;
    margin-top: 5px;
    margin-right: 5px;
  }
}
input[type="file"] {
  display: none;
}
</style>
