<template>
<div>

  <div class="flex column align-center space-between" :style="{borderStyle: isEdit}" @click="isFocus=!isFocus" @mouseover="isFocus=true" @mouseout="isFocus=false">
    <h3 v-if="data.title" @click="isFocus=!isFocus" :contenteditable="true">{{data.title}}</h3>
    <p class="text" :contenteditable="true" @click="isFocus=!isFocus">
      {{data.txt}}
    </p>
  </div>
</div>
</template>

<script>
export default {
  props: {
    edit: Boolean,
    data: Object
  },
  created(){
  },
  data(){
    return{
      isFocus: false
    }
  },
  methods:{
    tellMe(){
      console.log('told ya')
    }
  },
  computed:{
    isEdit(){
      if (this.isFocus) return 'dotted'
      else return 'none'
    }
  },
};
</script>

<style lang="scss" scoped>
.text {
  padding: 10px;
}
</style>