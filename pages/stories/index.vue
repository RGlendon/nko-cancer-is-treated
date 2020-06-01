<template>
  <Container :className="'container_type_margin'">
    <h2 class="stories__title">Истории неизлечимых привычек</h2>
    <form action="" method="get" class="stories__search">
      <Input
        name="search"
        placeholder="Искать здесь..."
        type="search"
        :className="'stories__search-input'"
      />
      <Button type="submit" :className="'stories__search-button'">Поиск</Button>
    </form>
    <div class="stories__container">
      <ul class="stories__list">
        <li class="stories__item" v-for="story in itemsToLoop" :key="story.id">
          <nuxt-link :to="`/stories/${story.id}`">
            <Story
              class="story"
              :ImageUrl="isSmallImageSet(story)"
              :title="story.title"
              :author="story.author"
            />
          </nuxt-link>
          <!--            @cardClick="goToDetail(story.id)"-->
        </li>
      </ul>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container.vue';
import Story from '@/components/Story';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';

export default {
  components: {
    Button,
    Input,
    Container,
    Story,
  },

  computed: {
    stories() {
      return this.$store.getters['stories/getStories'];
    },
    itemsToLoop() {
      if (process.browser) {
        if (window.innerWidth <= 768 && window.innerWidth > 475) {
          return this.stories.filter((item, index) => index < 12);
        } else if (window.innerWidth <= 475) {
          return this.stories.filter((item, index) => index < 9);
        } else {
          return this.stories.filter((item, index) => index < 16);
        }
      }
    },
  },
  beforeMount() {
    this.$store.dispatch('stories/fetchStories');
  },
  methods: {
    // goToDetail(id) {
    //   this.$router.push(`/stories/${id}`);
    // },
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

/*.stories__search-input {*/

/*}*/

.stories__search-button {
  width: 226px;
  height: 52px;
  margin-left: 20px;
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
