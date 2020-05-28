<template>
  <Container class="container_footer">
    <footer class="footer">
      <div class="footer__upper-block">
        <h2 class="footer__title">
          Спасибо всем, кто помог состояться этому проекту
        </h2>
        <nav class="footer__menu">
          <Menu :menu="menu" :className="'menu_footer'" />
        </nav>
        <div class="footer__social-blok">
          <p class="footer__social-link-text">
            Мы&nbsp;в&nbsp;<a
              class="footer__social-link"
              href="https://www.instagram.com/raklechitsa/"
              target="_blank"
              >Инстаграме</a
            >&nbsp;и&nbsp;<a
              class="footer__social-link"
              href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F "
              target="_blank"
              >Youtube</a
            >
          </p>
          <p class="footer__social-link-text">Поделитесь ↗</p>
        </div>
      </div>
      <div class="footer__bottom-block">
        <p class="footer__copyright">Рак Лечится {{ Year }}</p>
        <p class="footer__copyright">
          Сделано студентами
          <a
            class="footer__copyright-link"
            href="https://praktikum.yandex.ru"
            target="_blank"
            >Яндекс Практикум</a
          >
        </p>
      </div>
    </footer>
  </Container>
</template>

<script>
import Container from '@/components/Container.vue';
import Menu from '@/components/Menu.vue';
import MenuNew from './Menu';

export default {
  components: {
    Container,
    Menu,
  },
  data() {
    return {
      Year: new Date().getFullYear(),
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
      ],
    };
  },
};
</script>

<style scoped>
.container_footer {
  background-color: var(--color-lightgray);
}

.footer {
  padding-top: 60px;
  padding-bottom: 60px;
}

.footer__upper-block {
  height: 108px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.footer__title {
  width: 10.89em;
  margin: 0;
  margin-right: 160px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.14;
}

.footer__menu {
  width: 50%;
}

.footer__social-blok {
  margin: 0;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer__social-link-text {
  margin: 0 0 44px 0;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.5;
}

.footer__social-link-text :last-child {
  margin: 0;
}

.footer__social-link {
  color: #000;
}

.footer__bottom-block {
  margin-top: 110px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.footer__copyright {
  margin: 0;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.1;
  color: #898989;
}

.footer__copyright-link {
  text-decoration: none;
  color: #898989;
}

@media screen and (max-width: 1280px) {
  .footer {
    padding-top: 50px;
    padding-bottom: 42px;
  }

  .footer__upper-block {
    height: 96px;
  }

  .footer__bottom-block {
    margin-top: 104px;
  }

  .footer__title {
    margin-right: 102px;
  }

  .footer__social-blok {
    padding-right: 0;
  }

  .footer__social-link-text {
    font-size: 16px;
  }

  .footer__copyright {
    margin-top: 10px;
    font-size: 16px;
  }
}

@media screen and (max-width: 1024px) {
  .footer__menu {
    width: 40%;
  }

  .footer__title {
    font-size: 24px;
    margin-right: 25px;
  }

  .footer__social-blok {
    margin-left: 20px;
  }

  .footer__social-link-text {
    margin-bottom: 30px;
  }

  .footer__upper-block {
    height: 84px;
  }

  .footer__bottom-block {
    margin-top: 90px;
  }
}

@media screen and (max-width: 768px) {
  .footer__title {
    width: 24em;
  }

  .footer__menu {
    max-width: 30%;
  }

  .footer__social-link-text {
    margin-bottom: 14px;
  }
}

@media screen and (max-width: 320px) {
  .footer__upper-block {
    flex-direction: column;
    margin-bottom: 0;
  }

  .footer__title {
    max-width: 290px;
    margin-bottom: 50px;
    font-size: 18px;
  }

  .footer__social-blok {
    min-height: 0;
    margin-left: 0;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .footer__social-link-text {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 13px;
  }

  .footer__social-link-text:last-of-type {
    margin-top: 16px;
  }

  .footer__bottom-block {
    flex-direction: column;
    margin-top: 160px;
  }

  .footer__copyright {
    margin-top: 10px;
    font-size: 13px;
  }
}
</style>
