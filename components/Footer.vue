<template>
  <Container>
    <footer class="footer">
      <div class="footer__upper-block">
        <h2 class="footer__title">
          Спасибо всем, кто помог состояться этому проекту
        </h2>
        <nav class="footer__menu">
          <Menu />
        </nav>
        <div class="footer__social-blok">
          <p class="footer__social-link-text">
            Мы в
            <a class="footer__social-link" href="#" target="_blank"
              >Инстаграме</a
            >
            и
            <a class="footer__social-link" href="#" target="_blank">Youtube</a>
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
export default {
  components: {
    Container,
    Menu,
  },
  data() {
    return {
      Year: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #fbfbfb;
  padding-top: 60px;
  padding-bottom: 60px;
}

.footer__upper-block {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.footer__title {
  max-width: 305px;
  margin: 0;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.14;
}

.footer__menu {
  width: 50%;
}

.footer__social-blok {
  min-height: 90px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer__social-link-text {
  margin: 0;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.5;
}

.footer__social-link {
  color: #000;
}

.footer__bottom-block {
  margin-top: 100px;
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
</style>
