<template>
  <ul class="menu-options">
    <li class="menu-list uil uil-home">
      <router-link to="/">
        <unicon name="home" fill="black"></unicon>
        <!-- <h4>Home</h4> -->
      </router-link>
    </li>
    <!-- <li class="menu-list">
      <router-link to="/about">
        <h4>About</h4>
      </router-link>
    </li> -->
    <li class="menu-list">
      <router-link to="/wap">
      <unicon name="table" fill="black"></unicon>
        <!-- <h4>Templates</h4> -->
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  methods: {}
};
</script>