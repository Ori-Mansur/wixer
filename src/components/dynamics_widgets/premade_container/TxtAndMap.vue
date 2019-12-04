<template>
  <section class="twoCol-container" :contenteditable="edit" >
    <widget-editor :widget="section" class="widget-editor-container flex justify-end" @remove="removeWidget"></widget-editor>
    <div class="component-container flex row justify-content">
      {{data}}
    <component
      v-for="(widget,idx) in section.data"
      :key="idx"
      :is="widget.type"
      :data="widget"
      :width="cmpWidth"
      :contenteditable="true"
      @remove="removeWidget"
    ></component>
    </div>

  </section>
</template>

<script>
import Txt from "../Txt";
import Map from "../Map";
import WidgetEditor from "../../wixer_cmps/WidgetEditor";

export default {
  props: {
    edit: Boolean,
    section: Object
  },
  created() {
    console.log(this.section);
    
  },
  data(){
    return{
      cmpWidth: 50,
    }
  },
  components: {
    Txt,
    Map,
    WidgetEditor
  },
  methods: {
    removeWidget(id) {
      this.$emit("remove", id);
    }
    // handleDrop(data) {
    //   console.log(event);
    //   console.log(event.toElement);
    //   // console.log(dragElement)
    // }
  }
};
</script>
<style scoped>
.twoCol-container {
  border-style: dotted;
  padding: 2rem

}
.text-center {
  display: flex;
  justify-content: center;
}
.column {
  float: left;
  width: 33.33%;
  padding: 10px;
  min-height: 300px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>