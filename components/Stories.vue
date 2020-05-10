<template>
  <div class="stories">
    <h2 class="stories__title">Истории неизлечимых привычек</h2>
    <div class="stories__container">
      <div class="story__item">
        <a href="../stories/1" class="story__link">
          <div class="story__wrap">
            <img
              src="https://i.pinimg.com/474x/8e/8d/d0/8e8dd0868c61806e1c24bc8dd3ec0d91.jpg"
              class="story__background"
            />
            <h3 class="story__title">Владимир Тен</h3>
            <p class="story__subtitle">
              Я всегда читаю книги с конца, - и это не лечится, в отличие от
              рака.
            </p>
          </div>
        </a>
      </div>
      <div class="story__item">
        <a href="../stories/1" class="story__link">
          <div class="story__wrap">
            <img class="story__background" />
            <h3 class="story__title">Владимир Познер</h3>
            <p class="story__subtitle">
              Я боюсь акул — и, в отличии от рака, это не лечится.
            </p>
          </div>
        </a>
      </div>
      <div class="story__item">
        <a href="../stories/1" class="story__link">
          <div class="story__wrap">
            <img class="story__background" />
            <h3 class="story__title">Александр Тарханов</h3>
            <p class="story__subtitle">
              Я не могу победить свою пунктуальность в отличии от рака.
            </p>
          </div>
        </a>
      </div>
      <div class="story__item">
        <a href="../stories/1" class="story__link">
          <div class="story__wrap">
            <img class="story__background" />
            <h3 class="story__title">Владимир Тен</h3>
            <p class="story__subtitle">
              Я всегда читаю книги с конца, - и это не лечится, в отличие от
              рака.
            </p>
          </div>
        </a>
      </div>
      <div class="story__item">
        <a href="../stories/1" class="story__link">
          <div class="story__wrap">
            <img class="story__background" />
            <h3 class="story__title">Владимир Тен</h3>
            <p class="story__subtitle">
              Я всегда читаю книги с конца, - и это не лечится, в отличие от
              рака.
            </p>
          </div>
        </a>
      </div>
      <div class="story__item">
        <a href="../stories/1" class="story__link">
          <div class="story__wrap">
            <img class="story__background" />
            <h3 class="story__title">Владимир Познер</h3>
            <p class="story__subtitle">
              Я боюсь акул — и, в отличии от рака, это не лечится.
            </p>
          </div>
        </a>
      </div>
      <div class="story__item">
        <a href="../stories/1" class="story__link">
          <div class="story__wrap">
            <img class="story__background" />
            <h3 class="story__title">Александр Тарханов</h3>
            <p class="story__subtitle">
              Я не могу победить свою пунктуальность в отличии от рака.
            </p>
          </div>
        </a>
      </div>
      <div class="story__item">
        <a href="../stories/1" class="story__link">
          <div class="story__wrap">
            <img class="story__background" />
            <h3 class="story__title">Владимир Тен</h3>
            <p class="story__subtitle">
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
.stories {
  max-width: calc(1440px - 120px);
  min-height: 689px;
  margin: 0 auto;
  margin-top: 100px;
}

.stories__container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.stories__title {
  width: 413px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.story__link {
  text-decoration: none;
  color: black;
}

.story__item {
  margin-top: 70px;
}

.story__background {
  background: #ededed;
  width: 300px;
  height: 300px;
}

.story__title {
  margin-top: 20px;
  width: 300px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
}

.story__subtitle {
  margin-top: 14px;
  width: 250px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
}
</style>
