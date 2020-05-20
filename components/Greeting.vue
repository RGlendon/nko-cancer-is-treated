<template>
  <Container>
    <div class="greeting">
      <h1 class="greeting__title">#РАКЛЕЧИТСЯ</h1>
      <div class="greeting__arrow"></div>
    </div>
  </Container>
</template>

<script>
  import Container from '@/components/Container.vue';
export default {
   components: {
    Container,
  }
};
</script>

<style scoped>
.greeting {
  position: relative;
  min-height: calc(100vh - 76px);
  background-color: #613a93;
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
  left:50%;
  bottom: 50px;
  width: 24px;
  height: 24px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: rotate(135deg) skew(10deg, 10deg) translateX(50%);

}
</style>
