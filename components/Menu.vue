<template>
  <ul class="menu">
    <li class="menu__item">
      <nuxt-link to="/" class="menu__link">Главная</nuxt-link>
    </li>
    <li class="menu__item">
      <nuxt-link to="/stories" class="menu__link">Истории</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
.menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu__item {
  margin-left: 40px;
}

.menu__link {
  font-weight: normal;
  font-size: 18px;
  line-height: 1.5;
  text-decoration: none;
  color: black;
}

@media screen and (max-width: 1280px) {
  .menu__link {
    font-size: 16px;
  }
}

@media screen and (max-width: 768px) {
  .menu {
    flex-direction: column;
  }

  .menu__item {
    margin-bottom: 14px;
  }
}

@media screen and (max-width: 320px) {
  .menu {
    flex-direction: column;
  }

  .menu :last-child {
    margin: 0;
  }

  .menu__item {
    margin-left: 0;
    margin-bottom: 18px;
  }

  .menu__link {
    font-size: 13px;
  }
}
</style>
