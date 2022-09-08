<template>
  <section
    id="competencies"
    class="competencies container padding-top padding-bottom"
  >
    <div class="competencies__container">
      <div class="competencies__content">
        <div class="competencies__section">
          <IconAnalytics class="competencies__icon" />
          <span class="competencies__text"
            >Аналитика и&nbsp;проектирование</span
          >
        </div>
        <div class="competencies__section">
          <IconDesign class="competencies__icon" />
          <span class="competencies__text"
            >Продуктовый дизайн и&nbsp;айдентика</span
          >
        </div>
        <div class="competencies__section">
          <IconSoftware class="competencies__icon" />
          <span class="competencies__text">
            Разработка программного&nbsp;обеспечения
          </span>
        </div>
        <div class="competencies__section">
          <IconTesting class="competencies__icon" />
          <span class="competencies__text">
            Тестирование и&nbsp;контроль качества
          </span>
        </div>
        <div class="competencies__section">
          <IconSupport class="competencies__icon" />
          <span class="competencies__text">
            Поддержка и&nbsp;развитие продукта
          </span>
        </div>
      </div>

      <div class="competencies__box">
        <h2 class="competencies__title text-h1">Компетенции</h2>
      </div>

      <div class="competencies__content">
        <div class="competencies__section">
          <IconInstrumentConnection class="competencies__icon" />
          <span class="competencies__text">
            Подключение&nbsp;BI-инструментов
          </span>
        </div>
        <div class="competencies__section">
          <IconArrows class="competencies__icon" />
          <span class="competencies__text">
            Переработка&nbsp;проекта&nbsp;</span
          >
        </div>
        <div class="competencies__section">
          <IconMarketing class="competencies__icon" />
          <span class="competencies__text"> Маркетинг и&nbsp;продвижение </span>
        </div>
        <div class="competencies__section integrations">
          <IconTypesOfIntegrations
            class="competencies__icon integrations-icon"
          />
          <span class="competencies__text">
            Все виды интеграций: платёжные системы, рассылки, кассы, CRM
            и&nbsp;ERP-системы, интеграции 1С
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  IconAnalytics,
  IconDesign,
  IconSoftware,
  IconTesting,
  IconSupport,
  IconInstrumentConnection,
  IconArrows,
  IconMarketing,
  IconTypesOfIntegrations,
} from '~/components/icons'
export default {
  components: {
    IconAnalytics,
    IconDesign,
    IconSoftware,
    IconTesting,
    IconSupport,
    IconInstrumentConnection,
    IconArrows,
    IconMarketing,
    IconTypesOfIntegrations,
  },
}
</script>
<style lang="scss">
@import 'competencies-sections';
</style>
