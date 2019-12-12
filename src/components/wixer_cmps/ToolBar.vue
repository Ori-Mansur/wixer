<template>
  <div>
    <ul class="tool-bar-list">
      <div class="section-menu">
        <Menu />
      </div>
      <div class="list-group-container">
        <li @click="section=!section" class="li-bar section-add">
          <unicon name="book-medical" :fill="color" />
          <h4 :style="{color:color}">Sections</h4>
        </li>
        <li @click="el=!el" class="li-bar section-add">
          <unicon name="book-medical" :fill="elColor" />
          <h4 :style="{color:elColor}">Elements</h4>
        </li>
      </div>
      <div class="list-group-content">
        <div v-if="section">
          <draggable
            class="dragArea list-group"
            :list="widgets"
            :sort="false"
            :group="{ name: 'people', pull: 'clone', put: false }"
          >
            <div class="list-group-item" v-for="(element,idx) in widgets" :key="idx">
              <i :class="element.icon" />
              {{ element.name }}
            </div>
          </draggable>
        </div>

        <div v-if="el">
          <draggable
            class="dragArea list-group"
            :list="elements"
            :sort="false"
            :group="{ name: 'element', pull: 'clone', put: false }"
            :clone="cloneX"
          >
            <div class="list-group-item" v-for="element in elements" :key="element._id">
              <i :class="element.icon" />
              {{ element.name }}
            </div>
          </draggable>
        </div>
      </div>

      <li @click="edit=!edit" class="li-bar section-edit">
        <i class="fa fa-cog"></i>
        <h3 :style="{color:colorSections}">Settings</h3>
      </li>
      <div v-if="edit" class="list-option wap-option">
        <SettingWap @setName="add" :nav="nav" />
      </div>

      <div class="btn-container">
        <li @click="$emit('preview')">
          <i class="fa fa-eye fa-2x"></i>
          <h4 :style="{color:'gray'}"></h4>
        </li>
        <li @click="save">
          <i class="fa fa-share-alt-square fa-2x"></i>
          <h4 :style="{color:'gray'}"></h4>
        </li>
        <li @click="save">
          <i class="fa fa-save fa-2x"></i>

          <h4 :style="{color:'white'}"></h4>
        </li>
        <router-link to="/wap">
          <li>
            <i class="fa fa-sign-out fa-2x"></i>

            <h4 :style="{color:'gray'}"></h4>
          </li>
        </router-link>
      </div>

      <!-- <div class="section-publish-container">
        <li @click="$emit('preview')" class="li-bar section-publish">
          <i class="fa fa-eye"></i>
          <h4 :style="{color:'gray'}">Preview</h4>
        </li>
        <li @click="save" class="li-bar section-publish">
          <i class="fa fa-share-alt-square"></i>
          <h4 :style="{color:'gray'}">Share</h4>
        </li>
      </div>
      <div class="section-save-container">
        <li @click="save" class="li-bar section-save">
          <i class="fa fa-save"></i>

          <h4 :style="{color:'white'}">Save</h4>
        </li>
        <router-link to="/wap">
          <li class="li-bar section-save">
            <i class="fa fa-sign-out"></i>

            <h4 :style="{color:'gray'}">Cancel</h4>
          </li>
        </router-link>
      </div>-->
    </ul>
  </div>
</template>
<script>
import SettingWap from "./SettingWap.vue";
import draggable from "vuedraggable";
import Menu from "./Menu.vue";

export default {
  props: {
    widgets: Array,
    widget: Array,
    elements: Array,
    nav: Object
  },
  data() {
    return {
      select: "",
      section: false,
      el: false,
      edit: false,
      menu: false,
      gray: "red",
      isPreview: true
    };
  },
  methods: {
    add(name) {
      this.edit = false;
      this.$store.commit({ type: "setName", name });
    },
    addElement(element) {
      this.$emit("addElement", element);
    },
    save() {
      this.$emit("save");
    },
    cloneX(section) {
      console.log(section);

      return JSON.parse(JSON.stringify(section));
    },
    onChange: function(evt) {
      console.log(evt);
    }
  },
  computed: {
    color() {
      if (this.section) return "#6ACEF9";
      else return "gray";
    },
    elColor() {
      if (this.el) return "#6ACEF9";
      else return "gray";
    },
    colorEdit() {
      if (this.edit) return "#6ACEF9";
      else return "gray";
    },
    colorSections() {
      if (this.edit) return "#6ACEF9";
      else return "gray";
    },
    colorMenu() {
      if (this.menu) return "#6ACEF9";
      else return "gray";
    },
    group() {
      const group = this.$store.getters.group;
      console.log("group", group);
      return group;
    }
  },
  created() {
    this.$store.dispatch({ type: "loadWidgets" });
  },
  components: {
    SettingWap,
    Menu,
    draggable
  }
};
</script>


