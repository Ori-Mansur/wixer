<template>
  <div class="tool-bar">
    <ul class="tool-bar-list">
      <!-- <li @click="section=!section" class="section-add">
        <unicon name="book-medical" :fill="color" />
        <h3 :style="{color:color}"> ADD </h3>
      </li> -->
      <!-- <div v-if="section" class="list-option"> -->


        <li v-for="widget in widgets" :key="widget.id">
          <drag class="drag" :transfer-data="{ widget }">
           <EditOption  :option="widget" @select="add"  />
          </drag>
        </li>
      <!-- </div> -->
      
      <!-- <select @change="add" v-model="select" v-if="section">
        <option :value="widget" v-for="widget in widgets" :key="widget.id">{{widget.type}}</option>
      </select> -->
      <li v-for="element in elements" :key="element.id">
        <drag class="drag" :transfer-data="{ element }">
           <EditOption  :option="element" @select="addElement"  />
        </drag>
      </li>

      <!-- <li class="element-add">
        +
        <span class="text">ADD ELEMENT</span>
      </li> -->
    </ul>

  </div>
</template>
<script>
import { Drag } from 'vue-drag-drop';
import EditOption from './EditOption.vue'
export default {
  props: {
    widgets: Array,
    elements: Array
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
      this.$emit("add", widget);
    },
    addElement(element){
      this.$emit('addElement', element)
    }
  },
  computed:{
// color(){
//   if(this.section)return 'gold'
//   else return 'gray'
// }
  },
  components:{
    EditOption,
    Drag
  }
};
</script>