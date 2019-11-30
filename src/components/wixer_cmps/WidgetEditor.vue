<template>
    <section class="widget-editor-container">
        <img src="../../assets/icons/palette.svg" class="inactive">
        <!-- <img src="img/palette.svg" @mouseover="chooseColor=true" @mouseleave.native="chooseColor=false" @click="openPalette" class="inactive"> -->
        <img src="../../assets/icons/bin.svg" @click="removeWidget">
        <!-- <img src="../../assets/icons/bin.svg" @click="removeNote" title="remove this note"> -->
        <!-- <color-picker @mouseleave.native="chooseColor=false" @changeColor="changeBackgroundColor" v-if="chooseColor"></color-picker> -->
    </section>
</template>

<script>
export default {
  props: {
    widget: Object
  },
  created(){
  },
  methods: {
    edit(wapId) {
      this.$emit("select", wapId);
    },
    removeWidget() {
      this.$emit("remove", this.widget.id);
    }
  }
};
</script>
<style lang="scss">
  .widget-editor-container{
      position:absolute;
      right: 25px;
      top: 40px;
      z-index: 100;
      background-color: #fff;
      padding: 5px;
    img{
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
</style>
