<template>
  <Container>
    <div class="inscription-upper">
      <h3 class="inscription-upper__text">
        И В ОТЛИЧИЕ ОТ РАКА,
        <span class="inscription-upper__text-highlighted">#ЭТОНЕЛЕЧИТСЯ</span>
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
.inscription-upper {
  /* max-width: 1320px; */
  min-height: 86px;
  background-color: #613a93;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inscription-upper__text {
  color: #fff;
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 1.53;
}

.inscription-upper__text-highlighted {
  font-weight: 800;
  font-size: 40px;
}
</style>
