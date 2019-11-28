<template>
  <div class="tool-bar">
    <ul>
      <li @click="section=!section" class="section-add">
        +
        <span class="text">ADD SECTION</span>
      </li>
      <select @change="add" v-model="select" v-if="section">
        <option :value="widget" v-for="widget in widgets" :key="widget.id">{{widget.type}}</option>
      </select>
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
export default {
  props: {
    widgets: Array
  },
  data() {
    return {
      select: "",
      section: false,
    }
  },
  methods: {
    add() {
      this.$emit("add", this.select);
    }
  }
};
</script>