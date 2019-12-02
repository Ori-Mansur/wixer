<template>
  <div id="app">
    <NavBar/>
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from '@/components/wixer_cmps/NavBar.vue'

export default {
  name: 'APP',
  components: {
    NavBar
  },
  created(){
    this.$store.dispatch({type:'loadWaps'})
    this.$store.dispatch({type:'loadWidgets'})
  }
}
</script>

