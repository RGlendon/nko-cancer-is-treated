<template>
  <div class="page-number page-number_active">{{ number }}</div>
</template>

<script>
export default {
  name: 'PageNumber',
  props: ['number'],
};
</script>

<style scoped>
.page-number {
  width: 58px;
  height: 58px;
  /*margin-right: 10px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}

.page-number_active {
  background-color: #f4f4f4;
}
</style>
