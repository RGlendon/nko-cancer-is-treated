<template>
  <div>
    <!--    TODO: button more articles. Responsible - Oleg-->
    <a href="/stories/" class="stories__link"
      ><button class="sories__more">Больше статей</button></a
    >
  </div>
</template>

<script>
export default {
  name: 'ShowMore',
};
</script>

<style scoped>
.sories__more {
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
</style>
