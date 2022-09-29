<template>
  <div class="article-layout">
    <div class="article-layout__wrapper">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '../assets/css/article-editor.min.css';
@import '../assets/scss/custom-article-editor';

.article-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  background: $color-main-graphen;

  &__wrapper {
    flex: 1 1 auto;
    max-width: 800px;
  }
}
</style>
