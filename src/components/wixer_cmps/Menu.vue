<template>
  <ul class="menu-options">
    <li class="menu-list uil uil-home">
      <router-link to="/">
        <unicon name="home" fill="royalblue"></unicon>

        <h4>Home</h4>
      </router-link>
    </li>
    <li class="menu-list">
      <router-link to="/about">
        <h4>About</h4>
      </router-link>
    </li>
    <li class="menu-list">
      <router-link to="/wap">
        <h4>Templates</h4>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  methods: {}
};
</script>