<template>
  <section class="container-home">

    <div class="home-body">
      <div class="home-header-container">
              <NavBar class="nav-bar"/>
        <h1 class="home-header">Wixer</h1>
        <p
          class="home-header-content"
        >Drop elements to your page, add content and style it to look the way you like.</p>
        <button class="home-btn">Get Started</button>
      </div>
    </div>
          <H1 class="wap-header">Get Inspired With Projects Made By Our Freelancers -</h1>

    <div class="waps-examples">
      
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
    <div class="mainbox-header">
      <h1>All In One</h1>
      <p>The different parts of the platform are deeply integrated to build the most powerful ecosystem for building professional websites.</p>
    </div>
    <div class="mainbox">
      <div class="card">
        <img src="https://i.ibb.co/n61hzyZ/icon-1.png" />
        <h1>Drag & Drop Page Builder</h1>
        <p>The builder is the base part that defines the architecture of the website.</p>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/r203PpP/icon-2.png" />
        <h1>No Coding</h1>
        <p>Reach high-end designs, without coding. Design entire sites with your mouse</p>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/CvwRgNh/icon-3.png" />
        <h1>Easy To Use</h1>
        <p>Design at record speeds with simple user experience</p>
      </div>
      <div class="card">
        <img src="https://i.ibb.co/wcQDq1y/icon-4.png" />
        <h1>Faster Than Others</h1>
        <p>We let you design on the frontend with instant, real time results</p>
      </div>
    </div>
  </section>
</template>



<script>
import NavBar from '@/components/wixer_cmps/NavBar.vue'

export default {
components: {
    NavBar
  }

};

</script>


<style>

</style>