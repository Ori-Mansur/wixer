<template>
  <section class="container-threeCol" :contenteditable="edit">
    <h1 class="text-header">Hello main title</h1>
    <div class="row">
      <div class="column" :style="{}">
        <h2 class="text-center">Column 1</h2>
        <div class="article">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laboriosam aliquam, porro harum libero assumenda modi illum placeat iusto, sed quidem ut dolore iure corrupti expedita. Enim, velit necessitatibus! Mollitia!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laboriosam aliquam, porro harum libero assumenda modi illum placeat iusto, sed quidem ut dolore iure corrupti expedita. Enim, velit necessitatibus! Mollitia!
          </p>
        </div>
      </div>
      <div class="column" :style="{}">
        <h2 class="text-center">Column 2</h2>
        <div class="article">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laboriosam aliquam, porro harum libero assumenda modi illum placeat iusto, sed quidem ut dolore iure corrupti expedita. Enim, velit necessitatibus! Mollitia!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laboriosam aliquam, porro harum libero assumenda modi illum placeat iusto, sed quidem ut dolore iure corrupti expedita. Enim, velit necessitatibus! Mollitia!
          </p>
        </div>
      </div>
      <div class="column" :style="{}">
        <h2 class="text-center">Column</h2>
        <div class="article">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laboriosam aliquam, porro harum libero assumenda modi illum placeat iusto, sed quidem ut dolore iure corrupti expedita. Enim, velit necessitatibus! Mollitia!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laboriosam aliquam, porro harum libero assumenda modi illum placeat iusto, sed quidem ut dolore iure corrupti expedita. Enim, velit necessitatibus! Mollitia!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    edit: Boolean
  }
};
</script>
<style scoped>
.container-threeCol {
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