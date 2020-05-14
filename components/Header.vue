<template>
  <header class="header">
    <p class="header__title">
      Проект Благотворительного Фонда Константина Хабенского
    </p>
    <nav class="header__menu">
      <nuxt-link to="/" class="header__menu-link">Главная</nuxt-link>
      <nuxt-link to="/stories" class="header__menu-link">Истории</nuxt-link>
      <nuxt-link to="/tellus" class="header__menu-link"
        >Рассказать историю</nuxt-link
      >
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1320px;
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
