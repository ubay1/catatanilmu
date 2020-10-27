<template>
  <div class="__tags_block">
    <Header />
    <div class="tags_doc">
      <PostCard
        :articles="articlesByTag"
        :nameroute="routeName"
      />
    </div>
  </div>
</template>

<script src="./slug.js"></script>

<style lang="scss" src="./tags.scss"></style>
