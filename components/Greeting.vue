<template>
  <Container class="container_greeting">
    <div class="greeting">
      <h1 class="greeting__title">#РАКЛЕЧИТСЯ</h1>
      <button class="greeting__arrow" @click="scrollDown"></button>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container.vue';

export default {
  components: {
    Container,
  },

  methods: {
    scrollDown() {
      let el = document.getElementById('video');
      el.scrollIntoView({ block: 'start', behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
.container_greeting {
  background-color: var(--color-purple);
}

.greeting {
  position: relative;
  min-height: 689px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.greeting__title {
  margin: 0;
  color: #fff;
  font-style: normal;
  font-weight: 800;
  font-size: 92px;
  line-height: 1.2;
}

.greeting__arrow {
  position: absolute;
  left: 50%;
  bottom: 50px;
  width: 24px;
  height: 24px;
  border: none;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: rotate(135deg) skew(10deg, 10deg) translateX(50%);
  cursor: pointer;
  background-color: transparent;
}

.greeting__arrow:focus {
  outline: none;
}

.greeting__arrow:hover {
  opacity: 0.8;
}

@media screen and (max-width: 1280px) {
  .greeting {
    min-height: 620px;
  }

  .greeting__title {
    font-size: 78px;
  }
}

@media screen and (max-width: 1024px) {
  .greeting {
    min-height: 540px;
  }
}

@media screen and (max-width: 768px) {
  .greeting {
    min-height: 780px;
  }

  .greeting__title {
    font-size: 64px;
  }
}

@media screen and (max-width: 320px) {
  .greeting {
    min-height: 480px;
  }

  .greeting__title {
    font-size: 36px;
  }
}
</style>
