<template>
  <Container :className="'container_type_margin'">
    <div class="video" id="video">
      <div class="video__story">
        <h1 class="video__title">
          Истории людей, победивших рак, но не свои привычки
        </h1>
        <p class="video__text">
          Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
          страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди
          с их историями.
        </p>
      </div>

      <div class="video__container">
        <VideoIframe class="video__block" :src="videos[currentNumber].url" />
        <p class="video__memo">
          Все видео вы можете найте на
          <a href="#" target="_blank" class="line">нашем YouTube канале</a>.
        </p>
      </div>

      <div
        class="arrow__wrapper arrow__wrapper_left"
        @click="prevVideo"
        :disabled="currentNumber === 0"
      >
        <div
          class="arrow arrow__left"
          :class="[{ arrow_disabled: currentNumber === 0 }]"
        ></div>
      </div>
      <div
        class="arrow__wrapper arrow__wrapper_right"
        @click="nextVideo"
        :disabled="currentNumber === videos.length - 1"
      >
        <div
          class="arrow arrow__right"
          :class="[{ arrow_disabled: currentNumber === videos.length - 1 }]"
        ></div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container.vue';
import VideoIframe from './UI/VideoIframe';

export default {
  components: {
    VideoIframe,
    Container,
  },

  computed: {
    currentNumber() {
      return this.$store.getters['video/getNumber'];
    },
    videos() {
      return this.$store.getters['video/getVideos'];
    },
  },
  methods: {
    prevVideo() {
      if (this.currentNumber === 0) return;
      return this.$store.commit('video/prevVideo');
    },
    nextVideo() {
      if (this.currentNumber === this.videos.length - 1) return;
      return this.$store.commit('video/nextVideo');
    },
  },

  // этот fetch не работает почему-то =(
  // async fetch({ store, params }) {
  //   await store.dispatch('video/fetchVideos');
  // },
};
</script>

<style scoped>
.video {
  display: flex;
  background-color: #fff;
}

.video__title {
  max-width: 413px;
  min-height: 108px;
  margin-top: 10px;
  margin-bottom: 32px;

  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.video__text {
  max-width: 350px;
  min-height: 110px;

  font-size: 18px;
  line-height: 22px;
  color: #666;
}

.arrow__wrapper {
  position: absolute;
  margin-top: 410px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbfbfb;
  cursor: pointer;
}

.arrow__wrapper_right {
  margin-left: 40px;
}

.video__container {
  margin-left: 40px;
  width: 867px;
  position: relative;
}

.video__block {
  height: 450px;
}

.video__memo {
  margin-top: 10px;
  font-size: 12px;
  line-height: 16px;
  color: #666;
}

.line {
  text-decoration: underline;
  color: #666;
}

.arrow {
  width: 16px;
  height: 16px;
  border-top: 1px solid black;
  border-right: 1px solid black;
}

.arrow__left {
  transform: rotate(-135deg);
  margin-left: 10px;
}

.arrow__right {
  transform: rotate(45deg);
  margin-right: 10px;
}

.arrow_disabled {
  border-color: #bfbfbf;
}

@media screen and (max-width: 1280px) {
  .video {
    min-height: 426px;
  }

  .video__title {
    max-width: 367px;
    min-height: 96px;
    margin-bottom: 30px;
    font-size: 28px;
    line-height: 32px;
  }

  .video__text {
    max-width: 305px;
    min-height: 100px;
    font-size: 16px;
    line-height: 20px;
  }

  .arrow__wrapper {
    margin-top: 360px;
  }

  .arrow__wrapper_right {
    margin-left: 40px;
  }

  .video__container {
    width: 773px;
  }

  .video__block {
    height: 400px;
  }
}

@media screen and (max-width: 1024px) {
  .video {
    min-height: 340px;
  }

  .video__title {
    max-width: 288px;
    min-height: 84px;
    margin-bottom: 20px;
    font-size: 24px;
    line-height: 28px;
  }

  .video__text {
    max-width: 260px;
    min-height: 80px;
    font-size: 13px;
    line-height: 16px;
  }

  .arrow__wrapper {
    margin-top: 274px;
  }

  .arrow__wrapper_right {
    margin-left: 40px;
  }

  .video__container {
    margin-left: 30px;
    width: 606px;
  }

  .video__block {
    height: 314px;
  }
}

@media screen and (max-width: 768px) {
  .video {
    min-height: 526px;
    flex-direction: column;
    position: relative;
  }

  .video__title {
    max-width: 380px;
    min-height: 56px;
    margin: 0 auto 26px;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }

  .video__text {
    max-width: 380px;
    min-height: 48px;
    margin: 0 auto 60px;
    font-size: 13px;
    line-height: 16px;
  }

  .video__memo {
    margin-top: 20px;
  }
  .arrow__wrapper {
    margin-top: 340px;
  }

  .arrow__wrapper_left {
    left: 0;
  }

  .arrow__wrapper_right {
    right: 0;
  }

  .video__container {
    width: 580px;
    margin: 0 auto 0;
  }

  .video__block {
    height: 300px;
  }
}

@media screen and (max-width: 320px) {
  .video {
    min-height: 312px;
    flex-direction: column;
  }

  .video__title {
    max-width: 290px;
    min-height: 42px;
    margin: 0 auto 16px;
    font-size: 18px;
    line-height: 21px;
    text-align: left;
  }

  .video__text {
    max-width: 290px;
    min-height: 64px;
    margin: 0 auto 40px;
    font-size: 13px;
    line-height: 16px;
  }

  .arrow__wrapper {
    margin-top: 220px;
    background: none;
  }

  .video__container {
    width: 290px;
    margin: 0 auto;
  }

  .video__block {
    height: 150px;
  }

  .video__memo {
    display: none;
  }
}
</style>
