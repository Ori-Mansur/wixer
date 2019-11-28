<template>
  <div class="flex column align-center">
    <h3 v-if="data.title">{{data.title}}</h3>
    <p class="text" :contenteditable="true">
      {{data.Txt}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    edit: Boolean,
    // data: Object
  },
  data(){
    return{
      data: {"title": "Imagine", "Txt": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laboriosam aliquam, porro harum libero assumenda modi illum placeat iusto, sed quidem ut dolore iure corrupti expedita. Enim, velit necessitatibus! Mollitia! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laboriosam aliquam, porro harum libero assumenda modi illum placeat iusto, sed quidem ut dolore iure corrupti expedita. Enim, velit necessitatibus! Mollitia!"}
    }
  },
};
</script>

<style lang="scss" scoped>
.text {
  border-style: dotted;
}
</style>