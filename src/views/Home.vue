<template>
  <section class="container-home">
    <div class="home-body">
      <div class="home-header-container">
        <NavBar class="nav-bar" />
        <h1 class="home-header">Wixer</h1>
        <p
          class="home-header-content"
        >Create your own website,
         add content and style it to look the way you like.</p>
          <router-link to="wap">
        <button class="home-btn">Get Started</button>
      </router-link>
      </div>
    </div>
    <h2 class="wap-header">Get a glimpse of our templates -</h2>

    <div class="waps-examples" id="waps-examples">
      
      <div class="wap-picture">
        <img src="https://i.ibb.co/BsXY2Jf/Screen-Shot-2019-12-07-at-20-32-41.png" alt />
      </div>
      <div class="wap-picture">
        <img src="https://i.ibb.co/JsMhs2M/Screen-Shot-2019-12-07-at-20-09-22.png" alt />
      </div>
      <div class="wap-picture">
        <img src="https://i.ibb.co/gVrsxZ5/Screen-Shot-2019-12-07-at-20-07-08.png" alt />
      </div>
      <div class="wap-picture">
        <img src="https://i.ibb.co/NpYQ8VW/Screen-Shot-2019-12-07-at-20-05-16.png" alt />
      </div>
    </div>
    <router-link to="/wap" class="show-link">Show more ></router-link>

  </section>
</template>



<script>
import NavBar from "@/components/wixer_cmps/NavBar.vue";

export default {
  components: {
    NavBar
  }
};
</script>


<style>
</style>