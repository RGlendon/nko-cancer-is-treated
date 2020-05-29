<template>
  <div>
    <div class="quiz" v-if="currentNumber < questions.length - 1">
      <h3 class="quiz__title">{{ questions[currentNumber].title }}</h3>
      <p class="quize__question">
        <span class="quize__question_main">{{
          questions[currentNumber].question
        }}</span>
        <span
          v-if="questions[currentNumber].questionAdd"
          class="quize__question_add"
          >{{ questions[currentNumber].questionAdd }}</span
        >
      </p>

      <Input
        placeholder="Напишите тут"
        :bottomBordered="true"
        v-model="answer"
        :autofocus="true"
      />

      <div class="quiz__buttons">
        <button
          @click="prevQuestion"
          class="quiz__prev"
          :disabled="currentNumber === 0"
        >
          Назад
        </button>
        <Button
          v-if="currentNumber < questions.length - 1 - 1"
          @btnClick="nextQuestion"
          :disabled="answer.length === 0"
          >Далее
        </Button>
        <Button v-else @btnClick="submitPopupForm">Отправить</Button>
        <p v-if="currentNumber === 11" class="quiz__policy">
          Нажимая на кнопку «отправить», вы даете согласие на
          <nuxt-link :to="'/policy'" class="quiz__link"
            >обработку персональных данных</nuxt-link
          >
        </p>
      </div>
    </div>

    <div class="quiz" v-else>
      <h3 class="quiz__title quiz__title_center">
        {{ questions[currentNumber].title }}
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

  data() {
    return {
      answer: '',
    };
  },

  computed: {
    questions() {
      return this.$store.getters['quiz/getQuestions'];
    },
    currentNumber() {
      return this.$store.getters['quiz/getCurrentNumber'];
    },
    answers() {
      return this.$store.getters['quiz/getAnswers'];
    },
    initialAnswer() {
      return this.$store.getters['quiz/initialAnswer'];
    },
  },

  methods: {
    async prevQuestion() {
      await this.$store.dispatch('quiz/PREV_QUESTION');
      this.answer = this.initialAnswer;
    },
    async nextQuestion() {
      await this.$store.dispatch('quiz/NEXT_QUESTION', { answer: this.answer });
      this.answer = this.initialAnswer;
    },
    submitForm(answers) {
      console.log(`отправлена форма с данными ${answers}`);
    },
    async submitPopupForm() {
      await this.$store.dispatch('quiz/NEXT_QUESTION', { answer: this.answer });
      await this.submitForm(this.answers);
      // await
    },
    togglePopup() {
      this.$store.commit('quiz/resetQuiz');
      this.$store.commit('popup/togglePopup');
    },
  },
};
</script>

<style scoped>
.quiz__policy {
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #666666;
  margin-left: 30px;
  width: 27em;
}
.quiz__link {
  color: #666666;
}
.quiz__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 0;
}

.quize__question {
  min-height: 72px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-top: 40px;
  margin-bottom: 110px;
}

.quize__question_add {
  font-weight: normal;
}

.quiz__buttons {
  margin-top: 200px;
  display: flex;
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
  text-align: center;
  margin-bottom: 432px;
}

.quiz_button {
  display: block;
  margin: 0 auto;
}
</style>
