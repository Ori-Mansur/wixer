<template>
  <section class="video-container" >
    <iframe width="320" height="245" :src="data.data.url" class="video"></iframe>
  </section>
</template>
<script>
export default {
  props:{
    data: Object,
  },
  created(){
    console.log(this.data);
    
  },
  methods:{
    removeWidget(){
      this.$emit("remove", this.data._id);
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
