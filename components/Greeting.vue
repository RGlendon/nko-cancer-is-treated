<template>
  <div class="greeting">
    <h1 class="greeting__title">#РАКЛЕЧИТСЯ</h1>
    <div class="greeting__arrow"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.greeting {
  position: relative;
  max-width: 1440px;
  min-height: 689px;
  margin: 0 auto;
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
  left: calc(50%-50px);
  bottom: 40px;
  width: 24px;
  height: 24px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: rotate(135deg) skew(10deg, 10deg);
}
</style>
