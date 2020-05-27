<template>
  <Container>
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
      <ul class="stories__list">
        <li
          class="stories__item"
          v-for="story in stories.slice(0, 4)"
          :key="story.id"
        >
          <Story
            :img="story.img"
            :text="story.text"
            :author="story.author"
            :id="`/stories/${story.id}`"
          />
        </li>
      </ul>
    </div>
    <ShowMore />
  </Container>
</template>

<script>
import Container from '@/components/Container.vue';
import ShowMore from '@/components/UI/ShowMoreButton.vue';
import Story from '@/components/Story.vue';
export default {
  components: {
    Container,
    ShowMore,
    Story,
  },

  computed: {
    stories() {
      return this.$store.getters['stories/getStories'];
    },
  },
  // data() {
  //   return {
  //     posts: [
  //       { id: 1, title: 'My journey with Vue' },
  //       { id: 2, title: 'Blogging with Vue' },
  //       { id: 3, title: 'Why Vue is so fun' },
  //     ],

  //     stories: [
  //       {
  //         id: '1',
  //         author: 'Владимир Тен',
  //         text:
  //           'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
  //         img:
  //           'https://i.pinimg.com/474x/8e/8d/d0/8e8dd0868c61806e1c24bc8dd3ec0d91.jpg',
  //       },
  //       {
  //         id: '2',
  //         author: 'Владимир Познер',
  //         text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
  //         img: 'https://avatarko.ru/img/kartinka/17/anonim_16595.jpg',
  //       },
  //       {
  //         id: '3',
  //         author: 'Александр Тарханов',
  //         text: 'Я не могу победить свою пунктуальность в отличии от рака.',
  //         img: 'https://avatarko.ru/img/kartinka/22/film_elf_Tauriel_21381.jpg',
  //       },
  //       {
  //         id: '4',
  //         author: 'Владимир Тен',
  //         text:
  //           'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
  //         img: 'https://avatarko.ru/img/kartinka/1/Spiderman.jpg',
  //       },
  //     ],
  //   };
  // },
};
</script>

<style scoped>
.story__head {
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
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

.stories__list {
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
  margin-top: 90px;
}

@media screen and (max-width: 1280px) {
  .story__head {
    display: flex;
    justify-content: space-between;
  }

  .story__img {
    width: 518px;
    height: 518px;
    background: #ededed;
  }

  .story__about {
    height: 100%;
    width: 602px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .story__title {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 44px;
    color: #000000;
    margin-top: 30px;
  }

  .story__details {
    width: 602px;
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
    margin-top: 120px;
    max-width: 720px;
  }

  .story__text {
    width: 780px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 70px;
  }

  .stories__list {
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0;
    margin-top: 90px;
  }
}

@media screen and (max-width: 1024px) {
  .story__head {
    display: flex;
    justify-content: space-between;
  }

  .story__img {
    width: 407px;
    height: 407px;
    background: #ededed;
  }

  .story__about {
    height: 94%;
    width: 477px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .story__title {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 38px;
    color: #000000;
    margin-top: 20px;
  }

  .story__details {
    width: 477px;
    display: flex;
    justify-content: space-between;
  }

  .story__share {
    margin-top: 20px;
    margin-bottom: 20px;
    text-decoration: none;
    color: #000000;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    display: block;
    text-align: center;
  }

  .story__date {
    margin-top: 20px;
    margin-bottom: 20px;
    text-decoration: none;
    color: #000000;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }

  .story__main {
    margin: 0 auto;
    margin-top: 120px;
    max-width: 640px;
  }

  .story__text {
    width: 640px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 70px;
  }

  .stories__list {
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0;
    margin-top: 90px;
  }
}

@media screen and (max-width: 768px) {
  .story__head {
    display: flex;
    justify-content: space-between;
  }

  .story__img {
    width: 420px;
    height: 420px;
    background: #ededed;
    /* display: none; */
    position: absolute;
    left: 22%;
    top: 21%;
  }

  .story__about {
    height: 673px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .story__title {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 38px;
    color: #000000;
    margin-top: 20px;
    text-align: center;
  }

  .story__details {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .story__share {
    margin-top: 20px;
    margin-bottom: 20px;
    text-decoration: none;
    color: #000000;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    display: block;
    text-align: center;
  }

  .story__date {
    margin-top: 20px;
    margin-bottom: 20px;
    text-decoration: none;
    color: #000000;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }

  .story__main {
    margin: 0 auto;
    margin-top: 120px;
    max-width: 640px;
  }

  .story__text {
    width: 640px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 70px;
  }

  .stories__list {
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0;
    margin-top: 90px;
    height: 358px;
    overflow: hidden;
  }
}

@media screen and (max-width: 320px) {
  .story__head {
    display: flex;
    justify-content: space-between;
  }

  .story__img {
    width: 290px;
    height: 290px;
    background: #ededed;
    /* display: none; */
    position: absolute;
    left: 4%;
    top: 22%;
  }

  .story__about {
    height: 469px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .story__title {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 19px;
    color: #000000;
    margin-top: 20px;
    text-align: center;
  }

  .story__details {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .story__share {
    margin-top: 20px;
    margin-bottom: 20px;
    text-decoration: none;
    color: #000000;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    display: block;
    text-align: center;
  }

  .story__date {
    margin-top: 20px;
    margin-bottom: 20px;
    text-decoration: none;
    color: #000000;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
  }

  .story__main {
    margin: 0 auto;
    margin-top: 40px;
    max-width: 640px;
  }

  .story__text {
    width: 290px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 70px;
  }

  .stories__list {
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0;
    margin-top: 90px;
    height: 1309px;
    overflow: hidden;
  }
}
</style>
