<template>
  <section id="team" class="founder container padding-top padding-bottom">
    <div class="founder__content">
      <h2 class="founder__title text-h1">Команда</h2>
      <div class="founder__text text-main">
        Наша команда&nbsp;&mdash; это профессиональные <br />
        фронтенд и&nbsp;бэкенд-разработчики, дизайнеры, аналитики, тестировщики
        и&nbsp;маркетологи
      </div>
      <ul class="founder__info-box">
        <li>
          <div class="stat">
            <span class="stat__title text-super">7 лет</span>
            <p class="stat__text text-main">Студия cоздана в&nbsp;2015 году</p>
          </div>
        </li>
        <li>
          <div>
            <span class="stat__title text-super">15 лет</span>
            <p class="stat__text text-main">
              Опыт веб-разработки <br />
              у&nbsp;специалистов студии
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div class="founder__image-container">
      <div class="founder__image">
        <picture>
          <source
            type="image/avif"
            srcset="
              ~/assets/images/kolya.avif    476w,
              ~/assets/images/kolya-2x.avif 952w
            "
            sizes="476px"
          />
          <source
            type="image/webp"
            srcset="
              ~/assets/images/kolya.webp    476w,
              ~/assets/images/kolya-2x.webp 952w
            "
            sizes="476px"
          />
          <img src="~/assets/images/kolya.png" alt="Основатель" />
        </picture>
      </div>
      <div class="founder__nikolay">
        <div class="founder__name text-super">Николай Бородин</div>

        <div class="founder__job">Основатель</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import 'founder-section';
</style>
