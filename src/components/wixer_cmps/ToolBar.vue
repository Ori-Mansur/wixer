<template>
  <div class="tool-bar">
    <button @click="section=!section">ADD SECTION</button>
    <select @change="add" v-model="select" v-if="section"> 
      <option value="txt">text</option>
      <option value="NavBar">nav bar</option>
      <option value="Container1">Container1</option>
      <option value="Container3">Container3</option>
      <option value="Header">Header</option>
      <option>B</option>
      <option>C</option>
    </select>
    <button>ADD CMP</button>
    <button>ADD ELEMENT</button>
    <button @click="add({type:'header'})">Add Header</button>
  </div>
</template>
<script>
export default {
    data() {
        return {
            select:'txt',
            section:false
        }
    },
  methods: {
    add() {
      this.$emit("add", {type:this.select});
    }
  }
};
</script>