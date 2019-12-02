<template>
  <div class="about-us-surfe">
    <h2 class="about-title">About us</h2>
    <div class="about-img-surfe" :style="{backgroundImage: `url(${url})`}">
      <div class="about-main-content-surfe">
        <h3 class="about-txt-title-surfe">We are Surfers co.</h3>
        <p
          class="about-txt-surfe"
        >Lorem ipsum dolor sit amet, aeneam consectetur adipiscing elit. Fusce iaculis feugiat arcunum fermentum hendrerit. Suspendisse auctor labor nisi, et interdum diam facilisis.</p>
      </div>
      <component
      class="about-video-surfe"
      :is="'VideoSurfe'"
      :contenteditable="true"
    ></component>
    </div>
  </div>
</template>
<script>
import VideoSurfe from './VideoSurfe'
export default {
  data() {
    return {
      url:
        "https://res.cloudinary.com/dw9jjocrg/image/upload/v1575284478/Photo_dntxwk.png"
    };
  },
  components:{
      VideoSurfe
  }
};
</script>
<style lang="scss" scoped>
.about-us-surfe {
  height: 700px;
  background-color: #fff;
}
.about-title {
  opacity: 0.1;
  color: #000000;
  font-family: Montserrat;
  font-size: 90px;
  font-weight: 700;
  text-transform: uppercase;
  /* Text style for "About us" */
  letter-spacing: 14.6px;
  text-align: center;
  margin: 0;
}
.about-img-surfe {
  height: 300px;
  background-size: cover;
  padding-top: 150px;
  display: flex;
}
.about-video-surfe{
    margin: 100px
}
.about-main-content-surfe {
  background-color: white;
  padding: 20px;
  padding-left: 100px;
  width: 40%;
}
.about-txt-title-surfe {
  text-align: center;
  color: #000000;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
  /* Text style for "We are Sur" */
  letter-spacing: 2.52px;
}
.about-txt-surfe {
  color: #000000;
  font-family: Playfair;
  font-size: 1rem;
  font-style: italic;
  line-height: 38px;
}
</style>