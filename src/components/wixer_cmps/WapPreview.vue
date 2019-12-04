<template>
  <li class="wap-preview">
    <h3>{{wap.name}}</h3>
    <div>
      <img src="@/assets/card2.png" />
    </div>
    <button @click="edit(wap._id)">EDIT</button>

    <button @click="preview(wap._id)">P</button>

    <!-- <pre>{{wap.name}}</pre> -->
  </li>
</template>
<script>
export default {
  props: {
    wap: Object
  },
  methods: {
    edit(wapId) {
      this.$emit("select", wapId);
    },
    preview(wapId) {
      this.$emit("preview", wapId);
    }
  }
};

// https://res.cloudinary.com/dw9jjocrg/image/upload/v1575441412/kljyhuxlsodfhvbw00m1.png
//   https://res.cloudinary.com/dw9jjocrg/image/upload/v1575441474/mh4clwrfz5h5eplxbaot.png
</script>

