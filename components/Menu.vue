<template>
  <nav :class="className">
    <!--  <nav>-->
    <ul :class="['menu', className]">
      <li class="menu__item" v-for="link in menu" :key="link.id">
        <nuxt-link
          v-if="link.path"
          :to="link.path"
          :class="['menu__link', { menu_link_underline: link.isUnderlined }]"
          >{{ link.title }}
        </nuxt-link>
        <button v-else class="menu__button" @click="openPopupQuiz">
          {{ link.title }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    menu: Array,
    className: String,
  },
  methods: {
    openPopupQuiz() {
      this.$store.commit('popup/openPopupQuiz');
    },
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  font-size: 18px;
  line-height: 1.5;
}

.menu__link {
  text-decoration: none;
  color: black;

  margin-right: 40px;
}

.menu__button {
  border: 0;
  background-color: transparent;
  font-size: 18px;
  line-height: 1.5;
  padding: 0;
  cursor: pointer;
  outline: none;
}

.menu_link_underline.nuxt-link-exact-active {
  text-decoration: underline;
}

@media screen and (max-width: 1280px) {
  .menu {
    font-size: 16px;
  }

  .menu__button {
    font-size: 16px;
  }
}

@media screen and (max-width: 768px) {
  .menu_footer {
    flex-direction: column;
  }

  .menu_footer .menu__item {
    margin-bottom: 14px;
    margin-right: 0;
  }

  .menu__link {
    margin-right: 30px;
  }
}

@media screen and (max-width: 320px) {
  .menu {
    flex-direction: column;

    font-size: 13px;
    line-height: 16px;
  }

  .menu:last-child {
    margin: 0;
  }

  .menu__button {
    font-size: 13px;
  }

  .menu__item {
    margin-left: 0;
    margin-bottom: 18px;
  }
}
</style>
