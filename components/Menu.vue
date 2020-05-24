<template>
  <ul :class="['menu', `menu_link_${className}`]">
    <li class="menu__item" v-for="link in menu" :key="link.id">
      <nuxt-link :to="link.path" class="menu__link">{{ link.title }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    className: String,
    menu: Object,
  },
};
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

.menu_link_underline .nuxt-link-exact-active {
  text-decoration: underline;
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
