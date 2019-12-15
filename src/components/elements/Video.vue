<template>
  <section class="video-container">
    <div class="vid-tool">
      <label :for="fileUpload" @click="toggleInput">
        <unicon name="link-alt" fill="black" class="icon-edit" />
      </label>
      <label
        @click="removeElement"
        title="remove this widget"
      >
        <unicon name="trash-alt" fill="black" class="icon-edit" />
      </label>
      <input
        :id="fileUpload"
        type="url"
        v-model="url"
        class="vid-input"
        @change="updateVideo"
      />
      <button class="vid-btn">Set</button>
    </div>
    <iframe
      :style="{width:100+'%', minHeight: 300+'px'}"
      
      :src="data.data.url"
      class="video"
    ></iframe>
  </section>
</template>
<script>
export default {
  props: {
    data: Object
  },
  data() {
    return {
      isInput: false,
      url: JSON.parse(JSON.stringify(this.data.data.url))
    };
  },
  methods: {
    updateVideo(){
      this.data.data.url = this.url
      this.$emit('updateElement', this.data.data.url)
    },
    removeElement() {
      this.$emit("remove", this.data._id);
    },
    toggleInput() {
      this.isInput = !this.isInput;
    }
  },
  computed: {
    fileUpload() {
      const x = Math.random();
      return `file-upload-${this.data._id}` + x;
    }
  },
  components: {}
};
</script>
<style lang="scss">
.video {
  border: none;
}
.vid-tool {
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
.vid-input {
  width: 70%;
  // margin-left:25px;
  // border-radius: 7px;
  border: none;
  height: 24px;

  border-bottom: 1px solid black;
}
.vid-btn {
  border-radius: 7px;
  margin-left: 0.5px;
  // display: inline-block;
  background-color: white;
  color: black;
  height: 24px;
  padding: 3px;
  cursor: pointer;
  border: none;

  // border: 1px solid black;
}</style
>>
