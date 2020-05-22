<template>
  <Container>
    <div class="stories">
      <h2 class="stories__title">Истории неизлечимых привычек</h2>
      <div class="stories__container">
        <ul class="stories__list">
          <li class="stories__item" v-for="story in stories" :key="story.id">
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
    </div>
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
  data() {
    return {
      stories: [
        {
          id: '1',
          author: 'Владимир Тен',
          text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          img:
            'https://i.pinimg.com/474x/8e/8d/d0/8e8dd0868c61806e1c24bc8dd3ec0d91.jpg',
        },
        {
          id: '2',
          author: 'Владимир Познер',
          text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
          img: 'https://avatarko.ru/img/kartinka/17/anonim_16595.jpg',
        },
        {
          id: '3',
          author: 'Александр Тарханов',
          text: 'Я не могу победить свою пунктуальность в отличии от рака.',
          img: 'https://avatarko.ru/img/kartinka/22/film_elf_Tauriel_21381.jpg',
        },
        {
          id: '4',
          author: 'Владимир Тен',
          text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          img: 'https://avatarko.ru/img/kartinka/1/Spiderman.jpg',
        },
        {
          id: '5',
          author: 'Владимир Тен',
          text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          img:
            'https://i.pinimg.com/474x/8e/8d/d0/8e8dd0868c61806e1c24bc8dd3ec0d91.jpg',
        },
        {
          id: '6',
          author: 'Владимир Познер',
          text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
          img: 'https://avatarko.ru/img/kartinka/17/anonim_16595.jpg',
        },
        {
          id: '7',
          author: 'Александр Тарханов',
          text: 'Я не могу победить свою пунктуальность в отличии от рака.',
          img: 'https://avatarko.ru/img/kartinka/22/film_elf_Tauriel_21381.jpg',
        },
        {
          id: '8',
          author: 'Владимир Тен',
          text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
          img: 'https://avatarko.ru/img/kartinka/1/Spiderman.jpg',
        },
      ],
    };
  },
};
</script>

<style scoped>
.stories__list {
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
}

.stories {
  min-height: 689px;
  margin: 0 auto;
  margin-top: 100px;
}

.stories__title {
  width: 413px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
</style>
