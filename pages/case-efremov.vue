<template>
  <div class="case-container arx-content mw-800">
    <h1>Создание ювелирного каталога EFREMOV</h1>
    <p>
      Клиент пришёл к нам со старым каталогом, написанным лет 10 назад, уже его
      клиенты жалуются, что не удобно. Потребность было сделать новый
      современным, и по технологиям, и по дизайну. “Как у лидеров рынка!”. Также
      важна быстрая скорость работы и добавить ещё дюжину фич!
    </p>
    <h2>Проблемы старого каталога</h2>
    <ul>
      <li>слабая презентация товаров</li>
      <li>мало возможностей выборки товаров в каталоге</li>
      <li>
        сложности с новым функционалом из-за старого кода и потерявшегося
        разработчика
      </li>
      <li>нет системы сбора и аналитики данных для тестирования идей</li>
    </ul>
    <h2>Аналитика проекта.</h2>
    <p>
      Аналитиком проведено несколько встреч в ходе которых собраны требования,
      формализованы по методологии User Story Map.
    </p>
    <p>
      Каждая ключевая бизнес потребность записывалась как отдельная история,
      истории сложились в матрицу и составили дорожную карту проекта.
    </p>
    <figure>
      <img src="~/assets/images/articles/efremov/user-story.png" />
    </figure>
    <h3>Вызовы для нового каталога</h3>
    <ul>
      <li>высокая скорость работы сайта</li>
      <li>
        фотографии изделий должны выглядеть красиво и ярко на всех экранах
      </li>
      <li>
        разноформатные фильтры, согласованные с группировкой товаров по
        комплектам
      </li>
      <li>несколько корзин у одного пользователя</li>
      <li>
        структура каталог-товар-предложение-изделие её формирование из разных
        источников данных
      </li>
      <li>
        импорт из 1с У каждой крупной компании существует самобытная,
        исторически сложившаяся, система учёта, с набором правил и логики. Эту
        структуру данных требовалось аккуратно перенести в документацию и код.
      </li>
    </ul>
    <h3>Дизайн проекта</h3>
    <p>
      Работа по дизайну заняла примерно 3 месяца. Такой срок был связан с
      небольшим объёмом входных данных по дизайну и довольно широким набором
      интерфейсов и компонентов, которые выросли из требований к проекту. Также
      потребовалось растиражировать на адаптивные версии для планшета и
      телефона.
    </p>
    <p>
      Из финальных макетов была составлена схема движения пользователя по
      проекту - User Flow.
    </p>
    <figure>
      <img src="~/assets/images/articles/efremov/user-flow_ef.jpg" />
    </figure>
    <p>Что получилось:</p>
    <figure>
      <img src="~/assets/images/articles/efremov/Desktop-1-catalog-home.png" />
    </figure>
    <figure>
      <img src="~/assets/images/articles/efremov/Desktop-2-catalog.png" />
    </figure>
    <figure>
      <img
        src="~/assets/images/articles/efremov/Desktop-3-catalog-filters.png"
      />
    </figure>
    <figure>
      <img src="~/assets/images/articles/efremov/Desktop-4-catalog-card.png" />
    </figure>
    <figure>
      <img src="~/assets/images/articles/efremov/Desktop-5-catalog-cart.png" />
    </figure>
    <figure>
      <img src="~/assets/images/articles/efremov/Mobile.png" />
    </figure>
    <p>
      Подробнее дизайн проекта описан тут
      <a
        href="https://www.behance.net/gallery/151467861/EFREMOV"
        target="_blank"
        data-token-index="1"
        data-reactroot=""
        >https://www.behance.net/gallery/151467861/EFREMOV</a
      >
    </p>
    <p></p>
    <p>
      Каталог находится на стадии разработки. Все сложные моменты реализованы,
      осталось около 40% сопутствующего функционала. И будем запускать!
    </p>
    <h3>Техническая стек</h3>
    <ul>
      <li>Фреймворки - Laravel, Vue.js</li>
      <li>Инфраструктура - Yandex.Cloud, GitLab, Docker</li>
      <li>Мониторинг сервера - Prometheus + Grafana</li>
      <li>Логирование - Senrty</li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'article',

  head () {
    return {
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Создание ювелирного каталога EFREMOV'
        },
        {
          hid: 'description',
          property: 'og:description',
          content: 'Создание ювелирного каталога EFREMOV'
        },
      ]
    };
  },
}
</script>

<style lang="scss">
@import '~assets/scss/pages/case-efremov.scss';
</style>
