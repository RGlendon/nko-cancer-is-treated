<template>
  <div>
    <MobileMenu v-if="isMobileMenuOpened" class="main-mobile-menu" />
    <Header class="main-header" />
    <nuxt />
    <Overlay v-if="popupShown" @overlayClick="togglePopup" />
    <Popup v-if="popupShown">
      <Quiz
        :currentQuestion="currentQuestion"
        :count="questions.length - 1"
        :title="questions[currentQuestion].title"
        :question="questions[currentQuestion].question"
        :onPrev="prevQuestion"
        :onNext="nextQuestion"
        :closePopup="togglePopup"
        :answers="answers"
        :submitForm="submitForm"
      />
    </Popup>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import Overlay from '../components/UI/Overlay';
import Popup from '../components/Popup';
import Quiz from '../components/Quiz';
import MobileMenu from '../components/MobileMenu';

export default {
  components: {
    MobileMenu,
    Popup,
    Footer,
    Header,
    Overlay,
    Quiz,
  },

  computed: {
    popupShown() {
      return this.$store.getters['popup/getPopupShown'];
    },
    currentQuestion() {
      return this.$store.getters['quiz/getCurrentQuestion'];
    },
    questions() {
      return this.$store.getters['quiz/getQuestions'];
    },
    answers() {
      return this.$store.getters['quiz/getAnswers'];
    },
    isMobileMenuOpened() {
      return this.$store.getters['mobile-menu/getMobileMenuState'];
    },
  },

  methods: {
    togglePopup() {
      return this.$store.commit('popup/togglePopup');
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
  },
};
</script>

<style>
html {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.main-mobile-menu {
  display: none;
}

.main-header {
  border-bottom: 1px solid #efefef;
}

@media screen and (max-width: 768px) {
  .main-mobile-menu {
    min-height: 60px;
    display: block;
    border-bottom: 1px solid #efefef;
    /*display: flex;*/
    /*justify-content: flex-start;*/
    /*align-items: center;*/
  }
}
</style>
