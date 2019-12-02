<template>
  <div class="about container">
    <h1>This is an about page</h1>
  <section class="container-home">
    <img src="@/assets/wallpaper.jpg" alt="Notebook" style="width:100%;" />
    <div class="content">
      <h1>Heading</h1>
      <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
    </div>
  </section>
  </div>
</template>



<script>
export default {};
</script>


<style scoped>
.container-home {
  position: relative;
  /* max-width: 800px; */
  margin: 0 auto;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.container-home img {
  vertical-align: middle;
}

.container-home .content {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0); /* Fallback color */
  background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}
</style>