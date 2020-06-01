<template>
  <div>
    <h2 class="socials__title">Поделитесь</h2>
    <ul class="socials__icons">
      <li>
        <img class="socials__icon" src="../static/Images/facebook.svg" />
      </li>
      <li>
        <img class="socials__icon" src="../static/Images/Twitter.svg" />
      </li>
      <li>
        <img class="socials__icon" src="../static/Images/vkontakte.svg" />
      </li>
      <li>
        <img class="socials__icon" src="../static/Images/odnoklassniki.svg" />
      </li>
      <li>
        <img class="socials__icon" src="../static/Images/inst.svg" />
      </li>
      <li>
        <img class="socials__icon" src="../static/Images/youtube.png" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
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
.socials__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 0;
  text-align: center;
}

.socials__icons {
  margin: 110px auto 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
}

.socials__icon {
  margin-right: 40px;
  border: none;
  padding: 0;
  width: 40px;
  height: 30px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
}

@media screen and (max-width: 768px) {
  .socials__icon {
    margin-right: 25px;
    width: 30px;
  }
}

@media screen and (max-width: 400px) {
  .socials__title {
    font-size: 18px;
  }
  .socials__icons {
    margin: 70px auto;
  }
  .socials__icon {
    margin-right: 20px;
    padding: 0;
    width: 22px;
    height: 20px;
  }
}
</style>
