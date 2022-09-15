<template>
  <section id="price" class="price container padding-top padding-bottom">
    <div class="price__image">
      <picture>
        <source
          type="image/avif"
          srcset="
            ~/assets/images/price.avif     584w,
            ~/assets/images/price-2x.avif 1168w
          "
          sizes="584px"
        />
        <source
          type="image/webp"
          srcset="
            ~/assets/images/price.webp     584w,
            ~/assets/images/price-2x.webp 1168w
          "
          sizes="584px"
        />
        <img src="~/assets/images/price.png" alt="price" />
      </picture>
    </div>
    <div class="price__container">
      <div class="price__flex">
        <div class="price__top">
          <h2 class="price__title text-h1">Стоимость</h2>
          <p class="price__subtitle text-big">
            На цену влияет сложность проекта, уникальность дизайна, объем работ, которые необходимо выполнить.
          </p>
        </div>
        <div class="price__bot">
          <ul class="price__list">
            <li
              v-for="(p, idx) in $options.priceList"
              :key="idx"
              class="price__col"
            >
              <div class="price__item item-price">
                <span class="item-price__title text-super">{{ p.title }}</span>
                <p class="item-price__subtitle text-main">{{ p.subtitle }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  priceList: [
    {
      title: 'Бесплатно',
      subtitle: 'Предварительные встречи\n' + 'и консультации',
    },
    {
      title: 'от 50 000 ₽',
      subtitle: 'Анализ и описание вашего проекта',
    },
    {
      title: 'от 60 000 ₽',
      subtitle: 'Промо-сайт или лендинг',
    },
    {
      title: 'от 500 000 ₽',
      subtitle: 'Интернет-магазин',
    },
    {
      title: 'от 900 000 ₽',
      subtitle: 'Корпоративный или публичный портал',
    },
  ],
}
</script>

<style lang="scss">
@import 'price';
</style>
