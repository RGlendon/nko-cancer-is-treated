<template>
  <Container>
    <header class="header">
      <p class="header__title">
        Проект Благотворительного Фонда Константина Хабенского
      </p>
      <nav class="header__menu">
        <Menu :menu="menu" className="underline" />
      </nav>
    </header>
  </Container>
</template>

<script>
import Menu from './Menu';
import Container from './Container';

export default {
  components: { Container, Menu },
  data() {
    return {
      menu: [
        {
          path: '/',
          title: 'Главная',
          id: 'index',
        },
        {
          path: '/stories',
          title: 'Истории',
          id: 'stories',
        },
        {
          path: '/tellus',
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
  height: 5.277vw;
  max-height: 76px;
  margin: 0 auto;
}

.header__title {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  width: 25.75%;
}

.header__menu-link {
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  margin-left: 40px;
  color: black;
}

.nuxt-link-exact-active {
  text-decoration: underline;
}
</style>
