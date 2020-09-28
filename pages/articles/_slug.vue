<template>
  <div :id="isTheme" class="detail_article">
    <div class="header">
      <div class="deskripsi">
        {{ article.description }}
      </div>
      <div class="diupdate">
        {{ $moment(article.createdAt).format('LLLL') }}
      </div>
    </div>

    <nuxt-content :document="article" />

    <div class="footer">
      Referensi:
      <p
        v-for="(article, index) in article.referensi"
        :key="`article-${index}`"
      >
        <a :href="article" target="_blank" class="referensi">
          {{ article }}
        </a>
      </p>
    </div>
  </div>
</template>

<script src="./slug.js"></script>

<style lang="scss" src="./slug.scss"></style>
