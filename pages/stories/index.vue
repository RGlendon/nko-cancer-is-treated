<template>
  <Container>
    <h2 class="stories__title">Истории неизлечимых привычек</h2>
    <form action="" method="get" class="stories__search">
      <input
        name="search"
        placeholder="Искать здесь..."
        type="search"
        class="stories__search-input"
      />
      <button type="submit" class="stories__search-button">Поиск</button>
    </form>
    <div class="stories__container">
      <ul class="stories__list">
        <li
          class="stories__item"
          v-for="story in stories.slice(0, 16)"
          :key="story.id"
        >
          <Story
            class="story"
            :img="story.img"
            :text="story.text"
            :author="story.author"
            :id="`/stories/${story.id}`"
          />
        </li>
      </ul>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container.vue';
import Story from '@/components/Story';
export default {
  components: {
    Container,
    Story,
  },

  computed: {
    stories() {
      return this.$store.getters['stories/getStories'];
    },
  },
  // data() {
  //   return {
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
  //       {
  //         id: '5',
  //         author: 'Владимир Тен',
  //         text:
  //           'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
  //         img:
  //           'https://i.pinimg.com/474x/8e/8d/d0/8e8dd0868c61806e1c24bc8dd3ec0d91.jpg',
  //       },
  //       {
  //         id: '6',
  //         author: 'Владимир Познер',
  //         text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
  //         img: 'https://avatarko.ru/img/kartinka/17/anonim_16595.jpg',
  //       },
  //       {
  //         id: '7',
  //         author: 'Александр Тарханов',
  //         text: 'Я не могу победить свою пунктуальность в отличии от рака.',
  //         img: 'https://avatarko.ru/img/kartinka/22/film_elf_Tauriel_21381.jpg',
  //       },
  //       {
  //         id: '8',
  //         author: 'Владимир Тен',
  //         text:
  //           'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
  //         img: 'https://avatarko.ru/img/kartinka/1/Spiderman.jpg',
  //       },
  //       {
  //         id: '9',
  //         author: 'Владимир Тен',
  //         text:
  //           'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
  //         img:
  //           'https://i.pinimg.com/474x/8e/8d/d0/8e8dd0868c61806e1c24bc8dd3ec0d91.jpg',
  //       },
  //       {
  //         id: '10',
  //         author: 'Владимир Познер',
  //         text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
  //         img: 'https://avatarko.ru/img/kartinka/17/anonim_16595.jpg',
  //       },
  //       {
  //         id: '11',
  //         author: 'Александр Тарханов',
  //         text: 'Я не могу победить свою пунктуальность в отличии от рака.',
  //         img: 'https://avatarko.ru/img/kartinka/22/film_elf_Tauriel_21381.jpg',
  //       },
  //       {
  //         id: '12',
  //         author: 'Владимир Тен',
  //         text:
  //           'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
  //         img: 'https://avatarko.ru/img/kartinka/1/Spiderman.jpg',
  //       },
  //       {
  //         id: '13',
  //         author: 'Владимир Тен',
  //         text:
  //           'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
  //         img:
  //           'https://i.pinimg.com/474x/8e/8d/d0/8e8dd0868c61806e1c24bc8dd3ec0d91.jpg',
  //       },
  //       {
  //         id: '14',
  //         author: 'Владимир Познер',
  //         text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
  //         img: 'https://avatarko.ru/img/kartinka/17/anonim_16595.jpg',
  //       },
  //       {
  //         id: '15',
  //         author: 'Александр Тарханов',
  //         text: 'Я не могу победить свою пунктуальность в отличии от рака.',
  //         img: 'https://avatarko.ru/img/kartinka/22/film_elf_Tauriel_21381.jpg',
  //       },
  //       {
  //         id: '16',
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
.stories__title {
  width: 413px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.stories__search {
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
}
.stories__search-input {
  width: 1074px;
  height: 52px;
  border: 1px solid #e8e8e8;
  padding: 0;
}

.stories__search-button {
  width: 226px;
  height: 52px;
  background: #613a93;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  padding: 0;
}

.stories__list {
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
}

@media screen and (max-width: 768px) {
  .stories__list {
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0;
    max-height: 1535px;
    overflow: hidden;
  }
  .stories__title {
    width: 380px;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    margin: 0 auto;
    text-align: center;
  }
}

@media screen and (max-width: 320px) {
  .stories__list {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0;
    max-height: 3955px;
  }

  .stories__title {
    width: 290px;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
  }
}
</style>
