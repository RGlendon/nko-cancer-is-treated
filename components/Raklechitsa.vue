<template>
  <div class="raklechitsa">
    <div class="raklechitsa__wrap">
      <h2 class="raklechitsa__title">#РАКЛЕЧИТСЯ</h2>
      <div class="raklechitsa__columns">
        <div class="raklechitsa__brief">
          <h3 class="raklechitsa__about">О проекте</h3>
          <p class="raklechitsa__about-text">
            Этот проект был создан благотворительным фондом Константина
            Хабенского.
          </p>
        </div>
        <div class="raklechitsa__column">
          <div class="raklechitsa__links">
            <a
              class="tellStory__variant raklechitsa__link1"
              :class="{ tellStory__variant_active: option === 0 }"
              v-on:click="selectOption(0)"
              >Рак Лечится</a
            >
            <a
              class="tellStory__variant raklechitsa__link2"
              :class="{ tellStory__variant_active: option === 1 }"
              v-on:click="selectOption(1)"
              >Фонд Хабенского</a
            >
          </div>
          <p
            class="raklechitsa__main-text"
            v-html="options[option].replace(/(?:\r\n|\r|\n)/g, '<br />')"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/UI/Button.vue';

export default {
  components: {
    Button,
  },

  methods: {
    selectOption: function(number) {
      this.option = number;
    },
    handleNewLine(str) {
      return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
    },
  },

  data() {
    return {
      option: 0,
      options: [
        'Есть вещи, которые не лечатся. Особенности характера, страстные увлечения, привычки, ставшие частью нашего «я», фобии, которые мы приобрели в детстве. Список можно продолжать до бесконечности, но одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится, и лучшее доказательство — люди с их неизлечимыми особенностями, которые сумели победить рак.\n' +
          '\n' +
          'Рак лечится — проект Благотворительного Фонда Константина Хабенского и Leo Burnett Moscow. С его помощью мы надеемся изменить отношение людей к раку и заставить каждого поверить: онкологическое заболевание — это не приговор.',
        'Благотворительный Фонд Константина Хабенского с 2008 года помогает детям с онкологическими и другими тяжелыми заболеваниями головного мозга. Фонд не только поддерживает семью заболевшего ребенка в самый сложный момент, оплачивая обследования, лечение и медицинские препараты, но и в целом меняет систему оказания помощи детям с опухолями мозга в России.',
        // 'Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю\n' +
        //   '        после проверки. Пожалуйста, заполняйте все пункты корректно, если вы\n' +
        //   '        испытаете какие-то сложности, воспользуйтесь 2-м вариантом.',
        // 'Оставить контакт (почту или номер телефона) и мы свяжемся с вами, зададим вопросы, ' +
        //   'уточним детали вашей истории.',
      ],
    };
  },
};
</script>

<style scoped>
.tellStory__variant {
  font-size: 18px;
  line-height: 22px;
  font-weight: normal;
  cursor: pointer;
  color: #c9c9c9;
}

.raklechitsa {
  max-width: 1440px;
  min-height: 650px;
  margin: 0 auto;
  margin-top: 100px;
  background: #613a93;
}

.raklechitsa__wrap {
  max-width: calc(1440px - 120px);
  margin: 0 auto;
  padding-top: 90px;
}

.raklechitsa__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  color: #ffffff;
}

.raklechitsa__columns {
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
}

.raklechitsa__column {
  display: flex;
  justify-content: space-between;
  margin-top: 68px;
}

.raklechitsa__main-text {
  max-width: 640px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
}

.raklechitsa__about {
  max-width: 340px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #ffffff;
}

.raklechitsa__about-text {
  max-width: 340px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
  margin-top: 32px;
}

.raklechitsa__link1 {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  color: #c9c9c9;
  display: block;
  text-decoration: none;
  cursor: pointer;
}

.raklechitsa__link2 {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  color: #c9c9c9;
  display: block;
  text-decoration: none;
  cursor: pointer;
}

.raklechitsa__links {
  margin-right: 40px;
}

.tellStory__variant_active {
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
}
</style>
