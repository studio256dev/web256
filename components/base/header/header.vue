<template>
  <div>
    <header class="header">
      <div class="header__container">
        <a
          href="#home"
          class="header__logo logo-header"
          @click.prevent="
            $emit('click-to-link', {
              target: 'home',
              isLinkMobile: true,
              hash: true,
            })
          "
        >
          <IconLogo class="logo-header__main" />
          <IconLogoMob class="logo-header__mob" />
        </a>

        <ul class="header__list">
          <li v-for="(link, i) in $options.links" :key="i">
            <a
              :href="link.href"
              @click.prevent="
                $emit('click-to-link', {
                  target: link.href,
                  isLinkMobile: true,
                  hash: true,
                })
              "
              >{{ link.name }}</a
            >
          </li>
        </ul>

        <div class="header__contact header-contact">
          <a href="tel:+79159101112" class="header-contact__phone"
            >8 915 910 11 12</a
          >
          <span class="header-contact__work-time"
            >По будням с 10:00 до 18:00</span
          >
          <a href="tel:+78004329394">
            <IconPhone class="header-contact__phone-icon"
          /></a>
        </div>

        <div class="header__request request">
          <button
            class="request__title"
            @click="
              $emit('click-to-link', {
                target: 'contact',
                hash: true,
              })
            "
          >
            Обсудить проект
          </button>
          <IconEllispse class="request__icon" />
        </div>

        <button
          class="header__burger"
          @click="$emit('click-burger', !isMobMenuOpened)"
        >
          <transition name="fade">
            <IconX v-if="isMobMenuOpened" />
            <IconBurger v-else />
          </transition>
        </button>
      </div>
    </header>

    <transition name="fade">
      <div v-show="isMobMenuOpened" class="mob-menu">
        <div class="mob-menu__container">
          <ul class="mob-menu__list">
            <li v-for="(link, i) in $options.links" :key="i">
              <a
                :href="link.href"
                @click.prevent="
                  $emit('click-to-link', {
                    target: link.href,
                    isLinkMobile: true,
                    hash: true,
                  })
                "
                >{{ link.name }}</a
              >
            </li>
          </ul>

          <div class="mob-menu__contacts">
            <a href="tel:+79159101112">+7 915 910 11 12</a>
            <a href="mailto:hello@s256.ru">hello@s256.ru</a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {
  IconLogo,
  IconEllispse,
  IconBurger,
  IconX,
  IconLogoMob,
  IconPhone,
} from '~/components/icons'

export default {
  components: {
    IconLogo,
    IconEllispse,
    IconBurger,
    IconX,
    IconLogoMob,
    IconPhone,
  },

  props: {
    isMobMenuOpened: { type: Boolean, default: false },
  },

  links: [
    {
      name: 'О нас',
      href: 'use',
    },
    {
      name: 'Команда',
      href: 'team',
    },
    {
      name: 'Компетенции',
      href: 'competencies',
    },
    {
      name: 'Кейсы',
      href: 'cases',
    },
    {
      name: 'Стоимость',
      href: 'price',
    },
    {
      name: 'Технологии',
      href: 'techs',
    },
  ],
}
</script>

<style lang="scss">
@import 'header';
</style>
