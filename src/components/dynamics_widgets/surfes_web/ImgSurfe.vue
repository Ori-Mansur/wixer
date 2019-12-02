<template>
<div class="card-img">
   <img :src="src" alt="">
</div>
</template>
<script>
export default {
    props:{
        src:String
    }
}
</script>
<style lang="scss" scoped>
.card-img{
    
    height: 100%;
}
img{
    width: 100%;
    height: 100%;
}
</style>