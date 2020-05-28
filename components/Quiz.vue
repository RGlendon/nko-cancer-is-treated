<template>
  <div>
    <div class="quiz" v-if="currentQuestion < questions.length - 1">
      <h3 class="quiz__title">{{ questions[currentQuestion].title }}</h3>
      <p class="quize__question">{{ questions[currentQuestion].question }}</p>

      <Input
        placeholder="Напишите тут"
        :bottomBordered="true"
        v-model="content"
      />

      <div class="quiz__buttons">
        <button
          @click="prevQuestion"
          class="quiz__prev"
          :disabled="currentQuestion === 0"
        >
          Назад
        </button>
        <Button
          v-if="currentQuestion < questions.length - 1 - 1"
          @btnClick="nextQuestion(content, currentQuestion)"
          >Далее
        </Button>
        <Button v-else @btnClick="submitPopupForm">Отправить</Button>
      </div>
    </div>

    <div class="quiz" v-else>
      <h3 class="quiz__title quiz__title_center">
        {{ questions[currentQuestion].title }}
      </h3>
      <Button class="quiz_button" @btnClick="togglePopup">Закрыть</Button>
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
      this.nextQuestion();
      this.submitForm(this.answers);
    },
    prevQuestion() {
      return this.$store.commit('quiz/prevQuestion');
    },
    nextQuestion(answer, currentQuestion) {
      return (
        this.$store.commit('quiz/setAnswer', { answer, currentQuestion }),
        this.$store.commit('quiz/nextQuestion')
      );
    },
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
.quiz {
  min-height: 520px;
}

.quiz__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 0;
  color: #000;
}

.quize__question {
  min-height: 72px;
  font-size: 18px;
  line-height: 24px;
  margin-top: 40px;
  margin-bottom: 86px;
  color: #000;
}

.quiz__buttons {
  margin-top: 200px;
  display: flex;
  flex-direction: row;
}

.quiz__prev {
  border: 0;
  background: transparent;
  outline: none;
  padding: 0;
  margin-right: 30px;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
}

.quiz__prev:disabled {
  color: #c0c0c0;
  cursor: default;
}

.quiz__title_center {
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  margin-bottom: 432px;
}

.quiz_button {
  display: block;
  margin: 0 auto;
}
@media screen and (max-width: 1280px) {
  .quiz {
    min-height: 440px;
  }
  .quiz__title {
    font-size: 28px;
    line-height: 32px;
  }

  .quize__question {
    min-height: 88px;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 30px;
  }

  .quiz__buttons {
    height: 48px;
    margin-top: 170px;
  }

  .quiz__title_center {
    font-size: 28px;
    line-height: 32px;
    text-align: center;
    margin-bottom: 358px;
  }
}
@media screen and (max-width: 1024px) {
  .quiz__title {
    font-size: 26px;
    line-height: 30px;
  }

  .quize__question {
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 30px;
  }

  .quiz__buttons {
    height: 46px;
    margin-top: 174px;
  }

  .quiz__title_center {
    font-size: 26px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 361px;
  }
}
@media screen and (max-width: 768px) {
  .quiz__title {
    font-size: 26px;
    line-height: 30px;
  }

  .quize__question {
    min-height: 95px;
    font-size: 15px;
    line-height: 19px;
    margin-bottom: 26px;
  }

  .quiz__buttons {
    margin-top: 174px;
  }

  .quiz__title_center {
    font-size: 26px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 361px;
  }
}
@media screen and (max-width: 320px) {
  .quiz {
    min-height: 490px;
  }

  .quiz__title {
    font-size: 18px;
    line-height: 21px;
  }

  .quize__question {
    font-size: 13px;
    line-height: 16px;
    min-height: 172px;
    margin-bottom: 22px;
  }

  .quiz__prev {
    margin-right: 15px;
    font-size: 13px;
    line-height: 16px;
  }

  .quiz__buttons {
    height: 40px;
    margin-top: 174px;
  }

  .quiz__title_center {
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    margin-bottom: 391px;
  }
}
</style>
