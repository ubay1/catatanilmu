<template>
  <div class="__main_block">
    <Header />
    <ColorModePicker />
    <div class="main_doc">
      <div class="bg_article">
        <PostCard
          v-for="post in posts"
          :key="post.path"
          :post="post"
          :class="{dark}"
        />
      </div>
    </div>
  </div>
</template>

<script src="./home.js"></script>
<style lang="scss" src="./home.scss"></style>
