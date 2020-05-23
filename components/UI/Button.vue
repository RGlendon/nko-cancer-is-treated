<template>
  <div class="button__form">{{ text }}</div>
</template>

<script>
export default {
  name: 'Button',
  props: ['text'],
};
</script>

<style scoped>
.button__form {
  width: 280px;
  background-color: #613a93;
  font-weight: 500;
  font-size: 16px;
  line-height: 52px;
  text-align: center;
  color: #ffffff;
  transition: all 0.3s linear;
  cursor: pointer;
}

.button__form:hover {
  opacity: 0.9;
}

@media screen and (max-width: 1280px) {
  .button__form {
    width: 230px;
    font-size: 16px;
    line-height: 48px;
  }
}

@media screen and (max-width: 1024px) {
  .button__form {
    width: 170px;
    font-size: 15px;
    line-height: 46px;
  }
}

@media screen and (max-width: 768px) {
  .button__form {
    width: 280px;
    font-size: 13px;
    line-height: 46px;
  }
}
@media screen and (max-width: 320px) {
  .button__form {
    width: 290px;
    font-size: 13px;
    line-height: 40px;
  }
}
</style>
