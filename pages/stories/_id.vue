<template>
  <Container :className="'container_type_margin'">
    <div class="story__head">
      <img
        :src="`${baseurl}${isLargeImageSet(story)}`"
        alt=""
        class="story__img"
      />
      <div class="story__about-container">
        <hr class="story__line" />
        <div class="story__about">
          <h2 class="story__title">
            {{ story.author }}:&laquo;{{ story.title }}&raquo;
          </h2>
          <div class="story__details">
            <a href="" class="story__share">Поделитесь ↗</a>
            <p class="story__date">{{ storyDate }}</p>
          </div>
        </div>
        <hr class="story__line" />
      </div>
    </div>
    <div class="story__main">
      <p class="story__text" v-html="story.text"></p>
      <hr class="story__line" />
      <a href="" class="story__share"
        >Поделитесь этой статьей в своих социальных сетях ↗</a
      >
      <hr class="story__line" />
    </div>
    <div class="stories__container">
      <ul class="stories__list">
        <li class="stories__item" v-for="story in itemsToLoop" :key="story.id">
          <Story
            :ImageUrl="isSmallImageSet(story)"
            :title="story.title"
            :author="story.author"
            @cardClick="goToDetail(story.id)"
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

  data() {
    return {
      baseurl: process.env.BASE_URL,
    };
  },
  computed: {
    stories() {
      return this.$store.getters['stories/getStories'];
    },

    story() {
      return this.$store.getters['stories/getCurrentsStory'];
    },
    itemsToLoop() {
      if (process.browser) {
        if (window.innerWidth <= 768 && window.innerWidth > 475) {
          return this.stories.filter((item, index) => index < 3);
        } else if (window.innerWidth <= 475) {
          return this.stories.filter((item, index) => index < 2);
        } else {
          return this.stories.filter((item, index) => index < 4);
        }
      }
    },
    storyDate() {
      const month = [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря',
      ];

      const date = new Date(this.story.date);
      const storyDay = date.getDate();
      const storyMonth = month[date.getMonth()];
      const storyYear = date.getFullYear();
      const storyDate = `${storyDay} ${storyMonth} ${storyYear}`;
      return storyDate;
    },
  },
  methods: {
    goToDetail(id) {
      this.$router.push(`/stories/${id}`);
    },
    isLargeImageSet() {
      const imageFormats = this.story.ImageUrl[0].formats;
      if (imageFormats.hasOwnProperty('large')) {
        return imageFormats.large.url;
      }
      return this.story.ImageUrl[0].url;
    },
    isSmallImageSet: story => {
      const imageFormats = story.ImageUrl[0].formats;
      if (imageFormats.hasOwnProperty('small')) {
        return imageFormats.small.url;
      }
      return story.ImageUrl[0].url;
    },
  },
  async fetch({ store, route }) {
    await store.dispatch('stories/fetchStories');
    await store.dispatch('stories/fetchStoriesWithId', { id: route.params.id });
  },
};
</script>

<style scoped>
.story__head {
  display: flex;
  justify-content: space-between;
}

.story__img {
  width: 580px;
  height: 580px;
  background: #ededed;
  object-fit: cover;
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

.story__text >>> p {
  margin: 0 0 36px;
}

.story__text >>> blockquote {
  font-weight: 600;
  margin: 0;
}

.stories__list {
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
  margin-top: 90px;
}

.stories__container {
  margin-bottom: 70px;
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

  .stories__container {
    margin-bottom: 60px;
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

  .stories__container {
    margin-bottom: 45px;
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
    left: 23%;
    top: 48%;
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
  }

  .stories__container {
    margin-bottom: 40px;
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
    left: 5%;
    top: 37%;
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
  }
}
</style>
