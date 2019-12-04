<template>
  <ul class="menu-options">
    <li class="menu-list uil uil-home">
      <router-link to="/">
        <unicon name="home"  size="22px" fill="black" title="Home"></unicon>
      </router-link>
    </li>
    <div class="logo"> <img src="@/assets/wixer.png" alt=""></div>

        <i class="fab fa-accusoft"></i>
    <!-- <li class="menu-list">
      <router-link to="/about">
        <h4>About</h4>
      </router-link>
    </li> -->
    <li class="menu-list">
      <router-link to="/wap">
      <unicon name="table" fill="black" title="Templates"></unicon>
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