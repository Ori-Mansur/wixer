<template>
  <section class="image-container flex column" :style="{width: data.style.width + 'px'}">
      <h1 v-if="data.title" :style="{ color: data.style.txtTitleColor, fontSize: data.style.txtSize + 'px'}">
        {{ data.title }}
      </h1>
  </section>
</template>