<template>
  <Container class="container_tell">
    <div class="tell">
      <div class="tell__columns">
        <div class="tell__brief">
          <h3 class="tell__about">Расскажите свою историю</h3>
          <p class="tell__about-text">
            Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
            поделиться своей историей неизлечимых привычек, навязчивых идей и
            болезненных привязанностей.
          </p>
        </div>
        <div class="tell__column">
          <div class="tell__links">
            <a
              class="tell__link"
              :class="{ raklechitsa__link_active: option === 0 }"
              v-on:click="selectOption(0)"
              >1-й вариант</a
            >
            <a
              class="tell__link"
              :class="{ raklechitsa__link_active: option === 1 }"
              v-on:click="selectOption(1)"
              >2-й вариант</a
            >
          </div>
          <div class="tell__container">
            <p class="tell__main-text">{{ options[option] }}></p>
            <Button v-if="option === 0" size="small" @btnClick="togglePopup"
              >Заполнить форму</Button
            >
            <Button v-else size="small">Оставить контакт</Button>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container.vue';
import Button from '@/components/UI/Button.vue';

export default {
  components: {
    Container,
    Button,
  },

  methods: {
    selectOption: function(number) {
      this.option = number;
    },
    togglePopup() {
      this.$store.commit('popup/togglePopup');
    },
  },

  data() {
    return {
      option: 0,
      options: [
        'Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю после проверки. Пожалуйста, заполняйте все пункты корректно, если вы испытаете какие-то сложности, воспользуйтесь 2-м вариантом.',
        'Оставить контакт (почту или номер телефона) и мы свяжемся с вами, зададим вопросы, уточним детали вашей истории.',
      ],
    };
  },
};
</script>

<style scoped>
.container_tell {
  background-color: var(--color-gray4);
}

.tell {
  height: 522px;
  margin: 0 auto;
  padding-top: 100px;
  box-sizing: border-box;
}

.tell__columns {
  display: flex;
  justify-content: space-between;
}

.tell__column {
  display: flex;
  justify-content: space-between;
  margin-top: 98px;
}

.tell__main-text {
  max-width: 640px;
  min-height: 88px;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: var(--color-gray3);
  margin: 0;
  margin-bottom: 78px;
}

.tell__about {
  max-width: 340px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 0;
}

.tell__about-text {
  max-width: 340px;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: var(--color-gray3);
  margin: 0;
  margin-top: 32px;
}

.tell__link {
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  color: var(--calor-gray5);
  display: block;
  text-decoration: none;
  cursor: pointer;

  margin-bottom: 10px;
}

.tell__links {
  margin-right: 40px;
}

.raklechitsa__link_active {
  font-weight: 500;
  color: black;
  cursor: pointer;
}

@media screen and (max-width: 1280px) {
  .tell {
    height: 488px;
    padding-top: 90px;
  }

  .tell__about {
    font-size: 28px;
    line-height: 32px;
  }

  .tell__about-text {
    max-width: 305px;
    font-size: 16px;
    line-height: 20px;
    margin-top: 30px;
  }

  .tell__main-text {
    max-width: 578px;
  }
}

@media screen and (max-width: 1024px) {
  .tell {
    height: 436px;
    padding-top: 80px;
  }

  .tell__brief {
    width: 260px;
  }

  .tell__column {
    margin-top: 86px;
  }

  .tell__about {
    font-size: 24px;
    line-height: 28px;
  }

  .tell__about-text {
    max-width: 260px;
    font-size: 13px;
    line-height: 16px;
  }

  .tell__link {
    font-size: 15px;
    line-height: 19px;
    margin-bottom: 10px;
  }

  .tell__main-text {
    max-width: 447px;
    font-size: 15px;
    line-height: 19px;
  }
}

@media screen and (max-width: 768px) {
  .tell {
    height: fit-content;
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .tell__brief {
    width: 100%;
  }

  .tell__columns {
    display: table;
    margin: 0 auto;
  }

  .tell__column {
    display: block;
    margin-top: 80px;
  }

  .tell__links {
    display: flex;
  }

  .tell__link {
    font-size: 15px;
    line-height: 19px;
    margin-right: 30px;
    padding: 6px;
  }

  .raklechitsa__link_active {
    border-bottom: 2px solid var(--color-purple);
  }

  .tell__about {
    margin: 0 auto;
    padding: 0;
    text-align: center;
  }

  .tell__about-text {
    max-width: 380px;
    margin-top: 26px;
  }

  .tell__main-text {
    max-width: 380px;
    margin-top: 14px;
    min-height: 95px;
    margin-bottom: 50px;
  }
}

@media screen and (max-width: 320px) {
  .tell {
    height: fit-content;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .tell__column {
    display: block;
    margin-top: 40px;
  }

  .tell__links {
    display: flex;
    margin-right: 0;
  }

  .tell__link {
    font-size: 13px;
    line-height: 19px;
    margin-right: 20px;
    padding: 6px;
  }

  .tell__about {
    font-size: 18px;
    line-height: 21px;
    text-align: left;
  }

  .tell__about-text {
    margin-top: 16px;
  }

  .tell__main-text {
    margin-top: 0;
    min-height: 96px;
    margin-bottom: 30px;
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
