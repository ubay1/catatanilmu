<template>
  <div class="header">
    <div class="logo">
      <img v-if="isTheme === 'dark'" src="icon.png" alt="Catatan Ilmu">
      <img v-if="isTheme === 'light'" src="icon2.png" alt="Catatan Ilmu">
    </div>
    <div class="header_title" :class="{dark: isTheme === 'light' ? false : true}">
      Catatan Ilmu
    </div>
  </div>
</template>

<script src="./header.js"></script>
<style lang="scss" src="./header.scss"></style>
