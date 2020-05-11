<template>
  <div class="tellStory">
    <h1 class="tellStory__title">
      Расскажите свою историю
    </h1>
    <div class="tellStory__stories">
      <p class="tellStory__narration">
        Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
        поделиться своей историей неизлечимых привычек, навязчивых идей и
        болезненных привязанностей.
      </p>
      <div class="tellStory__variants">
        <p class="tellStory__variant-1">1-й вариант</p>
        <p class="tellStory__variant-2">2-й вариант</p>
      </div>
      <p class="tellStory__instruction">
        Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю
        после проверки. Пожалуйста, заполняйте все пункты корректно, если вы
        испытаете какие-то сложности, воспользуйтесь 2-м вариантом.
      </p>
    </div>
    <Button />
  </div>
</template>

<script>
import Button from '@/components/UI/Button.vue';
export default {
  components: {
    Button,
  },
};
</script>

<style scoped>
.tellStory {
  max-width: 1440px;
  min-height: 522px;
}
.tellStory__title {
  max-width: 413px;
  min-height: 72px;
  margin: 100px 0 32px 60px;
  display: flex;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
.tellStory__stories {
  max-width: 1320px;
  min-height: 110px;
  margin: auto;
  display: flex;
}
.tellStory__narration {
  width: 345px;
  min-height: 110px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}
.tellStory__variants {
  width: 112px;
  margin-left: 195px;
}
.tellStory__variant-1 {
  margin-bottom: 10px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}
.tellStory__variant-2 {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #a2a2a2;
}
.tellStory__instruction {
  width: 640px;
  min-height: 88px;
  margin-left: 40px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}
</style>
