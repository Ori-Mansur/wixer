<template>
  <iframe width="320" height="245" :src="data.url" class="video"></iframe>
</template>


<script>
export default {
  props:{data: Object},
  created(){
    console.log(this.data)
  }
};
</script>


<style>
</style>