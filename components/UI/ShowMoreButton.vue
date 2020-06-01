<template>
  <nuxt-link to="/stories/" class="stories__link">
    <button class="stories__more">Больше статей</button>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ShowMore',
};
</script>

<style scoped>
.stories__more {
  width: 100%;
  height: 82px;
  background: #fbfbfb;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  border: none;
}

@media screen and (max-width: 1280px) {
  .stories__more {
    height: 78px;
  }
}

@media screen and (max-width: 1024px) {
  .stories__more {
    height: 50px;
    font-size: 13px;
  }
}
</style>
