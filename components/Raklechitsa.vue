<template>
  <Container class="container_raklechitsa">
    <div class="raklechitsa">
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
              class="raklechitsa__link"
              :class="{ raklechitsa__link_active: option === 0 }"
              v-on:click="selectOption(0)"
              >Рак Лечится</a
            >
            <a
              class="raklechitsa__link"
              :class="{ raklechitsa__link_active: option === 1 }"
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
  </Container>
</template>

<script>
import Container from '@/components/Container.vue';
import Button from '@/components/UI/Button.vue';

export default {
  components: {
    Container,
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
        'Есть вещи, которые не лечатся. Особенности характера, страстные увлечения, привычки, ' +
          'ставшие частью нашего «я», фобии, которые мы приобрели в детстве. Список можно продолжать ' +
          'до бесконечности, но одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится, ' +
          'и лучшее доказательство — люди с их неизлечимыми особенностями, которые сумели победить рак.\n' +
          '\n' +
          'Рак лечится — проект Благотворительного Фонда Константина Хабенского и Leo Burnett Moscow. ' +
          'С его помощью мы надеемся изменить отношение людей к раку и заставить каждого поверить: ' +
          'онкологическое заболевание — это не приговор.',
        'Благотворительный Фонд Константина Хабенского с 2008 года помогает детям с онкологическими ' +
          'и другими тяжелыми заболеваниями головного мозга. Фонд не только поддерживает семью заболевшего ' +
          'ребенка в самый сложный момент, оплачивая обследования, лечение и медицинские препараты, ' +
          'но и в целом меняет систему оказания помощи детям с опухолями мозга в России.',
      ],
    };
  },
};
</script>

<style scoped>
.container_raklechitsa {
  background: var(--color-purple);
}

.raklechitsa {
  height: 650px;
  margin: 0 auto;
}

.raklechitsa__title {
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  color: var(--color-lightgray2);
  margin: 0;
  padding-top: 90px;
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
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: var(--color-gray);
  margin: 0;
}

.raklechitsa__about {
  max-width: 340px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: var(--color-lightgray2);
  margin: 0;
}

.raklechitsa__about-text {
  max-width: 340px;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: var(--color-gray);
  margin: 0;
  margin-top: 32px;
}

.raklechitsa__link {
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  color: var(--color-gray2);
  display: block;
  text-decoration: none;
  cursor: pointer;

  margin-bottom: 10px;
}

.raklechitsa__links {
  margin-right: 40px;
}

.raklechitsa__link_active {
  font-weight: 500;
  color: var(--color-lightgray2);
  cursor: pointer;
}

@media screen and (max-width: 1280px) {
  .raklechitsa__title {
    font-size: 58px;
    line-height: 70px;
    padding-top: 80px;
  }

  .raklechitsa__about {
    font-size: 28px;
    line-height: 32px;
  }

  .raklechitsa__about-text {
    max-width: 305px;
    font-size: 16px;
    line-height: 20px;
    margin-top: 30px;
  }

  .raklechitsa__main-text {
    max-width: 578px;
  }
}

@media screen and (max-width: 1024px) {
  .raklechitsa__title {
    font-size: 52px;
    line-height: 63px;
  }

  .raklechitsa__about {
    font-size: 24px;
    line-height: 28px;
  }

  .raklechitsa__about-text {
    max-width: 260px;
    font-size: 13px;
    line-height: 16px;
  }

  .raklechitsa__link {
    font-size: 15px;
    line-height: 19px;
    margin-bottom: 10px;
  }

  .raklechitsa__main-text {
    max-width: 447px;
    font-size: 15px;
    line-height: 19px;
  }
}

@media screen and (max-width: 768px) {
  .raklechitsa__title {
    display: none;
  }

  .raklechitsa__columns {
    display: table;
    /* justify-content: end; */
    /*margin-top: 70px;*/
    margin: 0 auto;
  }

  .raklechitsa__column {
    display: block;
    margin-top: 80px;
  }

  .raklechitsa__links {
    display: flex;
  }

  .raklechitsa__link {
    font-size: 15px;
    line-height: 19px;
    margin-right: 30px;
    padding: 6px;
  }

  .raklechitsa__link_active {
    border-bottom: 2px solid #fff;
  }

  .raklechitsa__brief {
    display: block;
    margin-top: 80px;
  }

  .raklechitsa__about {
    margin: 0 auto;
    padding: 0;
    text-align: center;
  }

  .raklechitsa__about-text {
    max-width: 380px;
    margin-top: 26px;
  }

  .raklechitsa__main-text {
    max-width: 380px;
    margin-top: 14px;
  }
}

@media screen and (max-width: 320px) {
  .raklechitsa {
    width: 100%;
    height: 628px;
  }

  .raklechitsa__title {
    display: none;
  }

  .raklechitsa__column {
    display: block;
    margin-top: 40px;
  }

  .raklechitsa__links {
    display: flex;
    margin-right: 0;
  }

  .raklechitsa__link {
    font-size: 13px;
    line-height: 19px;
    margin-right: 20px;
    padding: 6px;
  }

  .raklechitsa__brief {
    display: block;
    margin-top: 50px;
  }

  .raklechitsa__about {
    font-size: 18px;
    line-height: 21px;
    text-align: left;
  }

  .raklechitsa__about-text {
    margin-top: 16px;
  }

  .raklechitsa__main-text {
    margin-top: 0;
  }
}
</style>
