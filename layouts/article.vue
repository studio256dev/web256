<template>
  <div class="article-layout">
    <Header
      class="article-layout__header"
      :is-mob-menu-opened="isMobMenuOpened"
      @click-burger="toggleMobMenu"
      @click-to-link="onClickToLink"
    />
    <main class="article-layout__main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Header from '~/components/base/header/header'

export default {
  components: {
    Header,
  },

  data() {
    return {
      isMobMenuOpened: false,
    }
  },

  methods: {
    onClickToLink({ target, isLinkMobile }) {
      if (isLinkMobile) {
        this.isMobMenuOpened = false
      }

      if (target) {
        this.$router.push({
          name: 'index',
          hash: target,
        })
      }
    },

    toggleMobMenu(isOpened) {
      this.isMobMenuOpened = isOpened
    },
  },
}
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

  .header {
    position: relative;
  }

  &__main {
    flex: 1 1 auto;
    padding-top: 20px;
  }
}
</style>
