<template>
  <Container>
    <header class="header">
      <nuxt-link to="/" v-if="$route.path !== '/'" class="header__logo">
        <p class="header__title">
          Проект Благотворительного Фонда Константина Хабенского
        </p>
      </nuxt-link>
      <p class="header__title" v-else>
        Проект Благотворительного Фонда Константина Хабенского
      </p>
      <Menu :menu="menu" :className="'header__menu'" />
      <MobileIcon class="header__mobile-icon" />
    </header>
  </Container>
</template>

<script>
import Menu from '~/components/Menu';
import Container from '~/components/Container';
import MobileIcon from '~/components/UI/MobileIcon';

export default {
  components: { Container, Menu, MobileIcon },
  data() {
    return {
      menu: [
        {
          path: '/',
          title: 'Главная',
          id: 'index',
          isUnderlined: true,
        },
        {
          path: '/stories',
          title: 'Истории',
          id: 'stories',
          isUnderlined: true,
        },
        {
          title: 'Рассказать историю',
          id: 'tellstory',
        },
      ],
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 76px;
  margin: 0 auto;
}

.header__logo {
  text-decoration: none;
  color: black;
}

.header__title {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  width: 18em;
}

.header__mobile-icon {
  display: none;
}

@media screen and (max-width: 1280px) {
  .header {
    height: 72px;
  }

  .header__title {
    line-height: 18px;
  }
}

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 768px) {
  .header__menu {
    display: none;
  }

  .header__mobile-icon {
    display: block;
  }
}

@media screen and (max-width: 320px) {
  .header {
    height: 72px;
  }

  .header__title {
    font-size: 12px;
    line-height: 14px;
  }
}
</style>
