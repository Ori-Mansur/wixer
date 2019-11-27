<template>
  <div id="app">
    <NavBar/>
       
    <router-view class="container"/>
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'APP',
  components: {
    NavBar
  }
}
</script>

