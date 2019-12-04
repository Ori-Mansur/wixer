<template>
  <div class="row">
    <div class="col-8">
      <h3>Nested draggable</h3>
      <NestedDaggable :tasks="list" />
    </div>

    <!-- <rawDisplayer class="col-3" :value="list" title="List" /> -->
  </div>
</template>

<script>
// import draggable from "vuedraggable";
import NestedDaggable from "./Nast";
// import rawDisplayer from "./infra/raw-displayer.vue";
export default {
  name: "nested-example",
  display: "Nested",
  order: 15,
  components: {
    NestedDaggable
  },
  data() {
    return {
      list: [
        {
          name: "task 1",
          tasks: [
            {
              name: "task 2",
              tasks: []
            }
          ]
        },
        {
          name: "task 3",
          tasks: [
            {
              name: "task 4",
              tasks: []
            }
          ]
        },
        {
          name: "task 5",
          tasks: []
        }
      ]
    };
  }
};
</script>
<style scoped></style>