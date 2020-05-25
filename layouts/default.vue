<template>
  <div>
    <Header />
    <nuxt />
    <Overlay v-if="popupShown" @overlayClick="togglePopup" />
    <Popup v-if="popupShown">покажись!</Popup>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import Overlay from '../components/UI/Overlay';
import Popup from '../components/Popup';

export default {
  components: {
    Popup,
    Footer,
    Header,
    Overlay,
  },
  computed: {
    popupShown() {
      return this.$store.getters['popup/getPopupShown'];
    },
  },
  methods: {
    togglePopup() {
      return this.$store.commit('popup/togglePopup');
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
</style>
