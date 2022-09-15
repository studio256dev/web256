<template>
  <div class="team container padding-top padding-bottom">
    <div v-for="(t, i) in $options.team" :key="i" class="team__list">
      <div class="team__img-wrapper">
        <video :src="t.srcset" class="team__img" autoplay loop muted playsinline />
      </div>
      <div class="team__name text-main">
        {{ t.name }}
      </div>
      <div class="team__post text-main">
        {{ t.post }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  team: [
    {
      name: 'Александр Иваньшин',
      post: 'менеджер + аналитик',
      srcset: './videos/ivanshin.mp4',
    },
    {
      name: 'Дмитрий Денисов',
      post: 'QA-инженер',
      srcset: './videos/denisov.mp4',
    },
    {
      name: 'Никита Легостаев',
      post: 'фронтэнд-разработчик',
      srcset: './videos/legostaev.mp4',
    },
    {
      name: 'Дмитрий Матыцин',
      post: 'бекэнд-разработчик',
      srcset: './videos/matycin.mp4',
    },
    {
      name: 'Дмитрий Голубев',
      post: 'фронтэнд-разработчик',
      srcset: './videos/golubev.mp4',
    },
    {
      name: 'Владимир Сидоров',
      post: 'бекэнд-разработчик',
      srcset: './videos/sidorov.mp4',
    },
    {
      name: 'Сергей Майнер',
      post: 'дизайнер',
      srcset: './videos/mayner.mp4',
    },
    {
      name: 'Юлия Белашова',
      post: 'бекэнд-разработчик',
      srcset: './videos/belashova.mp4',
    },
    {
      name: 'Дмитрий Мелер',
      post: 'менеджер',
      srcset: './videos/meler.mp4',
    },
  ],
}
</script>

<style lang="scss">
@import 'team-sections';
</style>
