<template>
  <ul class="page-numbers">
    <li class="page-number page-number_active">{{number}}</li>
  </ul>
</template>

<script>
export default {
  name: 'PageNumber.vue',
  props: ['number'],
};
</script>

<style scoped>
.page-numbers {
  max-width: 480px;
  margin: 300px auto;
  padding: 0;
  display: flex;
  justify-content: space-between;
  list-style: none;
}

.page-number {
  width: 58px;
  height: 58px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}
.page-numbers :last-child {
  margin-right: 0;
}

.page-number_active {
  background-color: #F4F4F4;
}

</style>
