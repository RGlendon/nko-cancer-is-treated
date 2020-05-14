<template>
  <footer class="footer" >
    <div class="footer__upper-block">
      <h2 class="footer__title">Спасибо всем, кто помог состояться этому проекту</h2>
      <nav class="footer__menu">
        <nuxt-link to="/" class="footer__menu-link">Главная</nuxt-link>
        <nuxt-link to="/stories" class="footer__menu-link">Истории</nuxt-link>
      </nav>
      <div class="footer__social-blok">
        <p class="footer__social-link-text">Мы в <a class="footer__social-link" href="#">Инстаграме</a> и <a class="footer__social-link" href="#">Youtube</a></p>
        <p class="footer__social-link-text">Поделитесь ↗</p>
      </div>
    </div>
    <div class="footer__bottom-block">
      <p class="footer__copyright">Рак Лечится 2020</p>
      <p class="footer__copyright">Сделано студентами Яндекс Практикум</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  margin: 0 auto;
  padding: 50px;
  max-width: 1280px;
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

.footer__menu-link {
  font-weight: normal;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: none;
  margin-left: 40px;
  color: black;
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

</style>
