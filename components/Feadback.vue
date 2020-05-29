<template>
  <div>
    <div class="feadback">
      <h3 class="feadback__title">Оставьте контакт для связи</h3>
      <p class="feadback__subtitle">
        Мы свяжемся с вами в течение недели, чтобы задать вопросы о вашей
        истории и разместить ее на сайте.
      </p>

      <label class="feadback__question"
        >Как вас зовут?
        <Input
          class="feadback__input"
          placeholder="Напишите тут"
          :bottomBordered="true"
          v-model="content"
        />
      </label>

      <div class="feadback__central-block">
        <div class="feadback__central-block-container">
          <p class="feadback__question">
            Электронная почта
          </p>

          <Input
            class="feadback__input"
            placeholder="pochta@example.com"
            :bottomBordered="true"
            v-model="content"
          />
        </div>

        <div class="feadback__central-block-container">
          <p class="feadback__question">
            Телефон
          </p>

          <Input
            class="feadback__input"
            placeholder="+7 000 000 00 00"
            :bottomBordered="true"
            v-model="content"
          />
        </div>
      </div>

      <p class="feadback__question">
        Напишите, если есть предпочтительный способ связи и удобное время
      </p>

      <Input
        class="feadback__input"
        placeholder="Телефон / почта и удобное время"
        :bottomBordered="true"
        v-model="content"
      />

      <div class="feadback__bottom-block">
        <Button @btnClick="submitPopupForm">Отправить</Button>
        <p class="feadback__policy">
          Нажимая на кнопку «отправить», вы даете согласие на
          <a href="#" class="feadback__policy-link"
            >обработку персональных данных</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '~/components/UI/Input';
import Button from '~/components/UI/Button';
export default {
  components: {
    Input,
    Button,
  },

  computed: {
    currentQuestion() {
      return this.$store.getters['quiz/getCurrentQuestion'];
    },
    questions() {
      return this.$store.getters['quiz/getQuestions'];
    },
    answers() {
      return this.$store.getters['quiz/getAnswers'];
    },
  },

  methods: {
    submitPopupForm() {
      this.submitForm(this.answers);
    },
    // prevQuestion() {
    //   return this.$store.commit('quiz/prevQuestion');
    // },

    submitForm(answers) {
      console.log(`отправлена форма с данными ${answers}`);
    },
    togglePopup() {
      return this.$store.commit('popup/togglePopup');
    },
  },

  data() {
    return {
      content: '',
    };
  },
};
</script>

<style scoped>
.feadback {
  max-width: 920px;
  max-height: 730px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.feadback__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 0;
}

.feadback__subtitle {
  max-width: 840px;
  padding-top: 40px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin: 0;
}

.feadback__question {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-top: 40px;
}

.feadback__input {
  padding-top: 40px;
}

.feadback__central-block {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.feadback__central-block-container {
  width: 47%;
}

.feadback__bottom-block {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 50px;
}

.feadback__policy {
  width: 380px;
  margin-left: 30px;
  color: #666;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
}

.feadback__policy-link {
  color: #666;
}

.feadback_button {
  display: block;
  margin: 0 auto;
}

@media screen and (max-width: 1280px) {
  .feadback__title {
    font-size: 28px;
  }
  .feadback__subtitle {
    font-size: 16px;
  }
  .feadback__question {
    font-size: 16px;
  }
}

@media screen and (max-width: 768px) {
  .feadback__title {
    font-size: 26px;
  }
  .feadback__subtitle {
    font-size: 15px;
  }
  .feadback__question {
    font-size: 15px;
  }
}

@media screen and (max-width: 400px) {
  .feadback__central-block {
    display: flex;
    flex-direction: column;
  }
  .feadback__title {
    font-size: 18px;
    line-height: 21px;
  }
  .feadback__subtitle {
    padding-top: 35px;
    font-size: 13px;
    line-height: 16px;
  }
  .feadback__question {
    margin-top: 30px;
    font-size: 13px;
    line-height: 16px;
  }
  .feadback__bottom-block {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 35px;
  }
  .feadback__policy {
    width: 280px;
    font-size: 11px;
    line-height: 17px;
  }
  .feadback__input {
    padding-top: 30px;
  }
}
</style>
