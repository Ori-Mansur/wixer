<template>
        <!-- <iframe  src="https://www.facebook.com/orimansur"></iframe> -->
        <div class="facebook-frame">
            <img src="https://res.cloudinary.com/dw9jjocrg/image/upload/v1575290430/Logo_Facebook_j0p5j6.png" alt="">
<iframe class="fb-link-page" :src="`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${fbPage}%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`"  style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
      
        </div>
</template>
<script>
export default {
    data(){
        return{
fbPage:'SamsungIsrael'
        }
    }
}
</script>
<style lang="scss" scoped>
.fb-link-page{
height: 300px;
width: 80%;
}
.facebook-frame{
    width: 50%;
    background-color: #4267B2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px
}
img{
    width: 100px;
    height: 20px;
    margin: 30px
}

</style>