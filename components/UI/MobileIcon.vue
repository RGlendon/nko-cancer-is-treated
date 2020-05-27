<template>
  <div
    :class="['mobile-button', { 'mobile-button_type_close': isMenuOpened }]"
    @click="toggleMobile"
  ></div>
</template>

<script>
export default {
  computed: {
    isMenuOpened() {
      return this.$store.getters['mobile-menu/getMobileMenuState'];
    },
  },
  methods: {
    toggleMobile() {
      this.$store.commit('mobile-menu/toggleMobileMenu');
    },
  },
};
</script>

<style scoped>
.mobile-button {
  width: 36px;
  height: 36px;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' %3F%3E%3Csvg enable-background='new 0 0 32 32' id='Editable-line' version='1.1' viewBox='0 0 32 32' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cline fill='none' id='XMLID_103_' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='2' x1='7' x2='25' y1='16' y2='16'/%3E%3Cline fill='none' id='XMLID_102_' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='2' x1='7' x2='25' y1='25' y2='25'/%3E%3Cline fill='none' id='XMLID_101_' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='2' x1='7' x2='25' y1='7' y2='7'/%3E%3C/svg%3E");
}

.mobile-button.mobile-button_type_close {
  width: 25px;
  height: 25px;
  background-image: url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='1.62684' y1='24.2528' x2='24.2543' y2='1.6254' stroke='black' stroke-width='3'/%3E%3Cline x1='24.2557' y1='24.3741' x2='1.62833' y2='1.74672' stroke='black' stroke-width='3'/%3E%3C/svg%3E");
}
</style>
