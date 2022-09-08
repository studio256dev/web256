<template>
  <section id="techs" class="techs container padding-top padding-bottom">
    <div class="techs__container">
      <ul class="techs__list">
        <li
          v-for="(tech, i) in $options.technologies"
          :key="i"
          class="techs__col"
        >
          <div class="techs__item">
            <component :is="tech" />
          </div>
        </li>
      </ul>
      <h2 class="techs__title text-mammoth">Технологии</h2>
    </div>
  </section>
</template>

<script>
import {
  IconCloud,
  IconCuber,
  IconDocker,
  IconFigma,
  IconGitlab,
  IconJira,
  IconLaravel,
  IconNode,
  IconPostrge,
  IconRedis,
  IconVue,
} from '~/components/icons'

export default {
  technologies: [
    IconDocker,
    IconCuber,
    IconNode,
    IconPostrge,
    IconJira,
    IconFigma,
    IconGitlab,
    IconRedis,
    IconLaravel,
    IconVue,
    IconCloud,
  ],
}
</script>

<style lang="scss">
@import 'technologies-section';
</style>
