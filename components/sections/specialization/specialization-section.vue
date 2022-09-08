<template>
  <section class="specialization container padding-top padding-bottom">
    <div class="specialization__container">
      <h2 class="specialization__title text-super">
        Специализируемся на создании и&nbsp;поддержке сайтов с&nbsp;уникальным
        дизайном и&nbsp;инструментами
      </h2>
      <div class="specialization__content">
        <div class="specialization__image">
          <picture>
            <source
              type="image/avif"
              srcset="
                ~/assets/images/hand-phone.avif    340w,
                ~/assets/images/hand-phone-x2.avif 680w
              "
              sizes="340px"
            />
            <source
              type="image/webp"
              srcset="
                ~/assets/images/hand-phone.webp    340w,
                ~/assets/images/hand-phone-x2.webp 680w
              "
              sizes="340px"
            />
            <source
              srcset="
                ~/assets/images/hand-phone.png    340w,
                ~/assets/images/hand-phone-x2.png 680w
              "
              sizes="340px"
            />
            <img src="~/assets/images/hero-bg.png" />
          </picture>
        </div>
        <ul class="specialization__list">
          <li
            v-for="(s, i) in $options.specializationList"
            :key="i"
            class="text-big"
          >
            {{ s }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  specializationList: [
    'Образовательные платформы',
    'Премиальные промо-сайты',
    'Корпоративные порталы',
    'Интернет-магазины',
    'Онлайн-инструменты',
  ],
}
</script>

<style lang="scss">
@import 'specialization-section';
</style>
