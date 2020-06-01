<template>
  <Container>
    <div class="error">
      <h1 class="error__title">404</h1>
      <p class="error__text">
        Страница не найдена.
        <nuxt-link to="/" class="error__text-link"
          >Перейти на главную.</nuxt-link
        >
      </p>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container.vue';
export default {
  components: {
    Container,
  },
};
</script>

<style scoped>
.error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 76px);
}

.error__title {
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 144px;
  line-height: 1.2;
}

.error__text {
  width: 200px;
  margin-top: 14px;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.3;
  text-align: center;
}

.error__text-link {
  color: black;
}

@media screen and (max-width: 1280px) {
  .error {
    min-height: calc(100vh - 72px);
  }
  .error__text {
    font-size: 16px;
  }
}

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 768px) {
}

@media screen and (max-width: 320px) {
  .error {
    min-height: calc(100vh - 64px);
  }
  .error__title {
    font-size: 72px;
  }
  .error__text {
    font-size: 13px;
  }
}
</style>
