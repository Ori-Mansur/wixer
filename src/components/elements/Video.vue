<template>
  <section class="video-container flex column" >
    <i class="fa fa-link" @click="isEdit=true"></i>
    <iframe :src="data.data.url" class="video"></iframe>
    <input type="text" v-model="data.data.url" @change="updateLink"/>
  </section>
</template>
<script>
export default {
  props:{
    data: Object,
  },
  created(){
    console.log(this.data);
  },
  data(){
    return{
      isEdit:false,
      videoToEdit:{}
    }
  },
  methods:{
    removeWidget(){
      this.$emit("remove", this.data._id);
    },
    updateLink(){
      // this.videoToEdit = JSON.parse(JSON.stringify(this.data))
    }
  },
  components:{
    
  }
};
</script>
<style lang="scss">
.video{
  border: none;
}
</style>>
