<template>
  <div class="tool-bar">
    <button @click="section=!section">ADD SECTION</button>
    <select @change="add" v-model="select" v-if="section">
      <option :value="widget" v-for="widget in widgets" :key="widget.id">{{widget.type}}</option>
      
    </select>
    <button>ADD CMP</button>
    <button>ADD ELEMENT</button>
  </div>
</template>
<script>
export default {
  props:{
    widgets:Array
  },
  data() {
    return {
      select: "",
      section: false
    };
  },
  methods: {
    add() {
      this.$emit("add", this.select );
    }
  }
};
</script>