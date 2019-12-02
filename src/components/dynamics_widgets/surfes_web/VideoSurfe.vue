<template>
  <section  >
    <iframe height="200" width="300"  src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
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
<style>

</style>