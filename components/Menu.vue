<template>
  <ul class="menu">
    <li>
      <nuxt-link to="/" class="menu__link">Главная</nuxt-link>
    </li>
    <li>
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

.menu__link {
  font-weight: normal;
  font-size: 18px;
  line-height: 1.5;
  text-decoration: none;
  margin-left: 40px;
  color: black;
}
</style>
