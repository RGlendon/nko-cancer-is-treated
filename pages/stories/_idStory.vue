<template>
  <div class="story__wrap">
    <div class="story__head">
      <img src="#" alt="" class="story__img" />
      <div class="story__about-container">
        <hr class="story__line" />
        <div class="story__about">
          <h2 class="story__title">
            Александр Тарханов: «Я не могу победить свою пунктуальность в
            отличии от рака»
          </h2>
          <div class="story__details">
            <a href="" class="story__share">Поделитесь ↗</a>
            <p class="story__date">20 апреля 2018</p>
          </div>
        </div>
        <hr class="story__line" />
      </div>
    </div>
    <div class="story__main">
      <p class="story__text">
        Я из военной семьи. Отец хоть и не был военным сам, но нас всех держал в
        ежовых рукавицах. Думаю, поэтому мы и выросли такими ответственными.
        <br /><br />
        У меня дома до сих пор стоят часы в каждой комнате, хотя они и не нужны
        особо — я сам чувствую, опаздываю куда-то или нет, отстаю от нужного
        графика или опережаю. Вот такие встроенные внутренние часы! Будильник
        мне тоже не нужен — я всегда встаю раньше. Одеваюсь тоже быстро, как в
        армии, за 45 секунд. <br /><br />
        «В футболе если команда опоздала на 15 минут, ей засчитывается
        поражение». <br /><br />
        Опаздывать я тоже не люблю, на все встречи прихожу заранее. Если знаю,
        что могу попасть по дороге в пробку, то не еду на машине. В аэропорт
        приезжаю задолго до начала регистрации. Лучше подожду и кофе попью, чем
        опоздаю! <br /><br />
        Когда мне было 16 лет, мне в школе геометрию нужно было пересдавать. Я
        билеты выучил, знал абсолютно все. Пришел в нужное время, а учительница
        — нет. Ну, я какое-то время подождал ее и ушел. Потом она спрашивала:
        «Почему не дождался?». Я ответил: «В футболе если команда опоздала на 15
        минут, ей засчитывается поражение». Экзамен мне все-таки поставили!
        Сейчас если кто-то из футболистов моей команды опаздывает — начинаю
        злиться, могу и прикрикнуть потом. А если кто-то опоздал на тренировку
        перед игрой — все, подготовка насмарку. Я сразу начинаю думать тогда:
        «Значит, точно проиграем». Такая болезненная пунктуальность уже не
        лечится. В отличие от рака. <br /><br />
        «Сейчас если кто-то из футболистов моей команды опаздывает — начинаю
        злиться, могу и прикрикнуть потом. А если кто-то опоздал на тренировку
        перед игрой — все, подготовка насмарку. Я сразу начинаю думать тогда:
        «Значит, точно проиграем». Такая болезненная пунктуальность уже не
        лечится».
      </p>
      <hr class="story__line" />
      <a href="" class="story__share"
        >Поделитесь этой статьей в своих социальных сетях ↗</a
      >
      <hr class="story__line" />
    </div>
    <div class="stories__container">
      <div class="story__item">
        <a href="../stories/1" class="story__link">
          <div class="story__wrapp">
            <img
              src="https://i.pinimg.com/474x/8e/8d/d0/8e8dd0868c61806e1c24bc8dd3ec0d91.jpg"
              class="story__background"
            />
            <h3 class="story__author">Владимир Тен</h3>
            <p class="story__quote">
              Я всегда читаю книги с конца, - и это не лечится, в отличие от
              рака.
            </p>
          </div>
        </a>
      </div>
      <div class="story__item">
        <a href="../stories/1" class="story__link">
          <div class="story__wrapp">
            <img class="story__background" />
            <h3 class="story__author">Владимир Познер</h3>
            <p class="story__quote">
              Я боюсь акул — и, в отличии от рака, это не лечится.
            </p>
          </div>
        </a>
      </div>
      <div class="story__item">
        <a href="../stories/1" class="story__link">
          <div class="story__wrapp">
            <img class="story__background" />
            <h3 class="story__author">Александр Тарханов</h3>
            <p class="story__quote">
              Я не могу победить свою пунктуальность в отличии от рака.
            </p>
          </div>
        </a>
      </div>
      <div class="story__item">
        <a href="../stories/1" class="story__link">
          <div class="story__wrapp">
            <img class="story__background" />
            <h3 class="story__author">Владимир Тен</h3>
            <p class="story__quote">
              Я всегда читаю книги с конца, - и это не лечится, в отличие от
              рака.
            </p>
          </div>
        </a>
      </div>
    </div>
    <ShowMore />
  </div>
</template>

<script>
import ShowMore from '@/components/UI/ShowMoreButton.vue';
export default {
  components: {
    ShowMore,
  },
};
</script>

<style scoped>
.story__wrap {
  width: calc(1440px - 120px);
  margin: 0 auto;
  margin-top: 100px;
}
.story__head {
  display: flex;
  justify-content: space-between;
}

.story__img {
  width: 580px;
  height: 580px;
  background: #ededed;
}

.story__about {
  height: 100%;
  width: 680px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.story__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 38px;
  line-height: 48px;
  color: #000000;
  margin-top: 30px;
}

.story__details {
  width: 680px;
  display: flex;
  justify-content: space-between;
}

.story__share {
  margin-top: 30px;
  margin-bottom: 30px;
  text-decoration: none;
  color: #000000;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  display: block;
  text-align: center;
}

.story__date {
  margin-top: 30px;
  margin-bottom: 30px;
  text-decoration: none;
  color: #000000;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
}

.story__main {
  margin: 0 auto;
  margin-top: 130px;
  max-width: 780px;
}

.story__text {
  width: 780px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 70px;
}

.stories__container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 90px;
}

.story__item {
  margin-top: 70px;
}

.story__link {
  text-decoration: none;
  color: black;
}

.story__background {
  background: #ededed;
  width: 300px;
  height: 300px;
}

.story__author {
  margin-top: 20px;
  width: 300px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
}

.story__quote {
  margin-top: 14px;
  width: 250px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
}
</style>
