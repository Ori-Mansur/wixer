<template>
  <div class="header-surfe" :style="{backgroundImage: `url(${url})`}">
    <NavBarSurfe />
    <h1 class="title-surfe">Ride every wave as if it's your last</h1>
    <h2 class="subtitle-surfe">We love the motion of the ocean</h2>
  </div>
</template>
<script>
import NavBarSurfe from "./NavBarSurfe";
export default {
  data() {
    return {
      url:
        "https://res.cloudinary.com/dw9jjocrg/image/upload/v1575279982/Surfing_pmcguk.png"
    };
  },
  computed: {},
  components: {
    NavBarSurfe
  }
};
</script>
<style lang="scss" scoped>
.header-surfe {
  background-size: cover;
  min-height: 180px;
  text-align: center
}
.title-surfe{
    color: #000000;
font-family: Playfair;
font-size: 35px;
font-style: italic;
margin-bottom: 10px;
margin-top: 100px
}
.subtitle-surfe{
    text-shadow: 0 3px 15px rgba(0, 0, 0, 0.64);
color: #ffffff;
font-family: Playfair;
font-size: 24px;
font-style: italic;
margin: 0px;
padding-bottom: 20px
}
</style>