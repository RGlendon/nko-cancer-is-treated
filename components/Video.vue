<template>
  <Container>
    <div class="video">
      <div class="video__story">
        <h1 class="video__title">
          Истории людей, победивших рак, но не свои привычки
        </h1>
        <p class="video__text">
          Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
          страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди
          с их историями.
        </p>

        <div class="arrow__container">
          <div class="arrow__wrapper">
            <div class="arrow arrow__left arrow_active"></div>
          </div>
          <div class="arrow__wrapper">
            <div class="arrow arrow__right"></div>
          </div>
        </div>
      </div>
      <div class="video__container">
        <div class="video__block">
          <div class="video__circle"></div>
          <div class="video__triangle"></div>
        </div>
        <div class="video__memo">
          Все видео вы можете найте на
          <a href="#" class="line">нашем YouTube канале</a>.
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container.vue';
export default {
  components: {
    Container,
  },
};
</script>

<style scoped>
.video {
  background-color: #fff;
  width: 1440px;
  min-height: 476px;
  display: flex;
  flex-direction: row;
}

.video__title {
  max-width: 413px;
  min-height: 108px;
  margin-top: 10px;
  margin-bottom: 32px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.video__text {
  max-width: 350px;
  min-height: 110px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666;
}

.video__container {
  margin-left: 40px;
  width: 870px;
}

.video__block {
  height: 450px;
  display: flex;
  background: #ededed;
}

.video__circle {
  width: 90px;
  height: 90px;
  margin: 180px 0 0 388px;
  background-color: #c4c4c4;
  border-radius: 50%;
}

.video__triangle {
  position: absolute;
  margin-left: 420px;
  margin-top: 205px;
  border-top: 20px solid transparent;
  border-left: 35px solid #fff;
  border-bottom: 20px solid transparent;
}

.video__memo {
  max-width: 867px;
  min-height: 16px;
  margin-top: 10px;
  font-family: Inter;
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  color: #666;
}

.line {
  text-decoration: underline;
  color: #666;
}

.arrow__container {
  margin-top: 162px;
  display: flex;
}

.arrow__wrapper {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbfbfb;
  cursor: pointer;
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

.arrow_active {
  border-color: #bfbfbf;
}

@media screen and (max-width: 1280px) {
  .video {
    background-color: #fff;
    max-width: 1280px;
    min-height: 476px;
    display: flex;
    flex-direction: row;
  }

  .video__title {
    max-width: 365px;
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

  .video__container {
    margin-left: 40px;
    width: 770px;
    height: 400px;
  }

  .video__block {
    height: 400px;
    display: flex;
    background: #ededed;
  }

  .video__circle {
    margin: 150px 0 0 330px;
  }

  .video__triangle {
    position: absolute;
    margin-left: 360px;
    margin-top: 175px;
  }

  .video__memo {
    font-size: 12px;
    line-height: 16px;
  }

  .arrow__container {
    margin-top: 136px;
    display: flex;
  }
}
@media screen and (max-width: 1024px) {
  .video {
    max-width: 1024px;
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

  .video__container {
    margin-left: 30px;
    width: 606px;
    height: 314px;
  }

  .video__block {
    height: 314px;
  }

  .video__circle {
    margin: 110px 0 0 250px;
  }

  .video__triangle {
    position: absolute;
    margin-left: 280px;
    margin-top: 135px;
  }

  .arrow__container {
    margin-top: 80px;
    display: flex;
  }
}
@media screen and (max-width: 768px) {
  .video {
    width: 768px;
    min-height: 526px;
    display: flex;
    flex-direction: column;
  }

  .video__title {
    max-width: 380px;
    min-height: 56px;
    margin: 0 auto 26px;
    font-size: 24px;
    line-height: 28px;
  }

  .video__text {
    max-width: 380px;
    min-height: 48px;
    margin: 0 auto 190px;
    font-size: 13px;
    line-height: 16px;
  }

  .video__container {
    position: absolute;
    margin-top: 200px;
    width: 580px;
  }

  .video__block {
    height: 300px;
    display: flex;
    background: #ededed;
  }

  .video__circle {
    width: 90px;
    height: 90px;
    margin: 105px 0 0 250px;
    background-color: #c4c4c4;
    border-radius: 50%;
  }

  .video__triangle {
    position: absolute;
    margin-left: 280px;
    margin-top: 130px;
  }

  .line {
    text-decoration: underline;
    color: #666;
  }

  .arrow__container {
    display: flex;
  }

  .arrow__wrapper {
    margin-right: 580px;
  }
}
@media screen and (max-width: 320px) {
  .video {
    width: 320px;
    min-height: 312px;
    display: flex;
    flex-direction: column;
  }

  .video__title {
    max-width: 290px;
    min-height: 42px;
    margin: 0 auto 16px;
    font-size: 18px;
    line-height: 21px;
  }

  .video__text {
    max-width: 290px;
    min-height: 64px;
    margin: 0 auto 107px;
    font-size: 13px;
    line-height: 16px;
  }

  .video__container {
    position: absolute;
    width: 290px;
    margin: 175px auto 0;
    z-index: 0;
  }

  .video__block {
    height: 150px;
    display: flex;
    background: #ededed;
  }

  .video__circle {
    width: 90px;
    height: 90px;
    margin: 105px 0 0 250px;
    background-color: #c4c4c4;
    border-radius: 50%;
    display: none;
  }

  .video__triangle {
    position: absolute;
    margin-left: 280px;
    margin-top: 150px;
    display: none;
  }

  .arrow__wrapper {
    margin-right: 230px;
    z-index: 1;
    background: #ededed;
  }
  .video__memo {
    display: none;
  }
}
</style>
