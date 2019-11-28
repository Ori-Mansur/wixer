<template>
  <section class="container-twoCol flex row justify-content align-center" :contenteditable="edit">
    <component
      v-for="(widget,idx) in value.data"
      :key="idx"
      :is="widget.type"
      :data="widget.data"
      :contenteditable="true"
    ></component>
  </section>
</template>

<script>
import Txt from "../dynamics_widgets/txt.cmp";
import Map from "../dynamics_widgets/map.cmp";

export default {
  props: {
    edit: Boolean,
    value: null
  },

  // data() {
  //   return {
  //     data: [
  //       {
  //         type: "Map",
  //         data: {
  //           pos: { lat: 34, lng: 32.4349958 },
  //           markers: [
  //             { position: { lat: 32.0853, lng: 34.781769 } },
  //             { position: { lat: 32.434048, lng: 34.919651 } },
  //             { position: { lat: 31.768318, lng: 35.213711 } }
  //           ]
  //         }
  //       },
  //       {
  //         type: "Txt",
  //         data: {
  //           Txt:
  //             "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laboriosam aliquam, porro harum libero assumenda modi illum placeat iusto, sed quidem ut dolore iure corrupti expedita. Enim, velit necessit. Ab laboriosam aliquam, porro harum libero assumenda modi illum placeat iusto, sed quidem ut dolore iure corrupti expedita. Enim, velit necessitatibus! Mollitia!"
  //         }
  //       }
  //     ]
  //   };
  // },
  created() {
    console.log("data container2", this.data);
  },
  components: {
    Txt,
    Map
  }
};
</script>
<style scoped>
.container-twoCol {
  border-style: dotted;
}
.text-header,
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