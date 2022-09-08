<template>
  <div class="contact container padding-top padding-bottom">
    <div class="contact__container">
      <h2 class="contact__title text-h1">Связаться с нами</h2>
      <div class="contact__links">
        <a href="mailto:hello@s256.ru" class="contact__link text-big"
          >hello@s256.ru</a
        >
        <a href="tel:89159101112" class="contact__link text-big"
          >+7 915 910 11 12</a
        >
      </div>
      <form class="contact__form" @submit.prevent="submit">
        <ValidationObserver ref="contact-form" class="">
          <div class="contact__form-top">
            <ValidationProvider
              v-slot="{ errors, failed }"
              class="contact__form-item"
              rules="required"
              vid="name"
              name="Имя"
            >
              <input
                v-model="name"
                class="contact__input"
                :class="{ 'contact__input--error': failed }"
                placeholder="Ваше имя"
              />
              <span class="contact__error">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors, failed }"
              class="contact__form-item"
              rules="required"
              vid="contact"
              name="Контакт"
            >
              <input
                v-model="contact"
                class="contact__input"
                :class="{ 'contact__input--error': failed }"
                placeholder="Электронная почта/телефон"
              />
              <span class="contact__error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <ValidationProvider
            class="contact__form-item contact__form-item--message"
            vid="message"
            name="Сообщение"
          >
            <input
              v-model="message"
              class="contact__input"
              placeholder="Сообщение (необязательно)"
            />
          </ValidationProvider>
        </ValidationObserver>
        <button type="submit" class="contact__submit">Отправить заявку</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules.umd'
import useGlobalAlert from '~/application/global-alert'
import { sendMail } from '~/services/mail-sender-adapter'

extend('required', {
  ...required,
  message: 'Обязательное поле',
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      name: '',
      contact: '',
      message: '',
      isLoading: false,
    }
  },

  methods: {
    async submit() {
      const isValid = await this.$refs['contact-form'].validate()
      if (!isValid || this.isLoading) return

      try {
        this.isLoading = true
         await sendMail({
          from: this.contact,
          name: this.name,
          message: this.message,
        })
        useGlobalAlert().createAlert('Сообщение отправлено', 'success')
      } catch (e) {
        useGlobalAlert().createAlert('Не удалось отправить сообщение', 'error')
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>

<style lang="scss">
@import 'contact-form-section';
</style>
