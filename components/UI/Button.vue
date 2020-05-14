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
</style>
