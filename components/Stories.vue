<template>
  <Container :className="'container_type_margin'">
    <h2 class="stories__title">Истории неизлечимых привычек</h2>
    <div class="stories__container">
      <ul class="stories__list">
        <li
          class="stories__item"
          v-for="story in stories.slice(0, 9)"
          :key="story.id"
        >
          <Story
            :img="story.img"
            :text="story.text"
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
  },
  methods: {
    goToDetail(id) {
      this.$router.push(`/stories/${id}`);
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
  max-height: 965px;
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
  .stories__list {
    max-height: 872px;
  }

  .showmore {
    margin-top: 60px;
  }
}

@media screen and (max-width: 1024px) {
  .stories__list {
    max-height: 757px;
  }

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
    max-height: 1148px;
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
      max-height: 2632px;
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
