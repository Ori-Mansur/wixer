
<template>
 <footer class="footer" v-if="!isEditer">
          <h6>&copy; 2019 - Proudly created by Nimrod G. & Meidan L. & Ori M.</h6>
        </footer> 
</template>


<script>
export default {
  data(){
    return {
      isEditer:false
    }
  },
      created() {
    if (
      this.$route.path.includes("editor") ||
      this.$route.path.includes("publish")
    ) {
      this.isEditer = true;
    } else this.isEditer = false;
  },
  watch: {
    $route() {
      if (
        this.$route.path.includes("editor") ||
        this.$route.path.includes("publish")
      ) {
        this.isEditer = true;
      } else this.isEditer = false;
    }
  }
}
</script>

<style lang="scss">
  .footer {
  //  position: fixed;
  padding:10px;
  margin:0;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: #333333;
   color: white;
   text-align: center;
}
</style>