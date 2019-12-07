<template>
  <section class="image-container flex column">
    <img :src="styleData.bcgImg" alt="">
  </section>
</template>
<script>
export default {
props: {
  edit: Boolean,
  styleData: Object
  },
  created(){
  }
}
</script>
