<template>
  <div class="tool-bar">
    <ul class="tool-bar-list">
      <!-- <li @click="menu=!menu" class="li-bar section-menu">
        <unicon name="list-ul" :fill="colorMenu" />
        <h3 :style="{color:colorMenu}">MENU</h3>
      </li>-->
      <!-- <div v-if="menu" class="list-option"> -->
      <div class="section-menu">
        <Menu />
      </div>
      <!-- </div> -->
      <li @click="section=!section" class="li-bar section-add">
        <unicon name="book-medical" :fill="color" />
        <h3 :style="{color:color}">Add</h3>
      </li>
      <div v-if="section" class="list-option add-option">
        <EditOption v-for="widget in widgets" :key="widget.id" :widget="widget" @select="add" />
      </div>

      <li @click="edit=!edit" class="li-bar section-edit">
        <unicon name="edit" :fill="colorEdit" />
        <h3 :style="{color:colorEdit}">Settings</h3>
      </li>
      <div v-if="edit" class="list-option wap-option">
        <SettingWap @setName="add" :nav="nav" />
      </div>
      <li @click="save" class="li-bar section-save">
        <unicon name="file-medical" fill="white" />
        <h3 :style="{color:'white'}">Save</h3>
      </li>
      <router-link to="/wap">
      <li  class="li-bar section-save">
        <unicon name="trash-alt" fill="white" />
        <h3 :style="{color:'white'}">Change</h3>
      </li>
            </router-link>


      <!-- <li class="element-add">
        +
        <span class="text">ADD ELEMENT</span>
      </li>-->
    </ul>
  </div>
</template>
<script>
// import { Drag } from 'vue-drag-drop';
import EditOption from "./EditOption.vue";
import SettingWap from "./SettingWap.vue";
import Menu from "./Menu.vue";
export default {
  props: {
    widgets: Array,
    elements: Array,
    nav: Object
  },
  data() {
    return {
      select: "",
      section: false,
      edit: false,
      menu: false,
      gray: "red"
    };
  },
  methods: {
    add(name) {
      this.edit = false;
      this.$emit("setName", name);
    },
    addElement(element) {
      this.$emit("addElement", element);
    },
    save() {
      this.$emit("save");
    }
  },
  computed: {
    color() {
      if (this.section) return "gold";
      else return "gray";
    },
    colorEdit() {
      if (this.edit) return "mediumvioletred";
      else return "gray";
    },
    colorMenu() {
      if (this.menu) return "blue";
      else return "gray";
    }
  },
  components: {
    EditOption,
    SettingWap,
    Menu
  }
};
</script>