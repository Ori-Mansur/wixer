<template>
  <div class="tool-bar">
    <ul class="tool-bar-list">
      <li @click="section=!section" class="section-add">
        <unicon name="book-medical" :fill="color" />
        <h3 :style="{color:color}"> ADD </h3>
      </li>
      <div v-if="section" class="list-option">


        <!-- <li v-for="widget in widgets" :key="widget.id"> -->
         
          <EditOption v-for="widget in widgets" :key="widget.id" :widget="widget" @select="add"  />
        <!-- </li> -->
      </div>
      
      <li class="cmp-add">
        +
        <span class="text">ADD CMP</span>
      </li>

      <li class="element-add">
        +
        <span class="text">ADD ELEMENT</span>
      </li>
    </ul>

  </div>
</template>
<script>
// import { Drag } from 'vue-drag-drop';
import EditOption from './EditOption.vue'
export default {
  props: {
    widgets: Array
  },
  data() {
    return {
      select: "",
      section: false,
      gray:'red'
    }
  },
  methods: {
    add(widget) {
      console.log('emit',widget);
      
      this.$emit("add", widget);
    }
  },
  computed:{
color(){
  if(this.section)return 'gold'
  else return 'gray'
}
  },
  components:{
    EditOption,
    
  }
};
</script>