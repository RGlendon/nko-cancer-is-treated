<template>
  <Container :className="'container_type_margin'">
    <h2 class="stories__title">Истории неизлечимых привычек</h2>
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
    <ShowMore class="showmore" />
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
    itemsToLoop() {
      if (process.browser) {
        if (window.innerWidth <= 768 && window.innerWidth > 475) {
          return this.stories.filter((item, index) => index < 9);
        } else if (window.innerWidth <= 475) {
          return this.stories.filter((item, index) => index < 6);
        } else {
          return this.stories.filter((item, index) => index < 8);
        }
      }
    },
  },
  beforeMount() {
    this.$store.dispatch('stories/fetchStories');
  },
  methods: {
    goToDetail(id) {
      this.$router.push(`/stories/${id}`);
    },
    isSmallImageSet: story => {
      const imageFormats = story.ImageUrl[0].formats;
      if (imageFormats.hasOwnProperty('small')) {
        return imageFormats.small.url;
      }
      return story.ImageUrl[0].url;
    },
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
  overflow: hidden;
}

.stories__title {
  width: 413px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 0;
}

.showmore {
  margin-top: 70px;
}

@media screen and (max-width: 1280px) {
  .showmore {
    margin-top: 60px;
  }
}

@media screen and (max-width: 1024px) {
  .showmore {
    margin-top: 46px;
  }
}

@media screen and (max-width: 768px) {
  .stories__list {
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0;
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

  @media screen and (max-width: 320px) {
    .showmore {
      margin-top: 40px;
    }

    .stories__list {
      list-style: none;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      padding: 0;
      margin-top: 10px;
    }

    .stories__title {
      width: 290px;
      font-family: Inter;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 21px;
      margin: 0;
      text-align: left;
    }
  }
}
</style>
