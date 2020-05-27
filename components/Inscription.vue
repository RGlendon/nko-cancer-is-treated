<template>
  <Container :className="'container_type_margin'">
    <div class="Inscription">
      <h3 class="Inscription__text">
        <slot></slot>
        <span class="Inscription__text-highlighted">#ЭТОНЕЛЕЧИТСЯ</span>
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
.Inscription {
  min-height: 86px;
  background-color: var(--color-purple);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.Inscription__text {
  margin: 20px 0;
  max-width: 750px;
  color: var(--color-lightgray2);
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 1.2;
}

.Inscription__text-highlighted {
  font-weight: 800;
  font-size: 40px;
}

@media screen and (max-width: 1280px) {
  .Inscription__text {
    font-size: 28px;
  }
  .Inscription__text-highlighted {
    font-size: 38px;
  }
}

@media screen and (max-width: 1024px) {
  .Inscription__text {
    font-size: 24px;
  }
  .Inscription__text-highlighted {
    font-size: 34px;
  }
}

@media screen and (max-width: 768px) {
  .Inscription {
    min-height: 100px;
  }
  .Inscription__text {
    margin: 0;
    max-width: 550px;
    font-size: 22px;
  }
  .Inscription__text-highlighted {
    font-size: 30px;
  }
}

@media screen and (max-width: 320px) {
  .Inscription {
    min-height: 80px;
  }
  .Inscription__text {
    max-width: 220px;
    font-size: 16px;
  }
  .Inscription__text-highlighted {
    font-size: 22px;
  }
}
</style>
