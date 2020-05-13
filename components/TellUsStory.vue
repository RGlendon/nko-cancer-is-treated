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
        <p
          class="tellStory__variant tellStory__variant_one"
          :class="{ tellStory__variant_active: option === 0 }"
          v-on:click="selectOption(0)"
        >
          1-й вариант
        </p>
        <p
          class="tellStory__variant tellStory__variant"
          :class="{ tellStory__variant_active: option === 1 }"
          v-on:click="selectOption(1)"
        >
          2-й вариант
        </p>
      </div>
      <p class="tellStory__instruction">
        {{ options[option] }}
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

  methods: {
    selectOption: function(number) {
      this.option = number;
    },
  },

  data() {
    return {
      option: 0,
      options: [
        'Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю\n' +
          '        после проверки. Пожалуйста, заполняйте все пункты корректно, если вы\n' +
          '        испытаете какие-то сложности, воспользуйтесь 2-м вариантом.',
        'Оставить контакт (почту или номер телефона) и мы свяжемся с вами, зададим вопросы, ' +
          'уточним детали вашей истории.',
      ],
    };
  },
};
</script>

<style scoped>
.tellStory {
  max-width: 1440px;
  height: 522px;
  font-family: Inter, sans-serif;
  font-style: normal;
  background-color: #f7f7f7;
  padding: 100px 60px;
}

.tellStory__title {
  max-width: 413px;
  min-height: 72px;
  margin: 0 0 32px 0;
  display: flex;
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
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}

.tellStory__variants {
  width: 112px;
  margin-left: 195px;
}

.tellStory__variant {
  font-size: 18px;
  line-height: 22px;
  font-weight: normal;
  color: #a2a2a2;
  cursor: pointer;
}

.tellStory__variant_one {
  margin-bottom: 10px;
}

.tellStory__variant_active {
  font-weight: 500;
  color: black;
}

.tellStory__instruction {
  width: 640px;
  min-height: 88px;
  margin-left: 40px;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}
</style>
