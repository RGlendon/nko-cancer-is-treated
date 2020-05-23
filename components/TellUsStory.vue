<template>
  <Container>
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
        <div class="tellStory__wrapper">
          <p class="tellStory__instruction">
            {{ options[option] }}
          </p>
          <Button :text="'Заполнить форму'" />
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Button from '@/components/UI/Button.vue';
import Container from '@/components/Container.vue';

export default {
  components: {
    Button,
    Container,
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
  background-color: #f7f7f7;
}

.tellStory__title {
  max-width: 413px;
  min-height: 72px;
  margin: 0;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.tellStory__stories {
  max-width: 1320px;
  min-height: 110px;
  margin-top: 32px;
  display: flex;
}

.tellStory__narration {
  width: 345px;
  min-height: 110px;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666;
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

.tellStory__wrapper {
  margin-left: 40px;
  width: 48.48%;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.tellStory__instruction {
  font-size: 18px;
  line-height: 22px;
  color: #666;
}
@media screen and (max-width: 1280px) {
  .tellStory {
    max-width: 1280px;
    height: 488px;
  }

  .tellStory__title {
    max-width: 367px;
    min-height: 64px;
    font-size: 28px;
    line-height: 32px;
  }

  .tellStory__stories {
    max-width: 1280px;
    min-height: 214px;
    margin-top: 30px;
  }

  .tellStory__narration {
    width: 400px;
    height: 140px;
  }

  .tellStory__variants {
    width: 112px;
    margin-left: 195px;
  }

  .tellStory__wrapper {
    height: 214px;
  }
}
@media screen and (max-width: 1024px) {
  .tellStory {
    max-width: 1024px;
    height: 436px;
  }

  .tellStory__title {
    max-width: 288px;
    min-height: 56px;
    font-size: 24px;
    line-height: 28px;
  }

  .tellStory__stories {
    max-width: 1024px;
    min-height: 200px;
    margin-top: 30px;
  }

  .tellStory__narration {
    width: 260px;
    min-height: 80px;
    font-size: 13px;
    line-height: 16px;
  }

  .tellStory__variants {
    width: 88px;
    height: 46px;
    margin-left: 98px;
  }

  .tellStory__variant {
    width: 90px;
    font-size: 15px;
    line-height: 19px;
  }

  .tellStory__variant_one {
    margin-bottom: 8px;
  }

  .tellStory__wrapper {
    height: 200px;
  }

  .tellStory__instruction {
    width: 447px;
    height: 76px;
    font-size: 15px;
    line-height: 19px;
  }
}
@media screen and (max-width: 768px) {
  .tellStory {
    max-width: 768px;
    height: 600px;
    display: flex;
    flex-direction: column;
  }

  .tellStory__title {
    max-width: 380px;
    min-height: 28px;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    margin: 0 auto 26px;
  }

  .tellStory__stories {
    max-width: 768px;
    min-height: 110px;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    margin: 0 auto 0;
  }

  .tellStory__narration {
    width: 380px;
    height: 70px;
    font-size: 13px;
    line-height: 16px;
    margin: 0 auto 40px;
  }

  .tellStory__variants {
    width: 300px;
    display: flex;
    flex-direction: row;
    text-align: start;
    margin-left: 0;
    margin-bottom: 0;
    margin-top: 0;
  }

  .tellStory__variant {
    width: 90px;
    font-size: 15px;
    line-height: 19px;
  }

  .tellStory__variant_one {
    width: 120px;
  }

  .tellStory__variant_active {
    width: 120px;
  }

  .tellStory__wrapper {
    height: 190px;
    display: flex;
    flex-direction: column;
    margin-left: 0;
  }

  .tellStory__instruction {
    width: 380px;
    min-height: 95px;
    font-size: 15px;
    line-height: 19px;
    margin-left: 0;
  }
}
@media screen and (max-width: 320px) {
  .tellStory {
    max-width: 768px;
    height: 462px;
    display: flex;
    flex-direction: column;
  }

  .tellStory__title {
    max-width: 290px;
    min-height: 21px;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    margin: 0 auto 26px;
  }

  .tellStory__stories {
    max-width: 290px;
    min-height: 110px;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    margin: 0 auto 0;
  }

  .tellStory__narration {
    width: 290px;
    height: 80px;
    font-size: 13px;
    line-height: 16px;
    margin: 0 auto 20px;
  }

  .tellStory__variants {
    width: 290px;
    display: flex;
    flex-direction: row;
    text-align: start;
    margin-left: 0;
    margin-bottom: 0;
    margin-top: 0;
  }

  .tellStory__variant {
    width: 90px;
    font-size: 15px;
    line-height: 19px;
  }

  .tellStory__variant_one {
    width: 110px;
  }

  .tellStory__variant_active {
    width: 110px;
  }

  .tellStory__wrapper {
    height: 190px;
    display: flex;
    flex-direction: column;
    margin-left: 0;
  }

  .tellStory__instruction {
    width: 290px;
    min-height: 95px;
    font-size: 13px;
    line-height: 16px;
    margin-left: 0;
  }
}
</style>
