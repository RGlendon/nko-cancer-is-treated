<template>
  <Container :className="'container_type_margin'">
    <div class="note">
      <h3 class="note__text">
        <slot></slot>
        <span class="note__text-highlighted">#ЭТОНЕЛЕЧИТСЯ</span>
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
.note {
  min-height: 86px;
  background-color: var(--color-purple);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.note__text {
  margin: 20px 0;
  max-width: 750px;
  color: var(--color-lightgray2);
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 1.2;
}

.note__text-highlighted {
  font-weight: 800;
  font-size: 40px;
}

@media screen and (max-width: 1280px) {
  .note__text {
    font-size: 28px;
  }
  .note__text-highlighted {
    font-size: 38px;
  }
}

@media screen and (max-width: 1024px) {
  .note__text {
    font-size: 24px;
  }
  .note__text-highlighted {
    font-size: 34px;
  }
}

@media screen and (max-width: 768px) {
  .note {
    min-height: 100px;
  }
  .note__text {
    margin: 0;
    max-width: 550px;
    font-size: 22px;
  }
  .note__text-highlighted {
    font-size: 30px;
  }
}

@media screen and (max-width: 320px) {
  .note {
    min-height: 80px;
  }
  .note__text {
    max-width: 220px;
    font-size: 16px;
  }
  .note__text-highlighted {
    font-size: 22px;
  }
}
</style>
