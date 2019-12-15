<template>
  <div>
    <ul class="tool-bar-list">
      <div class="section-menu">
        <Menu />
      </div>
      <div class="list-group-container">
        <li @click="activateSection" class="li-bar section-add">
          <unicon name="book-medical" :fill="color" />
          <h4 :style="{ color: color }">Sections</h4>
        </li>
        <li @click="activateElement" class="li-bar section-add">
          <unicon name="book-medical" :fill="elColor" />
          <h4 :style="{ color: elColor }">Elements</h4>
        </li>
      </div>
      <div class="list-group-content">
        <div v-if="isSection">
          <draggable
            class="dragArea list-group"
            :list="widgets"
            :sort="false"
            :group="{ name: 'people', pull: 'clone', put: false }"
          >
            <div
              class="list-group-item"
              v-for="(element, idx) in widgets"
              :key="idx"
            >
              <i :class="element.icon" />
              {{ element.name }}
            </div>
          </draggable>
        </div>

        <div v-if="isElement">
          <draggable
            class="dragArea list-group"
            :list="elements"
            :sort="false"
            :group="{ name: 'element', pull: 'clone', put: false }"
            :clone="cloneX"
          >
            <div
              class="list-group-item"
              v-for="element in elements"
              :key="element._id"
            >
              <i :class="element.icon" />
              {{ element.name }}
            </div>
          </draggable>
        </div>
      </div>

      <li @click="activateSettings" class="li-bar section-edit">
        <i class="fa fa-cog"></i>
        <h3 :style="{ color: colorSections }">Settings</h3>
      </li>
      <div v-if="isSettings" class="list-option wap-option">
        <SettingWap @setName="add" :nav="nav" />
      </div>

      <div class="btn-container">
        <li class="flex" @click="$emit('preview')">
          <i class="fa fa-eye fa-2x"></i>
          <h4 :style="{ color: 'gray' }"></h4>
        </li>
        <li class="flex" @click="share">
          <i class="fa fa-share-alt-square fa-2x"></i>
          <h4 :style="{ color: 'gray' }"></h4>
        </li>
        <li class="flex" @click="save">
          <i class="fa fa-save fa-2x"></i>

          <h4 :style="{ color: 'white' }"></h4>
        </li>
        <router-link to="/wap">
          <li class="flex">
            <i class="fa fa-sign-out fa-2x"></i>

            <h4 :style="{ color: 'gray' }"></h4>
          </li>
        </router-link>
      </div>
      <ShareModal :isShare="isShare" @close="isShare = false" />
    </ul>
  </div>
</template>
<script>
import SettingWap from "./SettingWap.vue";
import draggable from "vuedraggable";
import Menu from "./Menu.vue";
import ShareModal from "./ShareModal.vue";

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
      isPreview: true,
      isShare: false,
      isSection: false,
      isElement: false,
      isSettings: false
    };
  },
  methods: {
    activateElement(){
      this.isSetting=false
      this.isSection=false
      this.isElement===true? this.isElement=false: this.isElement=true
    },
    activateSection(){
      this.isSetting = false
      this.isElement=false
      this.isSection===true? this.isSection=false: this.isSection=true
    },
    activateSettings(){
      this.isElement=false
      this.isSection=false
      this.isSettings===true? this.isSettings=false: this.isSettings=true
    },
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
    share() {
      // this.save()
      this.isShare = true;
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
    isActive() {
      if (this.activeList === "section") return true;
      else return false;
    },
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
    draggable,
    ShareModal
  }
};
</script>
