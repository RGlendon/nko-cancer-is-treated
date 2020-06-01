<template>
  <Container>
    <nav class="mobile-menu">
      <Menu :menu="menu" isUnderlined="true" />
    </nav>
  </Container>
</template>

<script>
import Menu from '~/components/Menu';
import Container from '~/components/Container';

export default {
  components: { Container, Menu },
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
.mobile-menu {
  display: flex;
  align-items: center;
  height: 60px;
}

@media screen and (max-width: 320px) {
  .mobile-menu {
    padding-top: 18px;
    /*padding-bottom: 18px;*/
    display: flex;
    align-items: center;
    height: fit-content;
  }
}
</style>
