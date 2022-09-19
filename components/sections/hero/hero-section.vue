<template>
  <section id="home" ref="hero" class="hero container padding-top">
    <h1 ref="title" class="hero__title text-h1">
      <span>
        <span>Мы Создаём</span>
        <IconText class="hero__icon-text" />
      </span>
      <span>Надёжные и красивые</span>
      <span>Веб-сайты и сервисы</span>
    </h1>

    <div ref="decor" class="hero__decor decor" :style="{ height: decorHeight }">
      <span v-for="i in decorItemsCount" :key="i" class="decor__item"></span>
    </div>

    <div class="hero-cursor">
      <IconMouse class="hero-cursor__mouse" />
    </div>

    <div class="hero__bg">
      <picture>
        <source
          type="image/avif"
          srcset="
            ~/assets/images/hero-bg-mobile.avif     600w,
            ~/assets/images/hero-bg.avif            905w,
            ~/assets/images/hero-bg-mobile-x2.avif 1200w,
            ~/assets/images/hero-bg-x2.avif        1810w
          "
          sizes="(min-width: 1200px) 1800px, (min-width:600px) 905px, 600px"
        />
        <source
          type="image/webp"
          srcset="
            ~/assets/images/hero-bg-mobile.webp     600w,
            ~/assets/images/hero-bg.webp            905w,
            ~/assets/images/hero-bg-mobile-x2.webp 1200w,
            ~/assets/images/hero-bg-x2.webp        1810w
          "
          sizes="(min-width: 1200px) 1800px, (min-width:600px) 905px, 600px"
        />
        <source
          type="image/png"
          srcset="
            ~/assets/images/hero-bg-mobile.png     600w,
            ~/assets/images/hero-bg.png            905w,
            ~/assets/images/hero-bg-mobile-x2.png 1200w,
            ~/assets/images/hero-bg-x2.png        1810w
          "
          sizes="(min-width: 1200px) 1800px, (min-width:600px) 905px, 600px"
        />
        <img src="~/assets/images/hero-bg.png" />
      </picture>
    </div>

    <div v-if="showSwipe" class="hero__swipe">
      <div class="swipe">
        <span class="swipe__icon">
          <IconArrowRightCircle />
        </span>
        <span class="swipe__text text-main">Свайп</span>
      </div>
    </div>
  </section>
</template>

<script>
import { IconMouse, IconText, IconArrowRightCircle } from '~/components/icons'
import { debounce } from '~/utils'

const OFFSETS = {
  TITLE_BOTTOM: 15,
  DECOR_TOP: 64,
  ADDITIONAL: 50,
  PB: 20,
}

const sumOffsets = Object.values(OFFSETS).reduce((prev, cur) => cur + prev, 0)

export default {
  components: {
    IconArrowRightCircle,
    IconMouse,
    IconText,
  },

  props: {
    showSwipe: { type: Boolean, default: true },
  },

  data() {
    return {
      decorHeight: '',
      decorItemsCount: 1,
    }
  },

  mounted() {
    this.setDecorBlock()
    window.addEventListener('resize', this.setDecorBlock)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.setDecorBlock)
  },

  methods: {
    setDecorBlock: debounce(function () {
      const decorPT = Number.parseInt(
        getComputedStyle(this.$refs.decor).paddingTop
      )
      const firstDecorItem = this.$refs.decor.querySelector('span')
      const gridGapDecor = Number.parseInt(
        getComputedStyle(this.$refs.decor).gridGap
      )
      const widthDecorItem = Number.parseInt(
        getComputedStyle(firstDecorItem).width
      )
      const decorItemSize = gridGapDecor + widthDecorItem
      const availableHeight =
        this.$refs.hero.offsetHeight -
        this.$refs.title.offsetHeight -
        sumOffsets -
        decorPT
      const decorRowsCount = Math.ceil(availableHeight / decorItemSize)
      const decorColsCount = Math.ceil(
        this.$refs.decor.offsetWidth / decorItemSize
      )

      this.decorHeight = `${decorRowsCount * decorItemSize - 2}px`
      this.decorItemsCount = decorRowsCount * decorColsCount
    }, 300),
  },
}
</script>

<style lang="scss">
@import 'hero-section';
</style>
