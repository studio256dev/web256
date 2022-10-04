<template>
  <div id="cases" class="portfolio container padding-top padding-bottom">
    <ul class="portfolio__list">
      <li v-for="(p, i) in $options.portfolio" :key="i">
        <div class="portfolio-item">
          <div class="portfolio-item__top">
            <div class="portfolio-item__title text-super">
              <span>{{ p.title }}</span>
              <a :href="p.link" :target="p.target" class="portfolio-item__badge">{{
                p.badge
              }}</a>
            </div>
            <div class="portfolio-item__subtitle text-main">
              {{ p.subtitle }}
            </div>
          </div>
          <div class="portfolio-item__img-container">
            <img :src="p.helpImg" :alt="p.badge" class="help-img" />
            <picture>
              <source
                v-for="(s, idx) in p.sources"
                :key="idx"
                :type="s.type"
                :srcset="s.srcset"
                :sizes="p.sizes"
              />
              <img
                class="portfolio-item__main-img"
                :src="p.img"
                :alt="p.badge"
              />
            </picture>
          </div>
          <a
            v-if="p.pageUrl"
            :href="p.pageUrl"
            class="portfolio-item__link"
            :target="p.target"
          ></a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  portfolio: [
    {
      title: 'Efremov',
      badge: 'Подробнее',
      link: '/case-efremov',
      target: '_self',
      subtitle:
        'Интернет-каталог ювелирных изделий для оптовых клиентов компании',
      pageUrl: '/case-efremov',
      sizes: '606px',
      sources: [
        {
          type: 'image/avif',
          srcset:
            './images/portfolio-efremov.avif 606w, ./images/portfolio-efremov-2x.avif 1212w',
        },
        {
          type: 'image/webp',
          srcset:
            './images/portfolio-efremov.webp 606w, ./images/portfolio-efremov-2x.webp 1212w',
        },
      ],
      img: './images/portfolio-efremov.png',
      helpImg: './images/portfolio-efremov-help.jpg',
    },
    {
      title: 'Med.Studio',
      badge: 'med.studio',
      link: 'https://med.studio/',
      target: '_blank',
      subtitle:
        'Онлайн-платформа для дополнительного образования медицинских сотрудников',
      sizes: '480px',
      sources: [
        {
          type: 'image/avif',
          srcset:
            './images/portfolio-med.avif 480w, ./images/portfolio-med-2x.avif 960w',
        },
        {
          type: 'image/webp',
          srcset:
            './images/portfolio-med.webp 480w, ./images/portfolio-med-2x.webp 960w',
        },
      ],
      img: './images/portfolio-med.png',
      helpImg: './images/portfolio-med-help.jpg',
    },
    {
      title: '1С Вьетнам',
      badge: '1c.com.vn',
      link: 'https://1c.com.vn/vn',
      target: '_blank',
      subtitle: 'Портал программных продуктов 1С для вьетнамского рынка',
      sizes: '603px',
      sources: [
        {
          type: 'image/avif',
          srcset:
            './images/portfolio-1c.avif 603w, ./images/portfolio-1c-2x.avif 1206w',
        },
        {
          type: 'image/webp',
          srcset:
            './images/portfolio-1c.webp 603w, ./images/portfolio-1c-2x.webp 1206w',
        },
      ],
      img: './images/portfolio-1c.png',
      helpImg: './images/portfolio-1c-help.jpg',
    },
    {
      title: 'ОМК',
      badge: 'openmedcom.ru',
      link: 'https://openmedcom.ru/',
      target: '_blank',
      subtitle: 'Проект дистанционного образования для врачей',
      sizes: '542px',
      sources: [
        {
          type: 'image/avif',
          srcset:
            './images/portfolio-omc.avif 542w, ./images/portfolio-omc-2x.avif 1084w',
        },
        {
          type: 'image/webp',
          srcset:
            './images/portfolio-omc.webp 542w, ./images/portfolio-omc-2x.webp 1084w',
        },
      ],
      img: './images/portfolio-omc.png',
      helpImg: './images/portfolio-omc-help.jpg',
    },
  ],
}
</script>

<style lang="scss">
@import 'portfolio';
</style>
