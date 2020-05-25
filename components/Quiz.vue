<template>
  <div>
    <div class="quiz" v-if="currentQuestion < count">
      <h3 class="quiz__title">{{ title }}</h3>
      <p class="quize__question">{{ question }}</p>
      <Input
        placeholder="Напишите тут"
        :bottomBordered="true"
        v-model="content"
      />
      <div class="quiz__buttons">
        <button
          @click="onPrev"
          class="quiz__prev"
          :disabled="currentQuestion === 0"
        >
          Назад
        </button>
        <Button
          v-if="currentQuestion < count - 1"
          @btnClick="onNext(content, currentQuestion)"
          >Далее</Button
        >
        <!-- <Button v-if="currentQuestion < count - 1" @btnClick="onNext">Далее</Button> -->
        <Button v-else @btnClick="submitPopupForm">Отправить</Button>
        <!-- <Button v-else>Отправить</Button> -->
      </div>
    </div>
    <div class="quiz" v-else>
      <h3 class="quiz__title quiz__title_center">{{ title }}</h3>
      <Button class="quiz_button" @btnClick="closePopup">Закрыть</Button>
    </div>
  </div>
</template>

<script>
import Input from '~/components/UI/Input';
import Button from '~/components/UI/Button';

export default {
  props: {
    currentQuestion: Number,
    count: Number,
    title: {
      required: true,
      default: 'Шаг 0 из 12',
      type: String,
    },
    question: {
      type: String,
    },
    answers: Array,
    onNext: Function,
    onPrev: Function,
    closePopup: Function,
    submitForm: Function,
  },
  components: {
    Input,
    Button,
  },
  methods: {
    submitPopupForm() {
      this.onNext();
      this.submitForm(this.answers);
    },
  },
  data() {
    return {
      content: this.value,
    };
  },
};
</script>

<style scoped>
.quiz {
}

.quiz__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 0;
}

.quize__question {
  min-height: 72px;
  /* font-weight: 500; */
  font-size: 18px;
  line-height: 24px;
  margin-top: 40px;
  margin-bottom: 110px;
}

.quiz__buttons {
  margin-top: 200px;
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
