<template>
  <div class="main-card-surfe-container">
    <div class="main-card-surfe">
     <component
     class="main-img"
      :is="'ImgSurfe'"
      :src="src"
      :contenteditable="true"
    ></component>
     <component
     class="main-content"
      :is="'ContentCardSurfe'"
      :src="src"
      :contenteditable="true"
    ></component>
    </div>
  </div>
</template>
<script>
import ImgSurfe from './ImgSurfe.vue'
import ContentCardSurfe from './ContentCardSurfe'
export default {
    data(){
        return {

            src:'https://res.cloudinary.com/dw9jjocrg/image/upload/v1575282231/Board_ifrtzy.png'
        }
    },
    components:{
        ImgSurfe,
        ContentCardSurfe
    }
    
}
</script>
<style lang="scss" scoped>
.main-card-surfe-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    background-color: #fff;
}
.main-card-surfe {
    display: flex;
  height: 300px;
  max-width: 500px;
  box-shadow: 0 -8px 30px rgba(0, 0, 0, 0.34);
  background-color: #ffffff;
  padding: 20px;
  background-image: url('https://res.cloudinary.com/dw9jjocrg/image/upload/v1575283984/Corner_jsphkj.png');
  background-size: contain;
  background-repeat: no-repeat;
}
.main-img{
    width: 50%
}
.main-content{
    width: 50%
}
</style>