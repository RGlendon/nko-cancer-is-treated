<template>
  <Container :className="'container_type_margin'">
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
      </div>
      <div class="arrow__wrapper-one">
        <div class="arrow arrow__left arrow_active"></div>
      </div>
      <div class="arrow__wrapper-two">
        <div class="arrow arrow__right"></div>
      </div>
      <div class="video__container">
        <div class="video__block">
          <div class="video__play">
            <div class="video__circle"></div>
            <div class="video__triangle"></div>
          </div>
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
  min-height: 476px;
  display: flex;
  flex-direction: row;
  background-color: #fff;
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

.arrow__wrapper-one {
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

.arrow__wrapper-two {
  position: absolute;
  margin-top: 410px;
  margin-left: 40px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbfbfb;
  cursor: pointer;
}

.video__container {
  margin-left: 40px;
  width: 867px;
}

.video__block {
  height: 450px;
  display: flex;
  background: #ededed;
}

.video__play {
  width: 90px;
  height: 90px;
  display: flex;
  margin: 180px 0 0 388px;
}
.video__circle {
  width: 90px;
  height: 90px;
  background-color: #c4c4c4;
  border-radius: 50%;
}

.video__triangle {
  position: absolute;
  margin-top: 25px;
  margin-left: 30px;
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

  .arrow__wrapper-one {
    margin-top: 360px;
  }

  .arrow__wrapper-two {
    margin-top: 360px;
    margin-left: 40px;
  }

  .video__container {
    width: 773px;
  }

  .video__block {
    height: 400px;
  }

  .video__play {
    margin: 162px 0 0 348px;
  }

  .video__memo {
    max-width: 773px;
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

  .arrow__wrapper-one {
    margin-top: 274px;
  }

  .arrow__wrapper-two {
    margin-top: 274px;
    margin-left: 40px;
  }

  .video__container {
    margin-left: 30px;
    width: 606px;
  }

  .video__block {
    height: 314px;
  }

  .video__play {
    margin: 119px 0 0 265px;
  }

  .video__memo {
    max-width: 606px;
  }
}
@media screen and (max-width: 768px) {
  .video {
    min-height: 526px;
    flex-direction: column;
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

  .arrow__wrapper-one {
    margin-top: 340px;
    margin-left: -54px;
  }

  .arrow__wrapper-two {
    margin-top: 340px;
    margin-left: 594px;
  }

  .video__container {
    width: 580px;
    margin: 0 auto 0;
  }

  .video__block {
    height: 300px;
  }

  .video__play {
    width: 76px;
    height: 76px;
    margin: 110px 0 0 250px;
  }

  .video__circle {
    width: 76px;
    height: 76px;
  }

  .video__triangle {
    margin-top: 20px;
    margin-left: 30px;
    border-top: 17.5px solid transparent;
    border-left: 25px solid #fff;
    border-bottom: 17.5px solid transparent;
  }

  .video__memo {
    max-width: 580px;
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
    text-align: center;
  }

  .video__text {
    max-width: 290px;
    min-height: 64px;
    margin: 0 auto 40px;
    font-size: 13px;
    line-height: 16px;
  }

  .arrow__wrapper-one {
    margin-top: 220px;
    margin-left: 0px;
    background: none;
  }

  .arrow__wrapper-two {
    margin-top: 220px;
    margin-left: 250px;
    background: none;
  }

  .video__container {
    width: 290px;
    margin: 0 auto 0;
  }

  .video__block {
    height: 150px;
  }

  .video__play {
    width: 38px;
    height: 38px;
    margin: 60px 0 0 130px;
  }

  .video__circle {
    width: 38px;
    height: 38px;
  }

  .video__triangle {
    position: absolute;
    margin-top: 10px;
    margin-left: 12.5px;
    border-top: 10px solid transparent;
    border-left: 17.5px solid #fff;
    border-bottom: 10px solid transparent;
  }

  .video__memo {
    display: none;
  }
}
</style>
