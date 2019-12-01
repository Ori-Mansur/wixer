<template>
  <div class="tool-bar">
    <ul class="tool-bar-list">
      <li @click="section=!section" class="section-add">
        <unicon name="book-medical" :fill="color" />
        <h3 :style="{color:color}"> ADD </h3>
      </li>
      <div v-if="section" class="list-option">
          <EditOption v-for="widget in widgets" :key="widget.id" :widget="widget" @select="add"  />
      </div>
      
    <li @click="edit=!edit" class="section-edit">
        <unicon name="edit" :fill="colorEdit" />
        <h3 :style="{color:colorEdit}"> EDIT </h3>
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
      edit:false,
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
},
colorEdit(){
  if(this.edit)return 'mediumvioletred'
  else return 'gray'
}
  },
  components:{
    EditOption,
    
  }
};
</script>