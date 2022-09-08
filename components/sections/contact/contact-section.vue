<template>
  <section id="contact" class="contact container padding-top padding-bottom">
    <div class="contact__image-container padding-top">
      <picture>
        <source
          class="contact__image"
          type="image/avif"
          srcset="
            ~/assets/images/contact-bg.avif   453w,
            ~/assets/images/contact-bg-x2.avif 906w
          "
          sizes="453px"
        />
        <source
          class="contact__image"
          type="image/webp"
          srcset="
            ~/assets/images/contact-bg.webp   453w,
            ~/assets/images/contact-bg-x2.webp 906w
          "
          sizes="453px"
        />
        <img src="~/assets/images/contact-bg.png" class="contact__image" />
      </picture>
    </div>

    <div class="contact__container">
      <div class="contact__content">
        <h2 class="contact__title text-h1">
          <span>У&nbsp;вас есть проект?</span><br>
          <span>Давайте сделаем его вместе</span>
        </h2>

        <div class="contact__links">
          <span class="contact__us-title text-big">Свяжитесь с нами:</span>
          <a href="mailto:hello@s256.ru" class="contact__link text-big"
            >hello@s256.ru</a
          >
          <a href="tel:89159101112" class="contact__link text-big"
            >+7 915 910 11 12</a
          >
        </div>

        <ul class="contact__social social">
          <li class="social__item">
            <a href="tg://resolve?domain=nik_borodin">
              <IconTelegram />
            </a>
          </li>

          <li class="social__item">
            <a href="https://wa.me/79159101112">
              <IconWhatsApp />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { IconTelegram, IconWhatsApp } from '~/components/icons'

export default {
  components: { IconTelegram, IconWhatsApp },
}
</script>

<style lang="scss">
@import 'contact-section';
</style>
