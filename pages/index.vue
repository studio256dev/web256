<template>
  <div class="wrapper">
    <AppGlobalAlert />
    <Header
      :is-mob-menu-opened="isMobMenuOpened"
      @click-burger="toggleMobMenu"
      @click-to-link="onClickToLink"
    />
    <main ref="main" class="main-page">
        <HeroSection
          :show-swipe="!isPageScrolled"
          @click-to-link="onClickToLink"
        />
        <UseSection />
        <SpecializationSection />
        <FounderSection />
        <TeamSection />
        <CompetenciesSection />
        <CasesSection />
        <PortfolioSection />
        <PriceSection />
        <TechsSection />
        <ContactSection />
    </main>
  </div>
</template>

<script>
import HeroSection from '~/components/sections/hero/hero-section'
import UseSection from '~/components/sections/use/use-section'
import SpecializationSection from '~/components/sections/specialization/specialization-section'
import CompetenciesSection from '~/components/sections/competencies/competencies-sections'
import PortfolioSection from '~/components/sections/portfolio/portfolio-section'
import TeamSection from '~/components/sections/team/team-sections'
import PriceSection from '~/components/sections/price/price-section'
import TechsSection from '~/components/sections/technologies/technologies-section'
import CasesSection from '~/components/sections/cases/cases-section'
import ContactSection from '~/components/sections/contact/contact-section'
import FounderSection from '~/components/sections/founder/founder-section'
import Header from '~/components/base/header/header'
import AppGlobalAlert from '~/components/base/app-global-alert.vue'
// import { flushPromises } from '~/utils'

export default {
  components: {
    HeroSection,
    UseSection,
    SpecializationSection,
    Header,
    CompetenciesSection,
    PortfolioSection,
    TeamSection,
    PriceSection,
    FounderSection,
    TechsSection,
    CasesSection,
    ContactSection,
    AppGlobalAlert,
  },

  data() {
    return {
      isMobMenuOpened: false,
      isPageScrolled: false,
    }
  },

  mounted() {
    window.addEventListener('wheel', this.replaceVerticalScrollByHorizontal, {
      passive: false,
    })
    this.$refs.main.addEventListener('scroll', this.onScrollMain)

    setTimeout(this.setInitialScrollLeft, 50)
  },

  beforeDestroy() {
    window.removeEventListener('wheel', this.replaceVerticalScrollByHorizontal)
    this.$refs.main.removeEventListener('scroll', this.onScrollMain)
  },

  methods: {
    replaceVerticalScrollByHorizontal(event) {
      if (this.isMobMenuOpened) return

      if (event.deltaY !== 0) {
        event.preventDefault()
        const main = this.$refs.main
        main.scrollTo({
          left: main.scrollLeft + event.deltaY,
          behavior: 'auto',
        })
      }
    },

    onClickToLink({ target, isLinkMobile, hash }) {
      const targetEl = document.getElementById(target)
      if (isLinkMobile) {
        this.isMobMenuOpened = false
      }

      if (target) {
        this.scrollLeft(targetEl.offsetLeft)
      }

      if (target && hash) {
        // TODO: добавил якорь для относительной ссылки для быстро фикса, нужно переделать
        this.$router.push(`#${target}`)
        this.scrollLeft(targetEl.offsetLeft)
      }
    },

    toggleMobMenu(isOpened) {
      this.isMobMenuOpened = isOpened
    },

    onScrollMain() {
      this.isPageScrolled = this.$refs.main.scrollLeft !== 0
    },

    scrollLeft(offset) {
      this.$refs.main.scrollTo({
        left: offset,
        top: 0,
        behavior: 'smooth',
      })
    },

    setInitialScrollLeft() {
      if (this.$route.hash) {
        const targetEl = document.querySelector(this.$route.hash)
        this.scrollLeft(targetEl.offsetLeft)
      }
    },
  },
}
</script>

<style lang="scss">
@import '~assets/scss/pages/main-page';
</style>
