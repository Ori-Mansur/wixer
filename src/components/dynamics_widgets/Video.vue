<template>
  <section class="video-container" :style="{width: width}">
    <iframe width="320" height="245" :src="value.data.url" class="video"></iframe>
  </section>
</template>


<script>

export default {
  props:{
    value: Object,
    width: Number
  },
  created(){
  },
  methods:{
    removeWidget(){
      this.$emit("remove", this.value.id);
    }
  },
  components:{
    
  }
};
</script>
<style lang="scss">
.video{
  border: none;
}
</style>>
