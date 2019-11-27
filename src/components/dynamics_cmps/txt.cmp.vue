<template>
  <div>
    <p class="text" :contenteditable="edit">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Earum maiores praesentium, neque deleniti ex recusandae. Cum alias molestiae sint natus quisquam, corporis magnam voluptatibus,
      voluptas perspiciatis nam temporibus. Eligendi, animi!
    </p>
  </div>
</template>

<script>
export default {
  props: {
    edit: Boolean
  }
};
</script>

<style lang="scss" scoped>
.text {
  border-style: dotted;
}
</style>