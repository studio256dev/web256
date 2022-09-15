<template>
  <div class="wrapper">
    <AppGlobalAlert />
    <Header
      :is-mob-menu-opened="isMobMenuOpened"
      @click-burger="toggleMobMenu"
      @click-to-link="onClickToLink"
    />
    <main ref="main" class="main-page">
      <HeroSection />
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
    }
  },

  mounted() {
    window.addEventListener('wheel', this.replaceVerticalScrollByHorizontal, {
      passive: false,
    })
  },

  beforeDestroy() {
    window.removeEventListener('wheel', this.replaceVerticalScrollByHorizontal)
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

    onClickToLink({ target, isLinkMobile }) {
      const targetEl = document.getElementById(target)
      if (isLinkMobile) {
        this.isMobMenuOpened = false
      }

      if (target) {
        // TODO: добавил якорь для относительной ссылки для быстро фикса, нужно переделать
        this.$router.push(`#${target}`)
        this.$refs.main.scrollTo({
          left: targetEl.offsetLeft,
          top: 0,
          behavior: 'smooth',
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
@import '~assets/scss/pages/main-page';
</style>
