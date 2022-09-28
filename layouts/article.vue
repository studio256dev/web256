<template>
  <div class="base-layout">
    <Nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '../assets/css/article-editor.min.css';
@import '../assets/scss/custom-article-editor';

.base-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  background: $color-main-graphen;
}

</style>
