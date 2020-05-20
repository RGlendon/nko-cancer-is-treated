<template>
  <Container>
    <div class="inscription-bottom">
      <h3 class="inscription-bottom__text">
        РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ
        <span class="inscription-bottom__text-highlighted">#ЭТОНЕЛЕЧИТСЯ</span>
      </h3>
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
.inscription-bottom {
  /* max-width: 1320px; */
  min-height: 129px;
  background-color: #613a93;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.inscription-bottom__text {
  max-width: 750px;
  color: #fff;
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 1.27;
}

.inscription-bottom__text-highlighted {
  font-weight: 800;
  font-size: 40px;
}
</style>
