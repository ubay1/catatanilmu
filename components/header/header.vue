<template>
  <div class="header">
    <div class="logo">
      <img v-if="dark === false" src="icon2.png" alt="Catatan Ilmu">
      <img v-if="dark === true" src="icon.png" alt="Catatan Ilmu">
    </div>
    <div class="header_title" :class="{dark}">
      Catatan Ilmu
    </div>
  </div>
</template>

<script src="./header.js"></script>
<style lang="scss" src="./header.scss"></style>
