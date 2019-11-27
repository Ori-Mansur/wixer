<template>
  <div class="tool-bar">
    <button @click="add({type:'txt'})">ADD SECTION</button>
    <select @change="add" v-model="select"> 
      <option value="txt">text</option>
      <option value="NavBar">nav bar</option>
      <option>B</option>
      <option>C</option>
    </select>
    <button>ADD CMP</button>
    <button>ADD ELEMENT</button>
  </div>
</template>
<script>
export default {
    data() {
        return {
            select:'txt'
        }
    },
  methods: {
    add() {
      this.$emit("add", {type:this.select});
    }
  }
};
</script>