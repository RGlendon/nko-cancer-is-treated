<template>
  <div :class="['popup', { popup_feedback: feedbackShown }]">
    <div class="close" @click="closePopup"></div>
    <slot>Содержимое окна</slot>
  </div>
</template>

<script>
export default {
  props: {
    feedbackShown: Boolean,
  },
  methods: {
    closePopup() {
      this.$store.commit('popup/closePopup');
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 920px;
  box-sizing: border-box;
  padding: 40px;
  background-color: var(--color-lightgray2);
  z-index: 2;
}

.close {
  background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='7.92879' y1='7.92888' x2='22.0709' y2='22.071' stroke='black' stroke-width='2'/%3E%3Cline x1='7.92864' y1='22.071' x2='22.0708' y2='7.92883' stroke='black' stroke-width='2'/%3E%3C/svg%3E%0A");
  background-position: center;
  position: absolute;
  top: 43.6px;
  right: 42.2px;
  width: 13px;
  height: 13px;
  cursor: pointer;
}

@media screen and (max-width: 1280px) {
  .popup {
    width: 800px;
  }
  .close {
    top: 37.8px;
    right: 36.7px;
  }
}

@media screen and (max-width: 768px) {
  .popup {
    width: 580px;
  }
}
@media screen and (max-width: 320px) {
  .popup {
    width: 90.65%;
    padding: 15px;
  }
  .close {
    top: 19.7px;
    right: 16.9px;
  }
  .popup.popup_feedback {
    top: 15px;
    transform: translate(-50%, 0);
  }
}
</style>
