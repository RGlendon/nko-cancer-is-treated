<template>
  <div :class="['container', className]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    className: String,
  },
};
</script>

<style scoped>
.container {
  max-width: 1440px;
  padding: 0px 60px;
  margin: 0 auto;
}
@media screen and (max-width: 1280px) {
  .container {
    padding: 0 50px;
  }
}

@media screen and (max-width: 1024px) {
  .container {
    padding: 0 40px;
  }
}

@media screen and (max-width: 320px) {
  .container {
    padding: 0 15px;
  }
}
</style>
