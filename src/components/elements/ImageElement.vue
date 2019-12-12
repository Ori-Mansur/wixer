<template>
  <section class="image-container flex column">
    <div class="img-tool">
      <label :for="fileUpload" @change="setImg">
        <input :id="fileUpload" type="file" />
        <unicon name="image-plus" fill="black" class="icon-edit" />
      </label>
      <label @click="removeElement" title="remove this widget">
        <unicon name="trash-alt" fill="black" class="icon-edit" />
      </label>
    </div>
    <img :src="data.data.url" alt />
  </section>
</template>
<script>
export default {
  props: {
    data: Object,
    idx: Number
  },
  computed: {
    fileUpload() {
      const x = Math.random();
      return `file-upload-${this.data._id}` + x;
    }
  },
  methods: {
    setImg(event) {
      this.$emit("setImg", { event, idx: this.idx });
    },
    removeElement() {
      this.$emit("removeWidget", this.data._id);
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.img-tool {
  position: absolute;
  .icon-edit {
    background-color: #fff;
    padding: 3px;
    cursor: pointer;
    border: 1px solid black;
    margin: 0.5px;
    border-radius: 7px;
  }
}
</style>
