<template>
  <section class="video-container">
    <iframe width="320" height="245" :src="value.data.url" class="video"></iframe>
  </section>
</template>


<script>

export default {
  props:{value: Object},
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
<style>
  .video-container{
    position: relative;
  }

</style>