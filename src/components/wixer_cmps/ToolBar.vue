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
      <div>
      <li @click="section=!section" class="li-bar section-add">
        <unicon name="book-medical" :fill="color" />
        <h4 :style="{color:color}">Sections</h4>
      </li>
      <div v-if="section">
        <draggable
          class="dragArea list-group"
          :list="widgets"
          :sort="false"
          :group="{ name: 'people', pull: 'clone', put: false }"
          :clone="cloneDog"
        >
          <div
            class="list-group-item"
            v-for="element in widgets"
            :key="element.id"
          >{{ element.type }}</div>
        </draggable>
      </div>
      <li @click="el=!el" class="li-bar section-add">
        <unicon name="book-medical" :fill="color" />
        <h3 :style="{color:color}">ADD EL</h3>
      </li>
      <div v-if="el">
        <draggable
          class="dragArea list-group"
          :list="elements"
          :group="{ name: 'element', pull: 'clone', put: false }"
          :clone="cloneX"
        >
          <div
            class="list-group-item"
            v-for="element in elements"
            :key="element.id"
          >{{ element.type }}</div>
        </draggable>
      </div>

      <li @click="edit=!edit" class="li-bar section-edit">
        <unicon name="edit" :fill="colorEdit" />
        <h3 :style="{color:colorEdit}">Settings</h3>
      </li>
      <div v-if="edit" class="list-option wap-option">
        <SettingWap @setName="add" :nav="nav" />
      </div>
            <div class="section-save-container">

      <li @click="save" class="li-bar section-save">
        <unicon name="file-medical" fill="black" />
        <h3 :style="{color:'white'}">Save</h3>
      </li>
      <router-link to="/wap">
      <li  class="li-bar section-save">
        <unicon name="trash-alt" fill="black" />
        <h3 :style="{color:'white'}">Change</h3>
      </li>
            </router-link>
</div>
    </ul>
  </div>
</template>
<script>
// import { Drag } from 'vue-drag-drop';
// import EditOption from "./EditOption.vue";
import SettingWap from "./SettingWap.vue";
import draggable from "vuedraggable";
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
      el:false,
      edit: false,
      menu:false,
      gray: "red",
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
    save(){
      this.$emit('save')
    },
   cloneDog(section) {
      return JSON.parse(JSON.stringify(section)) ;
    },
   cloneX(section) {
      return JSON.parse(JSON.stringify(section)) ;
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
  created(){
this.$store.dispatch({type:'loadWidgets'})
  },
  components: {
    // EditOption,
    SettingWap,
    Menu,
    draggable
  }
};
</script>