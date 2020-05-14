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
            <a href="#" class="raklechitsa__link1" v-on:click="stories[0].text"
              >Рак Лечится</a
            >
            <a href="#" class="raklechitsa__link2">Фонд Хабенского</a>
          </div>
          <p class="raklechitsa__main-text">
            Есть вещи, которые не лечатся. Особенности характера, страстные
            увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
            приобрели в детстве. Список можно продолжать до бесконечности, но
            одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится,
            и лучшее доказательство — люди с их неизлечимыми особенностями,
            которые сумели победить рак. <br />
            <br />
            Рак лечится — проект Благотворительного Фонда Константина Хабенского
            и Leo Burnett Moscow. С его помощью мы надеемся изменить отношение
            людей к раку и заставить каждого поверить: онкологическое
            заболевание — это не приговор.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stories: [
        {
          id: '1',
          text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '2',
          text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
      ],
    };
  },
};
</script>

<style scoped>
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
  color: #ffffff;
  display: block;
  text-decoration: none;
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
}

.raklechitsa__links {
  margin-right: 40px;
}
</style>
