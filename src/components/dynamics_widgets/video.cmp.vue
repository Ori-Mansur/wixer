<template>
  <section class="video-container">
    <widget-editor :widget="value" class="widget-editor-container" @remove="removeWidget"></widget-editor>
    <iframe width="320" height="245" :src="value.data.url" class="video"></iframe>
  </section>
</template>


<script>
import WidgetEditor from '../wixer_cmps/WidgetEditor'

export default {
  props:{value: Object},
  created(){
  },
  methods:{
    removeWidget(){
      this.$emit("remove", this.value.id);
    }
  },
  components:{
    WidgetEditor
  }
};
</script>
<style>
  .video-container{
    position: relative;
  }

</style>