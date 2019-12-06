<template>
  <section class="container-home">
    <div class="home-body">
      <div class="home-header-container">
        <NavBar class="nav-bar" />
        <h1 class="home-header">Wixer</h1>
        <p
          class="home-header-content"
        >Create your own website, add content and style it to look the way you like.</p>
          <router-link to="wap">
        <button class="home-btn">Get Started</button>
      </router-link>
      </div>
    </div>
    <h2 class="wap-header">Get a glimpse of our templates -</h2>

    <div class="waps-examples" id="waps-examples">
      <div class="wap-picture">
        <img src="@/assets/card2.png" alt />
      </div>
      <div class="wap-picture">
        <img src="@/assets/card2.png" alt />
      </div>
      <div class="wap-picture">
        <img src="@/assets/card2.png" alt />
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