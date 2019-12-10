<template>
  <section class="image-container flex column">
    <img :src="img" alt="">
  </section>
</template>
<script>
export default {
props: {
  edit: Boolean,
  styleData: Object
  },
  created(){
  },
  computed:{
    img(){
      if (this.styleData.imgUrl) return this.styleData.imgUrl
      else return '../../assets/img/placeholder.png'
  
    }
  }
}
</script>
